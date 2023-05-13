import { PrismaClient } from '@prisma/client';
import axios from 'axios';
const prisma = new PrismaClient();

const getPosts = async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
	const { data } = response;
	return data;
};

async function main() {
	const posts = await getPosts();
	for (const post of posts) {
		await prisma.Posts.create({
			data: {
				userId: post.userId,
				title: post.title,
				body: post.body
			}
		});
	}
}

main();
