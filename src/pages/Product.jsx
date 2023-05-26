import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../API/getProducts';

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
			<div className="grid grid-cols-2 gap-8 mt-8 font-sans items-center">
				<img src={product.image} alt={product.alt} className="w-full" />
				<ul className="text-white flex flex-col gap-4 ">
					<li className="flex items-center justify-between">
						<p>Photographer:</p>
						<a href={product.photographerUrl} className="hover:underline">
							{product.photographer}
						</a>
					</li>
					<li className="flex items-center justify-between">
						<p>Price:</p>
						<p>{`$${product.price}`}</p>
					</li>
					<li className="flex items-center justify-between">
						<p>Image size</p>
						<p>{product.imageSize}</p>
					</li>
					<li className="flex items-center justify-between">
						<button
							type="button"
							className="py-2 px-4 bg-gradient-to-r from-forestGreen via-adventurousYellow to-oceanTurquoise rounded-md text-darkGrey transition-all duration-500 ease-in-out   hover:from-foggyBlue hover:to-forestGreen"
						>
							Add to Cart
						</button>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Product;
