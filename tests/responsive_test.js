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

test('drawer shows on click', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTitle('Menu open button')).toBeVisible();
	await page.getByTitle('Menu open button').click();
	await expect(page.getByTestId('drawer').getByRole('link', { name: 'Projects' })).toBeVisible();
	await expect(page.getByTestId('drawer').getByRole('link', { name: 'CV' })).toBeVisible();
	await expect(page.getByTestId('drawer').getByRole('link', { name: 'Blog' })).toBeVisible();
	await expect(page.getByTestId('drawer').getByRole('link', { name: 'Contact' })).toBeVisible();
});

// FIXME: some race condition here?
test('navbar links work', async ({ page }) => {
	// Test navigation for the "Projects" link
	await page.getByTestId('drawer').getByRole('link', { name: 'Projects' }).click();
	await page.waitForURL('/projects');
	await page.goto('/');

	// Test navigation for the "CV" link
	await page.getByTestId('drawer').getByRole('link', { name: 'CV' }).click();
	await page.waitForURL('/cv');
	// Start waiting for download before clicking. Note no await.
	const downloadPromise = page.waitForEvent('download');
	await page.getByText('Download file').click();
	const download = await downloadPromise;
	expect(download).toBeTruthy();

	// Test navigation for the "Blog" link
	await page.getByTestId('drawer').getByRole('link', { name: 'Blog' }).click();
	await page.waitForURL('/blog');
	await page.goto('/');

	// Test navigation for the "Contact" link
	await page.getByTestId('drawer').getByRole('link', { name: 'Contact' }).click();
	await page.waitForURL('/contact');
	await page.goto('/');
});

test('content renders', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('#page')).toBeVisible();
});
