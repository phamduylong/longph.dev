import { DB_URL, ADMIN_USER, ADMIN_PASSWORD } from '$env/static/private';
import PocketBase from 'pocketbase';
/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	let theme = '';

	event.locals.pb = new PocketBase(DB_URL);

	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') ?? '');

	if (!event.locals.pb.authStore.isAdmin) {
		// very unethical, I don't see why would this happen. But, I have done more moronic things before
		await event.locals.pb.admins.authWithPassword(ADMIN_USER, ADMIN_PASSWORD);
	}

	const cookieTheme = event.cookies.get('theme');

	if (cookieTheme) {
		theme = cookieTheme;
	} else {
		event.cookies.set('theme', 'skeleton', { path: '/' });
		theme = 'skeleton';
	}

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
	});

	response.headers.append(
		'set-cookie',
		event.locals.pb.authStore?.exportToCookie({ secure: false })
	);

	return response;
};
