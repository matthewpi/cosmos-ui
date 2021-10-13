/* eslint-disable */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',

			// Primary
			rose: colors.rose,

			// Neutral
			grey: {
				// Background
				1: 'hsl(250, 24%, 9%)',
				2: 'hsl(250, 21%, 11%)',

				// Regular
				100: 'hsl(246, 6%, 95%)',
				200: 'hsl(246, 6%, 87%)',
				300: 'hsl(246, 6%, 78%)',
				400: 'hsl(246, 6%, 65%)',
				500: 'hsl(246, 6%, 55%)',
				600: 'hsl(246, 7%, 45%)',
				700: 'hsl(246, 8%, 35%)',
				800: 'hsl(246, 11%, 22%)',
				900: 'hsl(246, 18%, 15%)',
			},

			blue: {
				100: 'hsl(220, 55%, 13%)',
				200: 'hsl(220, 62%, 25%)',
				300: 'hsl(220, 68%, 35%)',
				400: 'hsl(220, 72%, 45%)',
				500: 'hsl(220, 80%, 55%)',
				600: 'hsl(220, 80%, 65%)',
				700: 'hsl(220, 80%, 75%)',
				800: 'hsl(220, 80%, 85%)',
				900: 'hsl(220, 80%, 95%)',
			},

			green: {
				100: 'hsl(152, 26%, 11%)',
				200: 'hsl(152, 32%, 16%)',
				300: 'hsl(152, 38%, 24%)',
				400: 'hsl(152, 38%, 34%)',
				500: 'hsl(152, 38%, 42%)',
				600: 'hsl(152, 38%, 60%)',
				700: 'hsl(152, 38%, 70%)',
				800: 'hsl(152, 38%, 80%)',
				900: 'hsl(152, 38%, 91%)',
			},

			red: {
				100: 'hsl(1, 45%, 12%)',
				200: 'hsl(1, 55%, 20%)',
				300: 'hsl(1, 62%, 28%)',
				400: 'hsl(1, 62%, 35%)',
				500: 'hsl(1, 62%, 44%)',
				600: 'hsl(1, 62%, 60%)',
				700: 'hsl(1, 62%, 76%)',
				800: 'hsl(1, 64%, 85%)',
				900: 'hsl(1, 68%, 95%)',
			},

			yellow: {
				100: 'hsl(44, 95%, 12%)',
				200: 'hsl(44, 96%, 24%)',
				300: 'hsl(44, 95%, 36%)',
				400: 'hsl(44, 95%, 48%)',
				500: 'hsl(44, 95%, 60%)',
				600: 'hsl(44, 95%, 69%)',
				700: 'hsl(44, 95%, 78%)',
				800: 'hsl(44, 95%, 86%)',
				900: 'hsl(44, 95%, 95%)',
			},
		},

		extend: {
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

	purge: false,
};
