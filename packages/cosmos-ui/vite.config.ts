import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
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
			'~': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
		},
	},
});
