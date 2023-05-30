import React from 'react';
import Item from '../components/Item';

const Shop = ({ products }) => {
	const items = products.map((item) => <Item product={item} key={item.num} />);

	return (
		<section className="pt-24 bg-darkGrey px-8">
			<h2 className="text-3xl text-white font-bold font-serif italic text-center">
				Products
			</h2>
			<div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-2 lg:grid-cols-3">
				{items}
			</div>
		</section>
	);
};

export default Shop;
