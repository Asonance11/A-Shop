import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';

const App = () => {
	return (
		<div className="">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/shop/:id" element={<Product />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
