import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../API/getProducts';
import ProductItem from '../components/ProductItem';

const Product = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	useEffect(() => {
		fetchOneProduct(id).then((data) => {
			setProduct(data);
		});
	}, []);

	return (
		<section className="pt-24 bg-darkGrey px-8 min-h-screen">
			<h2 className="text-3xl text-white font-bold font-serif italic text-center">
				Product
			</h2>
			<ProductItem product={product} />
		</section>
	);
};

export default Product;
