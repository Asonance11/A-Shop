import API from '../../config';

export default async function fetchProducts() {
	let response = await fetch('https://api.pexels.com/v1/curated', {
		headers: {
			Authorization: `${API.key}`,
		},
	});

	response = await response.json();
	console.log(response);
}
