/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals, url }) => {
	const tagParam = url.searchParams.get('tag');
	let tagQuery = '';
	if (tagParam && tagParam !== '') {
		tagQuery = `tags ~ '"${tagParam}"'`;
	}
	let posts = await locals.pb.collection('posts').getFullList({
		sort: '-updated',
		filter: tagQuery
	});
	return {
		posts
	};
};
