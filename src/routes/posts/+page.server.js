import { fail } from '@sveltejs/kit';
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

export const actions = {
	addPost: async ({ request }) => {
		try {
			const formData = await request.formData();
			const data = Object.fromEntries(formData);
			let error = {};

			if (Object.keys(data).length === 0) {
				error.empty = true;
				return fail(400, {
					data,
					...error
				});
			}
			if (data.body.length < 10) {
				error.smallBody = true;
				return fail(400, {
					data,
					...error
				});
			}
			const response = await axios.post('http://127.0.0.1:5173/api/posts', data);
			if (response.data.status) return response.data;
		} catch (error) {
			console.log('ERROR:::', error);
			return {
				errorMessage: error
			};
		}
	}
};
