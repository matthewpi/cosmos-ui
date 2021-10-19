import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { minifyHtml } from 'vite-plugin-html';

export default defineConfig({
	base: '/',

	build: {
		assetsDir: 'assets',
		assetsInlineLimit: 0,
		outDir: 'dist',
		emptyOutDir: true,
		sourcemap: process.env['NODE_ENV'] !== 'production',
	},

	plugins: [
		react({
			babel: {
				plugins: ['babel-plugin-macros'],
			},
		}),
		minifyHtml(),
	],

	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	},
});
