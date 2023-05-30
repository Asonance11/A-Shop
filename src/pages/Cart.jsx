import { React, useEffect, useState } from 'react';
import CartItem from '../components/CartItem';

const Cart = ({ cart, setCart }) => {
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		setTotalPrice(cart.reduce(getTotal, 0));
		function getTotal(total, item) {
			return total + item.price * item.quantity;
		}
	}, [cart]);

	const items = cart.map((item, index) => (
		<CartItem item={item} cart={cart} setCart={setCart} key={index + 100} />
	));

	return (
		<main className="pt-24 bg-darkGrey px-8 min-h-screen">
			<h2 className="text-3xl text-white font-bold font-serif italic text-center">
				Your Cart
			</h2>

			<section className="flex flex-col gap-4 mt-4">{items}</section>

			<section className="flex items-center justify-between mt-2 text-white">
				<p>Total Price:</p>
				<h3>${totalPrice}</h3>
			</section>

			<button
				className="mt-4 py-2 px-4 bg-gradient-to-r from-forestGreen via-adventurousYellow to-oceanTurquoise rounded-md text-darkGrey transition-all duration-500 ease-in-out   hover:from-foggyBlue hover:to-forestGreen"
				onClick={() => {
					alert('Thank you for shoopping with us');
					setCart([]);
				}}
			>
				Checkout
			</button>
		</main>
	);
};

export default Cart;
