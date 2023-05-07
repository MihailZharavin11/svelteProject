export const getPosts = async () => {
	const endpoint = 'https://jsonplaceholder.typicode.com/posts';
	const response = await fetch(endpoint);
	const data = await response.json();
	return data;
};
