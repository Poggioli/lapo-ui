import { createStitches, styled } from '@stitches/react';
import type * as Stitches from '@stitches/react';
export { VariantProps } from '@stitches/react';
import { indigo, slate, tomato } from '@radix-ui/colors';
import { buttonTokens } from '@components/Button';
import { inputTokens } from '@components/Input';
import { checkboxTokens } from '@components/Checkbox';
import { radioTokens } from '@components/Radio';
import WebFont from 'webfontloader';

import {
  borderWidthTokens,
  spaceTokens,
  fontSizeTokens,
  fontFamilyTokens,
  fontWeightTokens,
  lineHeightTokens,
  letterSpaceTokens,
  sizeTokens,
  borderRadiusTokens,
  zIndexTokens
} from '@tokens';

WebFont.load({
  google: { families: ['Roboto: 300, 400, 500, 700', 'Nunito: 300, 400, 500, 600, 700'] }
});

const lapo = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      transparent: 'transparent',
      ...buttonTokens(indigo, slate),
      ...inputTokens(indigo, slate, tomato),
      ...checkboxTokens(indigo, slate, tomato),
      ...radioTokens(indigo, slate, tomato)
    },
    space: {
      ...spaceTokens()
    },
    fontSizes: {
      ...fontSizeTokens()
    },
    fonts: {
      ...fontFamilyTokens()
    },
    fontWeights: {
      ...fontWeightTokens()
    },
    lineHeights: {
      ...lineHeightTokens()
    },
    letterSpacings: {
      ...letterSpaceTokens()
    },
    sizes: {
      ...sizeTokens()
    },
    borderWidths: {
      ...borderWidthTokens()
    },
    radii: {
      ...borderRadiusTokens()
    },
    zIndices: {
      ...zIndexTokens()
    }
  }
});

const { css, globalCss, keyframes, createTheme, getCssText, theme, config } = lapo;

export { styled, css, globalCss, keyframes, createTheme, getCssText, theme, config };

export type CSS = Stitches.CSS<typeof config>;
