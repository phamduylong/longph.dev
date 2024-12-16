/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
	let posts = await locals.pb.collection('posts').getFullList({
		sort: '-updated',
	});
	return {
		posts
	};
};
