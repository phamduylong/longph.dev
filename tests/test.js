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

test('navbar links work', async ({ page }) => {
	// Test navigation for the "Projects" link
	await page.getByTestId('app-bar').getByRole('link', { name: 'Projects' }).click();
	await page.waitForURL('/projects');
	await page.goto('/');

	// Test navigation for the "CV" link
	await page.getByTestId('app-bar').getByRole('link', { name: 'CV' }).click();
	await page.waitForURL('/cv');
	// Start waiting for download before clicking. Note no await.
	const downloadPromise = page.waitForEvent('download');
	await page.getByText('Download file').click();
	const download = await downloadPromise;
	expect(download).toBeTruthy();

	// Test navigation for the "Blog" link
	await page.getByTestId('app-bar').getByRole('link', { name: 'Blog' }).click();
	await page.waitForURL('/blog');
	await page.goto('/');

	// Test navigation for the "Contact" link
	await page.getByTestId('app-bar').getByRole('link', { name: 'Contact' }).click();
	await page.waitForURL('/contact');
	await page.goto('/');

	// Test navigation for the "GitHub" link
	await page.getByTestId('app-bar').getByRole('link', { name: 'GitHub' }).click();
	await page.waitForURL('/github');
	await page.goto('/');
});

test('content renders', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('#page')).toBeVisible();
});
