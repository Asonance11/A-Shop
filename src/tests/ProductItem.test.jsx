import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, vi } from 'vitest';
import ProductItem from '../components/ProductItem';

describe('Product component', () => {
	it('renders properly when API call completes', async () => {
		const anItem = {
			image: 'www.awebsite.com/something.jpeg',
			alt: 'An image',
			photographer: 'me',
			price: 10000,
			imageSize: '3000 x 3000',
		};

		const { container } = render(<ProductItem product={anItem} />, {
			wrapper: MemoryRouter,
		});
		expect(container).toMatchSnapshot();
	});

	it('calls setCart when add to cart button is clicked', async () => {
		const setCart = vi.fn();
		const anItem = {
			image: 'www.awebsite.com/something.jpeg',
			alt: 'An image',
			photographer: 'me',
			price: 10000,
			imageSize: '3000 x 3000',
		};
		const user = userEvent.setup();

		render(<ProductItem product={anItem} cart={[]} setCart={setCart} />);

		const addToCartButton = screen.getByRole('button', { name: 'Add to Cart' });

		await user.click(addToCartButton);
		expect(setCart).toHaveBeenCalled();
		expect(setCart).toHaveBeenCalledWith([{ quantity: 1, ...anItem }]);
	});

	it('calls setCart with the correct quantity is clicked', async () => {
		const setCart = vi.fn();
		const anItem = {
			image: 'www.awebsite.com/something.jpeg',
			alt: 'An image',
			photographer: 'me',
			price: 10000,
			imageSize: '3000 x 3000',
		};
		const user = userEvent.setup();

		render(<ProductItem product={anItem} cart={[]} setCart={setCart} />);

		const addToCartButton = screen.getByRole('button', { name: 'Add to Cart' });
		const incrementButton = screen.getByRole('button', { name: '+' });

		await user.click(incrementButton);
		await user.click(incrementButton);
		await user.click(incrementButton);
		await user.click(addToCartButton);
		expect(setCart).toHaveBeenCalled();
		expect(setCart).toHaveBeenCalledWith([{ quantity: 4, ...anItem }]);
	});
});
