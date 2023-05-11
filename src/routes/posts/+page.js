import axios from 'axios';
export async function load({ url }) {
	try {
		const response = await axios.get('http://127.0.0.1:5173/api/posts?param1=10');
		const { data } = response;
		const posts = data
			.map((element) => {
				return {
					...element,
					processedAt: new Date().toLocaleString()
				};
			})
			.slice(0, 10);

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
