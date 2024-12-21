/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
	return {
		posts: await locals.pb.collection('posts').getFullList({
			sort: '-updated'
		})
	};
};
