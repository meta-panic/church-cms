import { test as base, expect, Page } from '@playwright/test';

type CustomFixtures = {
  page: Page;
  consoleErrors: string[];
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
  }
});

// Existing console errors check
export const checkConsoleErrors = () => {
  test('check console errors', async ({ consoleErrors, page }) => {
    await page.waitForLoadState('networkidle');
    expect(consoleErrors, 'Found errors on the page').toHaveLength(0);
  });
};