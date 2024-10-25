import PocketBase from 'pocketbase';
import { DB_URL } from '$env/static/private'
const client = new PocketBase(DB_URL);

export const load = async () => {
	const data = await client.collection('posts').getFullList({
		sort: '-created'
	});
	return {
		posts: data
	};
};
