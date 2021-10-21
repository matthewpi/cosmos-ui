import { css as cssImport, CSSProperties } from '@stitches/react';
import type * as StyledComponent from '@stitches/react/types/styled-component';
import type * as Util from '@stitches/react/types/util';

import { config, CSS } from '../stitches.config';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DefaultTheme {}

// eslint-disable-next-line @typescript-eslint/ban-types
type AnyIfEmpty<T extends object> = keyof T extends never ? any : T;

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/consistent-indexed-object-style
interface CSSObject extends CSSProperties {
	[key: string]: CSSObject | string | number | undefined;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
type CSSProp<T = AnyIfEmpty<DefaultTheme>> = CSSObject | string;

type Stitches<Type = string> = <
	Composers extends Array<
		// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
		string | React.ExoticComponent<any> | React.JSXElementConstructor<any> | Util.Function | { [name: string]: unknown }
	>,
>(
	...composers: {
		[K in keyof Composers]: Composers[K] extends
			| string
			| React.ExoticComponent<any>
			| React.JSXElementConstructor<any>
			| Util.Function
			? Composers[K]
			: CSS & {
					variants?: {
						[Name in string]: {
							[Pair in number | string]: CSS;
						};
					};
					compoundVariants?: Array<
						('variants' extends keyof Composers[K]
							? {
									[Name in keyof Composers[K]['variants']]?:
										| Util.Widen<keyof Composers[K]['variants'][Name]>
										| Util.String;
							  } & Util.WideObject
							: Util.WideObject) & {
							css: CSS;
						}
					>;
					defaultVariants?: 'variants' extends keyof Composers[K]
						? {
								[Name in keyof Composers[K]['variants']]?:
									| Util.Widen<keyof Composers[K]['variants'][Name]>
									| Util.String;
						  }
						: Util.WideObject;
			  } & {
					[K2 in keyof Composers[K]]: K2 extends 'compoundVariants' | 'defaultVariants' | 'variants'
						? unknown
						: K2 extends keyof CSS
						? CSS[K2]
						: unknown;
			  };
	}
) => StyledComponent.StyledComponent<Type, StyledComponent.StyledComponentProps<Composers>, typeof config.media, CSS>;

type StyledTags = {
	[Element in keyof JSX.IntrinsicElements]: Stitches<Element>;
};

declare module 'react' {
	interface Attributes {
		css?: CSSProp;
		tw?: string;
	}
}

declare module 'twin.macro' {
	const css: typeof cssImport;
	const styled: StyledTags;
}
