export const config = {
	runtime: 'edge'
};

async function getPosts(url) {
	const res = await fetch(url);
	return res.json();
}

export default async function MyEdgeFunction(url, dataLength) {
	const data = await getPosts(url);
	return data
		.map((element) => {
			return {
				...element,
				processedAt: new Date().toLocaleString()
			};
		})
		.filter((element) => element.body.split(' ').length > 20)
		.slice(0, dataLength);
}
