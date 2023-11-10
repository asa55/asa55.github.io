import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://asa55.github.io/test');

  await page.getByRole('link', { name: 'asa55', exact: true }).click();

  await expect(page.locator('body')).toContainText('asa55');
});
