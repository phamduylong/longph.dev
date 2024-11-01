/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
	const posts = await locals.pb.collection('posts').getFullList({
		sort: '-created'
	});

	return {
		posts
	};
};
