// export const GET = async (event) => {
// 	return new Response('Hello');
// };

import { json } from '@sveltejs/kit';
import axios from 'axios';

export async function GET(event) {
	const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
	const { data } = posts;

	return json(data);
}
