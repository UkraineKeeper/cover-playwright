import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://hotsbet.com/');
  await page.getByRole('button', { name: 'Ok', exact: true }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Continue with email' }).click();
  await page.getByPlaceholder('Type valid e-mail').click();
  await page.getByPlaceholder('Type valid e-mail').fill('robey25703@nastyx.com'); // 
  await page.getByPlaceholder('At least 8 characters').click();
  await page.getByPlaceholder('At least 8 characters').fill('cj@cmRk399Sr#()'); // 
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.locator('.c-avatar.c-avatar--cover')).toBeVisible();
  await page.goto('https://hotsbet.com/tournaments/pickem24/pickems');
  await page.locator('.c-button').first().click();
  await page.locator('#stage-2368').getByRole('button', { name: 'SUBMIT PICKS' }).click();
  await page.getByRole('button', { name: 'yes, submit' }).click();
  await page.locator('#stage-2367').getByRole('button', { name: ' RANDOM' }).click();
  await page.locator('#stage-2367').getByRole('button', { name: 'SUBMIT PICKS' }).click();
  await page.getByRole('button', { name: 'yes, submit' }).click();
  await page.getByRole('button', { name: ' RANDOM' }).click();
  await page.getByRole('button', { name: 'SUBMIT PICKS' }).click();
  await page.getByRole('button', { name: 'yes, submit' }).click();
  await page.goto('https://hotsbet.com/tournaments/pickem24/pickems');
});