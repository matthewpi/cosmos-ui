import preact from '@preact/preset-vite';
import path from 'path';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';

export default defineConfig({
	base: '/',

	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true,
	},

	plugins: [
		preact(),
		macrosPlugin(),
	],

	resolve: {
		alias: {
			'react': 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat',
			'react/jsx-runtime': 'preact/jsx-runtime',
			'~': path.resolve(__dirname, 'src'),
		},
	},

	define: {
		'process.env': {},
	},
});
