import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').fill('pallavi_jan1989');
 
  await page.locator('#loginpassword').fill('Ten_jan1989');
  
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.locator('#logout2')).toBeVisible()
});