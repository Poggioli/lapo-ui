import { blue } from '@radix-ui/colors';
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
  colors: {
    'background-ripple': blue.blue9
  },
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
  spaces: {
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
