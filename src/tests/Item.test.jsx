import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import Item from '../components/Item';

describe('Item component', () => {
	it('renders in the Shop Page', () => {
		const anItem = {
			image: 'www.awebsite.com/something.jpeg',
			alt: 'An image',
			photographer: 'me',
			price: 10000,
		};

		const { container } = render(<Item product={anItem} />, {
			wrapper: MemoryRouter,
		});
		expect(container).toMatchSnapshot();
	});
});
