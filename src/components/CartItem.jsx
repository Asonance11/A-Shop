import React from 'react';

const CartItem = ({ item, cart, setCart }) => {
	return (
		<section className="flex items-center gap-4 border text-white font-sans">
			<div>
				<img
					src={item.image}
					alt={item.alt}
					className=" h-[22vh] object-cover"
				/>
			</div>
			<div className="w-full">
				<p className="capitalize">{item.photographer}</p>
				<p>${item.price}</p>
				<p>Quantity: {item.quantity}</p>
				<button
					type="button"
					className="py-2 px-4 bg-white text-darkGrey rounded-md mt-2"
					onClick={() => {
						setCart(cart.filter((product) => product.id !== item.id));
					}}
				>
					Remove from Cart
				</button>
			</div>
		</section>
	);
};

export default CartItem;
