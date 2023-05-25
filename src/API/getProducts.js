import API from '../../config';

export default async function fetchProducts() {
	let response = await fetch('https://api.pexels.com/v1/curated/?per_page=20', {
		headers: {
			Authorization: `${API.key}`,
		},
	});

	response = await response.json();

	const products = response.photos.map((product, index) => {
		return {
			num: index + 1,
			id: product.id,
			photographer: product.photographer,
			photographerUrl: product.photographer_url,
			image: product.src.landscape,
			url: product.url,
			imageSize: `${product.width} x ${product.height}`,
			alt: product.alt,
			price: product.height,
		};
	});
	return products;
}
