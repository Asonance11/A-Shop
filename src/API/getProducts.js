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

export async function fetchOneProduct(id) {
	let response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
		headers: {
			Authorization: `${API.key}`,
		},
	});

	response = await response.json();

	const product = {
		id: response.id,
		photographer: response.photographer,
		photographerUrl: response.photographer_url,
		image: response.src.landscape,
		url: response.url,
		imageSize: `${response.width} x ${response.height}`,
		alt: response.alt,
		price: response.height,
		avgColor: response.avg_color,
	};

	return product;
}
