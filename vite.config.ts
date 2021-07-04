import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import macrosPlugin from 'vite-plugin-babel-macros';

export default defineConfig({
	base: '/',

	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true,
	},

	plugins: [
		reactRefresh(),
		macrosPlugin(),
	],

	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	},

	define: {
		'process.env': {},
	},

	esbuild: {
		jsxFactory: 'jsx',
		jsxInject: 'import { jsx } from \'@emotion/react\';',
	},
});
