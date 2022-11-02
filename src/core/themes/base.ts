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
  media: {
    small: '(min-width: 576px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 992px)',
    extraLarge: '(min-width: 1200px)'
  },
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
  shadows: {
    1: '0 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
  },
  zIndices: {
    ...zIndexTokens()
  }
};
