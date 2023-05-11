import axios from 'axios';
export async function load({ url, depends }) {
	try {
		const { searchParams } = url;
		let paramValue = searchParams.get('param1') || 10;
		const response = await axios.get(`http://127.0.0.1:5173/api/posts?param1=${paramValue}`);
		const { data } = response;
		const posts = data.map((element) => {
			return {
				...element,
				processedAt: new Date().toLocaleString()
			};
		});

		depends('posts');
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
