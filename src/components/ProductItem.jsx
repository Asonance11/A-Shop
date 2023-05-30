import { React, useState } from 'react';

const ProductItem = ({ product, cart, setCart }) => {
	const [quantity, setQuantity] = useState(1);

	const addToCart = (item, quantity) => {
		item = { quantity: quantity, ...item };

		let updatedCart = cart
			.filter((cartItem) => cartItem.id !== item.id)
			.concat(item);

		setCart(updatedCart);
	};

	return (
		<div className="flex flex-col gap-8 mt-8 font-sans items-center md:grid md:grid-cols-2">
			<img src={product.image} alt={product.alt} className="w-full" />
			<ul className="text-white flex flex-col gap-4 w-full">
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
						onClick={() => {
							addToCart(product, quantity);
						}}
					>
						Add to Cart
					</button>
					<div className="flex items-center gap-2">
						<button
							type="button"
							className="py-1 px-2 rounded-md text-darkGrey bg-white"
							onClick={() => {
								setQuantity(quantity - 1);
							}}
							disabled={quantity <= 1 ? true : false}
						>
							-
						</button>
						<span>Quantity - {quantity}</span>
						<button
							type="button"
							className="py-1 px-2 rounded-md text-darkGrey bg-white"
							onClick={() => {
								setQuantity(quantity + 1);
							}}
						>
							+
						</button>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default ProductItem;
