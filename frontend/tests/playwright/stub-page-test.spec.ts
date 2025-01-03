import { test, expect } from '@playwright/test';

test.describe('tests with beforeEach', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title', async ({ page }) => {
    await expect(page.getByRole('heading', {name: 'Скоро здесь будет сайт'})).toBeVisible();
  });
});

test('check errors in console', async ({ page }) => {
  const errors: string[] = [];
  
  // Set handlers before page loading
  await page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  await page.on('pageerror', (error) => {
    errors.push(error.message);
  });

  // Go to page
  await page.goto('/');
  
  // Wait for loading page
  await page.waitForLoadState('networkidle');

  await expect(errors, 'Found errors on the page').toHaveLength(0);
});