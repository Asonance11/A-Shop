import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main className="pt-20 bg-darkGrey h-screen">
			<h1 className="absolute text-7xl font-serif italic top-[30%] left-[50%] translate-x-[-50%] z-10 text-white">
				Catching Moments
			</h1>
			<figure className="bg-[url(https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg)] h-[70vh] bg-center bg-cover bg-no-repeat relative">
				<figcaption>
					<a
						className="absolute left-2 bottom-4 p-2 underline text-blue-500 bg-white rounded"
						href="https://www.pexels.com/@eberhardgross/"
					>
						Photo by Eberhard Grossgasteiger
					</a>
				</figcaption>
			</figure>
			<div className="flex items-center justify-between mt-4 px-8">
				<p className="text-xl text-white font-normal">
					Shop for framed photos from all around the world.
				</p>
				<button
					type="button"
					className="py-2 px-4 bg-gradient-to-r from-forestGreen via-adventurousYellow to-oceanTurquoise rounded-md text-darkGrey"
				>
					<Link to="/shop">Shop Now</Link>
				</button>
			</div>
		</main>
	);
};

export default Home;
