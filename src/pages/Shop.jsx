import React from 'react';
import Item from '../components/Item';

const Shop = ({ products }) => {
	return (
		<main>
			<h2>Products</h2>

			<div>
				{products.map((item) => {
					<Item product={item} key={item.num} />;
				})}
			</div>
		</main>
	);
};

export default Shop;
