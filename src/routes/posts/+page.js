import axios from 'axios';
export async function load({ url }) {
	try {
		const { searchParams } = url;
		let initialValueToSkip = searchParams.get('skip') || 0;
		const response = await axios.get(`http://127.0.0.1:5173/api/posts?skip=${initialValueToSkip}`);
		const { data } = response;
		const posts = data;

		return {
			posts
		};
	} catch (error) {
		console.log('Ошибка при загрузке данных', error);
		return {
			errorMessage: error
		};
	}
}
