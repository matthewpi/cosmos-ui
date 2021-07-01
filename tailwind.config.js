const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	theme: {
		extend: {
			colors: {
				rose: colors.rose,
			},

			fontFamily: {
				sans: [
					'Inter var',
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},

	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],

	purge: [],
};
