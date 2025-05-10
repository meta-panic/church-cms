import { test as base, expect, Page } from '@playwright/test';

export const PAGE_BASE_DATA = {
  pageTitleText: 'Дом молитвы',
  pageMetaDescriptionText: 'Церковь Евангельских христиан-баптистов',
};

type CustomFixtures = {
  page: Page;
  consoleErrors: string[];
  cookieDomain: string;
  strapiURL: string;
};

export const test = base.extend<CustomFixtures>({
  consoleErrors: async ({}, use) => {
    const errors: string[] = [];
    await use(errors);
  },

  page: async ({ page, consoleErrors }, use) => {
    // Catch errors in console
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Catch unhandled exceptions on page
    page.on('pageerror', error => {
      consoleErrors.push(error.message);
    });

    // Add custom header to all requests
    page.route('**', route => {
      const headers = {
        ...route.request().headers(),
        'Debug-Header': '[0_o] Hello from playwright autotests'
      };
      route.continue({ headers });
    });

    await use(page);
  },

  cookieDomain: async ({}, use, testInfo) => {
    const projectName = testInfo.project.name;
    const domain = projectName === 'local' ? 'localhost' : 'frontend';
    await use(domain);
  },

  strapiURL: async ({}, use, testInfo) => {
    const projectName = testInfo.project.name;
    const url = projectName === 'local' ? 'http://localhost:1337' : 'http://cms:1337';
    await use(url);
  },
});

// Existing console errors check
export const checkConsoleErrors = () => {
  test('check console errors', async ({ consoleErrors, page }) => {
    await page.waitForLoadState('networkidle');
    expect(consoleErrors, 'Found errors on the page').toHaveLength(0);
  });
};

// Check base elements on pages
export const checkBaseElements = () => {
  test('check base elements', async ({ page }) => {
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');

    // Check the page title
    const pageTitle = await page.title();
    expect(pageTitle).toBe(PAGE_BASE_DATA.pageTitleText);

    // Check the meta description
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
    expect(metaDescription).toBe(PAGE_BASE_DATA.pageMetaDescriptionText);
  });
};
