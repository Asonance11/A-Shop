import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import App from '../App';

describe('App component', () => {
	it('renders app', () => {
		render(<App />);
		const headline = screen.getByText(/App/i);
		expect(headline).toBeInTheDocument();
	});
});
