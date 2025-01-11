import { test, checkConsoleErrors } from './baseTest';
import { expect } from '@playwright/test';

export const TEST_USERS = {
  adminUser: {
      email: process.env.DEV_ADMIN_EMAIL || ``,
      password: process.env.DEV_ADMIN_PASSWORD || ``
  }
};

test.beforeEach(async ({ page }) => {
  await page.goto('http://cms:1337'); // url for docker container
});

checkConsoleErrors();

test('unauthorized redirect from localhost:1337 to /admin/auth/login', async ({ page }) => {
  await expect(page).toHaveURL('http://cms:1337/admin/auth/login');
});

test.skip('register admin-user to strapi-admin', async ({ page }) => {
  checkTestUserCredentialsExist();

  await test.step('Check unauthorized redirect to /auth/register-admin', async () => {
    await expect(page).toHaveURL('http://cms:1337/admin/auth/register-admin');
  });

  await test.step('Fill registration-form fields', async () => {
    await page.fill('input[name="firstname"]', 'Adminiy');
    await page.fill('input[name="email"]', TEST_USERS.adminUser.email);
    await page.fill('input[name="password"]', TEST_USERS.adminUser.password);
    await page.fill('input[name="confirmPassword"]', TEST_USERS.adminUser.password);
    await page.click('button[type="submit"]');
  });

  await test.step('Ensure there are no validation errors displayed under the input fields', async () => {
    await expect(page.locator('[data-strapi-field-error="true"]')).toHaveCount(0);
  });

  await test.step('Verify redirection to the authorized admin dashboard with the welcome message', async () => {
    await expect(page.locator('//h1')).toHaveText('Welcome 👋');
  });
});

test('login to strapi-admin', async ({ page }) => {
  checkTestUserCredentialsExist();

  await test.step('Fill in the email and password fields & press Login button', async () => {
    await page.fill('input[name="email"]', TEST_USERS.adminUser.email);
    await page.fill('input[name="password"]', TEST_USERS.adminUser.password);
    await page.click('button[type="submit"]');
  });
  
  await test.step('Ensure there are no validation errors displayed under the input fields', async () => {
    await expect(page.locator('[data-strapi-field-error="true"]')).toHaveCount(0);
  });

  await test.step('Verify redirection to the authorized admin dashboard with the welcome message', async () => {
    await expect(page.locator('//h1')).toHaveText('Welcome 👋');
  });
});

async function checkTestUserCredentialsExist() {
  if (!TEST_USERS.adminUser.email || !TEST_USERS.adminUser.password) {
    throw new Error('Missing test user credentials in .env file');
  }
}
