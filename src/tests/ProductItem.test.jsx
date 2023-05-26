import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
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
});
