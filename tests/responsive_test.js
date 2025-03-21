import { expect, test } from '@playwright/test';

test.use({
	viewport: { width: 375, height: 667 }
});

test('layout has navbar in small viewport', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'LONG PHAM' })).toBeVisible();
	await expect(page.getByTitle('Theme switch button')).toBeVisible();
	await expect(page.getByTitle('Menu open button')).toBeVisible();
});

test('layout has footer in small viewport', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('#page-footer').locator('#contact')).toBeVisible();
	await expect(
		page.locator('#page-footer').getByText('© 2025 Long Pham. All Rights Reserved.')
	).toBeVisible();
});
