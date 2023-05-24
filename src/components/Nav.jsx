import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<header>
			<h1>
				<Link to="/">Painty</Link>
			</h1>

			<ul>
				<li>
					<Link to="/shop">Shop </Link>
				</li>
				<li>
					<Link to="/cart">Cart </Link>
				</li>
			</ul>
		</header>
	);
};

export default Nav;
