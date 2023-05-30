import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, vi } from 'vitest';
import Cart from '../pages/Cart';

describe('Cart component', () => {
	it('renders correctly', async () => {
		const setCart = vi.fn();

		const { container } = render(<Cart cart={[]} setCart={setCart} />, {
			wrapper: MemoryRouter,
		});

		expect(container).toMatchSnapshot();
	});

	it('calls setCart when "checkout"  is clicked', async () => {
		const setCart = vi.fn();
		const user = userEvent.setup();

		render(<Cart cart={[]} setCart={setCart} />, { wrapper: MemoryRouter });

		const checkoutBtn = screen.getByRole('button', { name: 'Checkout' });

		await user.click(checkoutBtn);

		expect(setCart).toHaveBeenCalled();
	});
});
