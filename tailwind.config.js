/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			forestGreen: '#a9f6ad',
			foggyBlue: '#a9dbf6',
			oceanTurquoise: '#a9f6e8',
			adventurousYellow: '#ecf6a9',
			darkGrey: '#232323',
		},
		extend: {
			fontFamily: {
				sans: ['Lato', 'sans-serif'],
				serif: ['Cormorant Garamond', 'serif'],
			},
		},
	},
	plugins: [],
};
