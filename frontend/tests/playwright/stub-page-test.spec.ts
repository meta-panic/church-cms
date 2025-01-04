import { test, checkConsoleErrors } from './baseTest';
import { expect } from '@playwright/test';

export const PAGE_DATA = {
  headerText: 'Скоро здесь будет сайт'
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

checkConsoleErrors();

test('has title', async ({ page }) => {
  await expect(page.getByRole('heading', {name: PAGE_DATA.headerText})).toBeVisible();
});

test('should match snapshot', async ({ page }) => {
  await expect(await page.screenshot()).toMatchSnapshot('stub-page-snapshot.png');
});