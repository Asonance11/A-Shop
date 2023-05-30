import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, vi } from 'vitest';
import CartItem from '../components/CartItem';

describe('CartItem component', () => {
	it('renders correctly', async () => {
		const setCart = vi.fn();
		const anItem = {
			image: 'www.awebsite.com/something.jpeg',
			alt: 'An image',
			photographer: 'me',
			price: 10000,
			imageSize: '3000 x 3000',
		};

		const { container } = render(
			<CartItem item={anItem} cart={[]} setCart={setCart} />,
			{
				wrapper: MemoryRouter,
			}
		);
		expect(container).toMatchSnapshot();
	});

	it('calls setCart when "remove from cart button" is clicked', async () => {
		const setCart = vi.fn();
		const anItem = {
			image: 'www.awebsite.com/something.jpeg',
			alt: 'An image',
			photographer: 'me',
			price: 10000,
			imageSize: '3000 x 3000',
		};
		const user = userEvent.setup();

		render(<CartItem item={anItem} cart={[]} setCart={setCart} />);

		const removeButton = screen.getByRole('button', {
			name: 'Remove from Cart',
		});

		await user.click(removeButton);

		expect(setCart).toHaveBeenCalled();
	});
});
