import { React, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import fetchProducts from './API/getProducts';
import Nav from './components/Nav';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';

const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetchProducts().then((data) => {
			setProducts(data);
		});
	}, []);

	return (
		<div className="">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop products={products} />} />
					<Route
						path="/cart"
						element={<Cart cart={cart} setCart={setCart} />}
					/>
					<Route
						path="/shop/:id"
						element={<Product cart={cart} setCart={setCart} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
