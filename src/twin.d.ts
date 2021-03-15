import { DOMAttributes } from 'react';
import styledImport, { CSSProp, css as cssImport } from 'styled-components';
import 'twin.macro';

declare module 'react' {
	interface HTMLAttributes<T> extends DOMAttributes<T> {
		css?: CSSProp
	}

	interface SVGProps<T> extends SVGProps<SVGSVGElement> {
		css?: CSSProp
	}
}

declare module 'twin.macro' {
	const styled: typeof styledImport
	const css: typeof cssImport
}

declare global {
	namespace JSX {
		// @ts-ignore
		interface IntrinsicAttributes<T> extends DOMAttributes<T> {
			as?: string | Element
		}
	}
}
