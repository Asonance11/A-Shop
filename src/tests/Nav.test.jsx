import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import Nav from '../components/Nav';

describe('Nav component', () => {
	it('renders Nav correctly', () => {
		const { container } = render(<Nav />, { wrapper: MemoryRouter });
		expect(container).toMatchSnapshot();
	});
});
