import { createCss, StitchesCss } from '@stitches/react';

const stitches = createCss({});

export type CSS = StitchesCss<typeof stitches>;
export type { StitchesVariants } from '@stitches/react';

export const { css, global, keyframes, styled, theme, getCssString } = stitches;
