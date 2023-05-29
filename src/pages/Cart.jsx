import React from 'react';
import CartItem from '../components/CartItem';

const Cart = ({ cart, setCart }) => {
	const items = cart.map((item, index) => (
		<CartItem item={item} cart={cart} setCart={setCart} key={index + 100} />
	));

	return (
		<main className="pt-24 bg-darkGrey px-8 min-h-screen">
			<h2 className="text-3xl text-white font-bold font-serif italic text-center">
				Your Cart
			</h2>

			<section>{items}</section>
		</main>
	);
};

export default Cart;
