import { test, checkConsoleErrors } from './baseTest';
import { expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

checkConsoleErrors();

test('has title', async ({ page }) => {
  await expect(page.getByRole('heading', {name: 'Скоро здесь будет сайт'})).toBeVisible();
});