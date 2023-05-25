import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import Home from '../pages/Home';

describe('Home component', () => {
	it('renders properly', () => {
		const { container } = render(<Home />, { wrapper: MemoryRouter });
		expect(container).toMatchSnapshot();
	});
});
