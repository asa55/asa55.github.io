import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://asa55.github.io/test');

  // Click the get started link.
  await page.getByRole('link', { name: 'asa55', exact: true }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('textbox', { name: 'asa55' })).toBeVisible();
});