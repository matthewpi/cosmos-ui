import { createStitches, CSS as StitchesCSS } from '@stitches/react';

const stitches = createStitches({});

export const { css, globalCss, keyframes, styled, theme, getCssText } = stitches;
export type CSS = StitchesCSS<typeof stitches>;
