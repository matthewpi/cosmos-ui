import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
	base: '/',

	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true,
	},

	plugins: [
		reactRefresh(),
	],

	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	},

	define: {
		'process.platform': JSON.stringify('win32'),
		'process.env': {},
	},
});
