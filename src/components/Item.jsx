import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
	const product = props.product;
	return (
		<section className="w-full flex flex-col gap-2">
			<img src={product.image} alt={product.alt} className="w-full" />
			<hr />
			<ul className="text-white flex flex-col gap-4">
				<li className="flex items-center justify-between">
					<p>Photographer</p>
					<p>{product.photographer}</p>
				</li>
				<li className="flex items-center justify-between">
					<p>Price</p>
					<p>{`$${product.price}`}</p>
				</li>
				<li className="flex items-center justify-between">
					<button
						type="button"
						className="py-2 px-4 bg-gradient-to-r from-forestGreen via-adventurousYellow to-oceanTurquoise rounded-md text-darkGrey"
					>
						<Link to={`/shop/${product.id}`}>More Information</Link>
					</button>
				</li>
			</ul>
		</section>
	);
};

export default Item;
