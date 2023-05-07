export const config = {
	runtime: 'edge'
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getAlbum() {
	const res = await fetch('https://jsonplaceholder.typicode.com/albums/1');
	await wait(10000);
	return res.json();
}

export default function MyEdgeFunction(request) {
	getAlbum().then((json) => console.log({ json }));

	return new Response(`Hello, from ${request.url} I'm an Edge Function!`);
}
