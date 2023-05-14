import { json } from '@sveltejs/kit';
import db from '../../../lib/db';

export async function GET({ url }) {
	const skip = Number(url.searchParams.get('skip'));
	let posts = await db.posts.findMany({
		take: 10,
		skip
	});

	posts = posts.map((element) => {
		return {
			...element,
			processedAt: new Date().toLocaleString()
		};
	});

	return json(posts);
}
