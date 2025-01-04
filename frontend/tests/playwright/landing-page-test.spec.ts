import { test, checkConsoleErrors } from './baseTest';
import { expect } from '@playwright/test';

export const PAGE_DATA = {
  // TODO: use texts from constants.ts class when the page will be ready
  headingWelcomeText: 'Добро пожаловать в Дом молитвы',
  divDomMolitvyText: 'Дом молитвы - протестантская церковь, часть братства евангельских христиан баптистов',
  buttonReadMoreText: 'Узнать больше',
  headingAboutUsText: 'О нас',
  headingHowToBecomeChristianText: 'Как стать христианином?',
  headingOurServicesText: 'Наши служения'
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// checkConsoleErrors(); // uncomment when the page will be ready for test

test.skip('check elements on landing page', {
  tag: '@draft'
}, async ({ page }) => {
  // TODO: change locators to getByRole or XPath when the page will be ready & remove '.skip'

  await test.step('check heading: Welcome', async () => {
    await expect(page.getByText(PAGE_DATA.headingWelcomeText)).toBeVisible();
  });

  await test.step('check div: Dom Molitvy', async () => {
    await expect(page.getByText(PAGE_DATA.divDomMolitvyText)).toBeVisible();
  });

  await test.step('check button: Read More', async () => {
    await expect(page.getByText(PAGE_DATA.buttonReadMoreText)).toBeVisible();
  });

  await test.step('check heading: About Us', async () => {
    await expect(page.getByText(PAGE_DATA.headingAboutUsText)).toBeVisible();
  });

  await test.step('check heading: How to become christian', async () => {
    await expect(page.getByText(PAGE_DATA.headingHowToBecomeChristianText)).toBeVisible();
  });

  await test.step('check heading: Our services', async () => {
    await expect(page.getByText(PAGE_DATA.headingOurServicesText)).toBeVisible();
  });
});