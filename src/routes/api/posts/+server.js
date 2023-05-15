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

export async function POST({ request }) {
	const data = await request.json();

	const post = await db.posts.create({
		data: {
			userId: 7,
			...data
		}
	});

	return new Response(
		JSON.stringify({
			success: true,
			data: post
		}),
		{
			headers: {
				'Content-Type': 'aplication/json'
			}
		}
	);
}
