import React from 'react';

const CartItem = ({ item, cart, setCart }) => {
	return (
		<section>
			<img src={item.image} alt={item.alt} />
			<p>{item.photographer}</p>
			<p>{item.price}</p>
			<p>{item.quantity}</p>
			<button type="button">Remove from Cart</button>
		</section>
	);
};

export default CartItem;
