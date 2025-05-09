export const actions = {
	// This action is called when the user clicks the theme button
	setTheme: async ({ cookies, request }) => {
		const formData = await request.formData();
		const theme = formData.get('theme')?.toString() ?? 'metal';
		// Sets the selected theme to the cookie
		cookies.set('theme', theme, {
			path: '/'
		});
		return { theme };
	}
};
