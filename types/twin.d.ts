import styledImport, { css as cssImport } from '@stitches/react';

import 'twin.macro';

type CSSProp<T = AnyIfEmpty<DefaultTheme>> = CSSObject | string;

declare module 'react' {
	interface HTMLAttributes<T> extends DOMAttributes<T> {
		css?: CSSProp;
		tw?: string;
	}

	interface SVGProps<T> extends SVGProps<T> {
		css?: CSSProp;
		tw?: string;
	}
}

type StyledTags = {
	[Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<JSX.IntrinsicElements[Tag]>;
};

declare module 'twin.macro' {
	const css: typeof cssImport;
	const styled: typeof styledImport | typeof StyledTags;
}
