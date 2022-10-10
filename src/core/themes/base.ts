import { blue, gray, slate } from '@radix-ui/colors';
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

const primaryColor = blue;
const grayColor = gray;
const grayColoredColor = slate;

export const base = {
  colors: {
    'background-ripple': primaryColor.blue9,

    'text-primary-color-low-contrast': primaryColor.blue11,
    'text-primary-color-high-contrast': primaryColor.blue12,
    'text-gray-color-low-contrast': grayColor.gray11,
    'text-gray-color-high-contrast': grayColor.gray12,
    'text-gray-colored-color-low-contrast': grayColoredColor.slate11,
    'text-gray-colored-color-high-contrast': grayColoredColor.slate12
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
