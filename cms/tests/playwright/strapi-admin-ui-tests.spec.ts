import { test, expect } from '@playwright/test';

export const TEST_USERS = {
  adminUser: {
      email: process.env.DEV_ADMIN_EMAIL || ``,
      password: process.env.DEV_ADMIN_PASSWORD || ``
  }
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('unauthorized redirect from localhost:1337 to /admin/auth/login', async ({ page }) => {
  await expect(page).toHaveURL('http://localhost:1337/admin/auth/login');
});

test('login to strapi-admin', async ({ page }) => {
  checkTestUserCredentialsExist();

  // Fill in the email and password fields & press Login button
  await page.fill('input[name="email"]', TEST_USERS.adminUser.email);
  await page.fill('input[name="password"]', TEST_USERS.adminUser.password);
  await page.click('button[type="submit"]');
  
  // Ensure there are no validation errors displayed under the input fields
  await expect(page.locator('[data-strapi-field-error="true"]')).toHaveCount(0);

  // Verify redirection to the authorized admin dashboard with the welcome message
  await expect(page.locator('//h1')).toHaveText('Welcome 👋');
});

async function checkTestUserCredentialsExist() {
  if (!TEST_USERS.adminUser.email || !TEST_USERS.adminUser.password) {
    throw new Error('Missing test user credentials in .env file');
  }
}