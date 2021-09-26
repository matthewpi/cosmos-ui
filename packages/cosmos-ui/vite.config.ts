import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/',

	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true,
	},

	plugins: [
		react({
			babel: {
				plugins: ['babel-plugin-macros'],
			},
		}),
	],

	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	},

	define: {
		'process.env': {},
	},
});
