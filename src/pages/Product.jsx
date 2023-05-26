import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../API/getProducts';

const Product = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	useEffect(() => {
		fetchOneProduct(id).then((data) => {
			setProduct(data);
			console.log(data);
		});
	}, []);

	return (
		<section className="pt-24">
			<h2>Product</h2>
		</section>
	);
};

export default Product;
