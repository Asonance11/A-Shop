import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
	return (
		<section>
			<img src={product.image} alt={project.alt} />
			<hr />
			<ul>
				<li>
					<p>Photographer</p>
					<p>{product.photographer}</p>
				</li>
				<li>
					<p>Price</p>
					<p>{`$${product.price}`}</p>
				</li>
				<li>
					<button type="button">
						<Link to={`/shop/${product.id}`}>More Information</Link>
					</button>
				</li>
			</ul>
		</section>
	);
};

export default Item;
