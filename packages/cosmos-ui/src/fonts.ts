import { AtRule } from '@stitches/react/types/css';

type FontFace = AtRule.FontFace;
type FontFormat = 'woff' | 'woff2';
type FontStyle = AtRule.FontStyle;
type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

const weightsToName: Record<FontWeight, string> = {
	100: 'Thin',
	200: 'ExtraLight',
	300: 'Light',
	400: 'Regular',
	500: 'Medium',
	600: 'SemiBold',
	700: 'Bold',
	800: 'ExtraBold',
	900: 'Black',
};

function capitalize(src: string): string {
	return src.charAt(0).toUpperCase() + src.slice(1);
}

function generateFontFaces(
	family: string,
	weights: FontWeight[],
	styles: FontStyle[],
	formats: FontFormat[],
): FontFace[] {
	const familyCapitalized = capitalize(family);
	const fontFaces: FontFace[] = [];

	weights.forEach(weight => {
		styles.forEach(style => {
			const src: string[] = [];

			formats.forEach(format => {
				const file = `${familyCapitalized}-${weightsToName[weight]}${style === 'italic' ? 'Italic' : ''}`;
				src.push(`url("/fonts/${family}/${file}.${format}") format("${format}")`);
			});

			fontFaces.push({
				fontDisplay: 'swap',
				fontFamily: family,
				fontStyle: style,
				fontWeight: weight,
				src: src.join(' '),
			});
		});
	});

	return fontFaces;
}

export const Inter: FontFace[] = [
	...generateFontFaces(
		'Inter',
		[100, 200, 300, 400, 500, 600, 700, 800, 900],
		['normal', 'italic'],
		['woff2', 'woff'],
	),
	{
		fontDisplay: 'swap',
		fontFamily: 'Inter var',
		fontStyle: 'normal',
		fontWeight: '100 900',
		src: 'url("/fonts/inter/Inter-roman.var.woff2") format("woff2")',
	},
	{
		fontDisplay: 'swap',
		fontFamily: 'Inter var',
		fontStyle: 'italic',
		fontWeight: '100 900',
		src: 'url("/fonts/inter/Inter-italic.var.woff2") format("woff2")',
	},
];
