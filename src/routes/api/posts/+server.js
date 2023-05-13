import { json } from '@sveltejs/kit';
import db from '../../../lib/db';

export const config = {
	runtime: 'edge'
};

export async function GET({ url }) {
	const posts = await db.posts.findMany();

	return json(posts);

	// const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
	// const { data } = posts;
	// const urlParams = url.searchParams.get('param1');

	// if (urlParams) {
	// 	const cutData = data
	// 		.map((element) => {
	// 			return {
	// 				...element,
	// 				processedAt: new Date().toLocaleString()
	// 			};
	// 		})
	// 		.slice(0, urlParams);
	// 	return json(cutData);
	// }

	// return json(data);
}
