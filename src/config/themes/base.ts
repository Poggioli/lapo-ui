import {
  borderRadiusTokens,
  borderWidthTokens,
  fontFamilyTokens,
  fontSizeTokens,
  fontWeightTokens,
  letterSpaceTokens,
  lineHeightTokens,
  sizeTokens,
  spaceTokens,
  zIndexTokens
} from '@tokens';

export const base = {
  borderWidths: {
    ...borderWidthTokens()
  },
  radii: {
    ...borderRadiusTokens()
  },
  fonts: {
    ...fontFamilyTokens()
  },
  sizes: {
    ...sizeTokens()
  },
  space: {
    ...spaceTokens()
  },
  fontSizes: {
    ...fontSizeTokens()
  },
  letterSpacings: {
    ...letterSpaceTokens()
  },
  lineHeights: {
    ...lineHeightTokens()
  },
  fontWeights: {
    ...fontWeightTokens()
  },
  zIndices: {
    ...zIndexTokens()
  }
};
