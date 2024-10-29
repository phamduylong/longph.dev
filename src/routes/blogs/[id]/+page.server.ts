/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals, params }) => {
	const post = await locals.pb.collection('posts').getOne(params.id);

	return {
		post
	};
};
