import { test, expect } from '@playwright/test';

test('unauthorized redirect from localhost:1337 to /admin/auth/login', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL('http://localhost:1337/admin/auth/login');
});

test('login to strapi-admin', async ({ page }) => {
  await page.goto('/');

  await page.fill('input[name="email"]', 'test@test.com');
  await page.fill('input[name="password"]', 'Test-123456');

  await page.click('button[type="submit"]');

  await expect(page.locator('//h1')).toHaveText('Welcome 👋');
});