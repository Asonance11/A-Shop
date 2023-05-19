import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		setupFiles: './src/tests/setup.js',
		environment: 'jsdom',
		globals: true,
	},
});
