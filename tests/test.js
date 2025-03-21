import { expect, test } from '@playwright/test';

test('layout has navbar', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Long Pham');
	await expect(page.getByRole('link', { name: 'LONG PHAM' })).toBeVisible();
	await expect(page.getByTestId('app-bar').getByRole('link', { name: 'Projects' })).toBeVisible();
	await expect(page.getByTestId('app-bar').getByRole('link', { name: 'CV' })).toBeVisible();
	await expect(page.getByTestId('app-bar').getByRole('link', { name: 'Blog' })).toBeVisible();
	await expect(page.getByTestId('app-bar').getByRole('link', { name: 'Contact' })).toBeVisible();
	await expect(page.getByTestId('app-bar').getByRole('link', { name: 'GitHub' })).toBeVisible();
	await expect(page.getByTestId('app-bar').getByText('Themes')).toBeVisible();
});

test('layout has footer', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('#page-footer').locator('#contact')).toBeVisible();
	await expect(
		page.locator('#page-footer').getByText('© 2025 Long Pham. All Rights Reserved.')
	).toBeVisible();
});
