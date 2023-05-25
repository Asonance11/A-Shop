import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<header
			className="flex justify-between items-center w-full py-4 px-8 bg-darkGrey fixed z-50
		"
		>
			<h1 className="font-serif italic font-semibold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-forestGreen via-adventurousYellow to-foggyBlue">
				<Link to="/">Painty</Link>
			</h1>

			<ul className="flex items-center gap-6 text-white font-sans">
				<li className="text-xl font-medium hover:underline">
					<Link to="/shop">Shop </Link>
				</li>
				<li className="text-xl font-medium hover:underline">
					<Link to="/cart">Cart </Link>
				</li>
			</ul>
		</header>
	);
};

export default Nav;
