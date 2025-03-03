/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		reuseExistingServer: true,
		command: 'pnpm build && pnpm preview',
		url: 'http://localhost:4173',
		stderr: 'pipe',
		stdout: 'pipe'
	},
	use: {
		baseURL: 'http://localhost:4173'
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
