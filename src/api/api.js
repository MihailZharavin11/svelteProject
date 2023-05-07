export const config = {
	runtime: 'edge'
};

async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	return res.json();
}

export default function MyEdgeFunction(req) {
	const data = getPosts();
	return data;
}
