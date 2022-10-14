import { blue, brown, grass, gray, slate, tomato } from '@radix-ui/colors';
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
import { GenericScale, specificScaleToGenericScale } from '@utils/genericScale';

const primary: GenericScale = specificScaleToGenericScale(blue);
const secondary: GenericScale = specificScaleToGenericScale(brown);
const grayScale: GenericScale = specificScaleToGenericScale(gray);
const grayColoredColor: GenericScale = specificScaleToGenericScale(slate);
const white = grayColoredColor[10];
const black = grayColoredColor[200];
const danger: GenericScale = specificScaleToGenericScale(tomato);
const success: GenericScale = specificScaleToGenericScale(grass);

export const base = {
  colors: {
    white: white,
    black: black,
    'background-ripple': primary[90],

    // Text component
    'text-primary-color-low-contrast': primary[200],
    'text-primary-color-high-contrast': primary[300],
    'text-gray-color-low-contrast': grayScale[200],
    'text-gray-color-high-contrast': grayScale[300],
    'text-gray-colored-color-low-contrast': grayColoredColor[200],
    'text-gray-colored-color-high-contrast': grayColoredColor[300],

    // Button Primary
    'button-primary-solid-background-color-normal': primary[90],
    'button-primary-solid-background-color-hover': primary[100],
    'button-primary-solid-background-color-focus': primary[100],
    'button-primary-solid-background-color-active': primary[200],
    'button-primary-solid-background-color-disabled': grayScale[20],
    'button-primary-solid-color-normal': white,
    'button-primary-solid-color-disabled': grayScale[80],
    'button-primary-solid-border-color': 'none',

    'button-primary-ghost-background-color-normal': 'transparent',
    'button-primary-ghost-background-color-hover': primary[40],
    'button-primary-ghost-background-color-focus': primary[40],
    'button-primary-ghost-background-color-active': primary[50],
    'button-primary-ghost-background-color-disabled': 'transparent',
    'button-primary-ghost-color-normal': primary[90],
    'button-primary-ghost-color-hover': primary[100],
    'button-primary-ghost-color-focus': primary[100],
    'button-primary-ghost-color-active': primary[200],
    'button-primary-ghost-color-disabled': grayScale[80],
    'button-primary-ghost-border-color-normal': primary[70],
    'button-primary-ghost-border-color-hover': primary[80],
    'button-primary-ghost-border-color-focus': primary[80],
    'button-primary-ghost-border-color-active': primary[90],
    'button-primary-ghost-border-color-disabled': grayScale[50],

    'button-primary-text-background-color-normal': 'transparent',
    'button-primary-text-background-color-hover': primary[40],
    'button-primary-text-background-color-focus': primary[40],
    'button-primary-text-background-color-active': primary[50],
    'button-primary-text-background-color-disabled': 'transparent',
    'button-primary-text-color-normal': primary[90],
    'button-primary-text-color-hover': primary[100],
    'button-primary-text-color-focus': primary[100],
    'button-primary-text-color-active': primary[200],
    'button-primary-text-color-disabled': grayScale[80],
    'button-primary-text-border-color': 'none',

    'button-primary-ripple-background-color': primary[60],

    // Button Secondary
    'button-secondary-solid-background-color-normal': secondary[90],
    'button-secondary-solid-background-color-hover': secondary[100],
    'button-secondary-solid-background-color-focus': secondary[100],
    'button-secondary-solid-background-color-active': secondary[200],
    'button-secondary-solid-background-color-disabled': grayScale[20],
    'button-secondary-solid-color-normal': white,
    'button-secondary-solid-color-disabled': grayScale[80],
    'button-secondary-solid-border-color': 'none',

    'button-secondary-ghost-background-color-normal': 'transparent',
    'button-secondary-ghost-background-color-hover': secondary[40],
    'button-secondary-ghost-background-color-focus': secondary[40],
    'button-secondary-ghost-background-color-active': secondary[50],
    'button-secondary-ghost-background-color-disabled': 'transparent',
    'button-secondary-ghost-color-normal': secondary[90],
    'button-secondary-ghost-color-hover': secondary[100],
    'button-secondary-ghost-color-focus': secondary[100],
    'button-secondary-ghost-color-active': secondary[200],
    'button-secondary-ghost-color-disabled': grayScale[80],
    'button-secondary-ghost-border-color-normal': secondary[70],
    'button-secondary-ghost-border-color-hover': secondary[80],
    'button-secondary-ghost-border-color-focus': secondary[80],
    'button-secondary-ghost-border-color-active': secondary[90],
    'button-secondary-ghost-border-color-disabled': grayScale[50],

    'button-secondary-text-background-color-normal': 'transparent',
    'button-secondary-text-background-color-hover': secondary[40],
    'button-secondary-text-background-color-focus': secondary[40],
    'button-secondary-text-background-color-active': secondary[50],
    'button-secondary-text-background-color-disabled': 'transparent',
    'button-secondary-text-color-normal': secondary[90],
    'button-secondary-text-color-hover': secondary[100],
    'button-secondary-text-color-focus': secondary[100],
    'button-secondary-text-color-active': secondary[200],
    'button-secondary-text-color-disabled': grayScale[80],
    'button-secondary-text-border-color': 'none',

    'button-secondary-ripple-background-color': secondary[60],

    // Button Danger
    'button-danger-solid-background-color-normal': danger[90],
    'button-danger-solid-background-color-hover': danger[100],
    'button-danger-solid-background-color-focus': danger[100],
    'button-danger-solid-background-color-active': danger[200],
    'button-danger-solid-background-color-disabled': grayScale[20],
    'button-danger-solid-color-normal': white,
    'button-danger-solid-color-disabled': grayScale[80],
    'button-danger-solid-border-color': 'none',

    'button-danger-ghost-background-color-normal': 'transparent',
    'button-danger-ghost-background-color-hover': danger[40],
    'button-danger-ghost-background-color-focus': danger[40],
    'button-danger-ghost-background-color-active': danger[50],
    'button-danger-ghost-background-color-disabled': 'transparent',
    'button-danger-ghost-color-normal': danger[90],
    'button-danger-ghost-color-hover': danger[100],
    'button-danger-ghost-color-focus': danger[100],
    'button-danger-ghost-color-active': danger[200],
    'button-danger-ghost-color-disabled': grayScale[80],
    'button-danger-ghost-border-color-normal': danger[70],
    'button-danger-ghost-border-color-hover': danger[80],
    'button-danger-ghost-border-color-focus': danger[80],
    'button-danger-ghost-border-color-active': danger[90],
    'button-danger-ghost-border-color-disabled': grayScale[50],

    'button-danger-text-background-color-normal': 'transparent',
    'button-danger-text-background-color-hover': danger[40],
    'button-danger-text-background-color-focus': danger[40],
    'button-danger-text-background-color-active': danger[50],
    'button-danger-text-background-color-disabled': 'transparent',
    'button-danger-text-color-normal': danger[90],
    'button-danger-text-color-hover': danger[100],
    'button-danger-text-color-focus': danger[100],
    'button-danger-text-color-active': danger[200],
    'button-danger-text-color-disabled': grayScale[80],
    'button-danger-text-border-color': 'none',

    'button-danger-ripple-background-color': danger[60],

    // Button Success
    'button-success-solid-background-color-normal': success[90],
    'button-success-solid-background-color-hover': success[100],
    'button-success-solid-background-color-focus': success[100],
    'button-success-solid-background-color-active': success[200],
    'button-success-solid-background-color-disabled': grayScale[20],
    'button-success-solid-color-normal': white,
    'button-success-solid-color-disabled': grayScale[80],
    'button-success-solid-border-color': 'none',

    'button-success-ghost-background-color-normal': 'transparent',
    'button-success-ghost-background-color-hover': success[40],
    'button-success-ghost-background-color-focus': success[40],
    'button-success-ghost-background-color-active': success[50],
    'button-success-ghost-background-color-disabled': 'transparent',
    'button-success-ghost-color-normal': success[90],
    'button-success-ghost-color-hover': success[100],
    'button-success-ghost-color-focus': success[100],
    'button-success-ghost-color-active': success[200],
    'button-success-ghost-color-disabled': grayScale[80],
    'button-success-ghost-border-color-normal': success[70],
    'button-success-ghost-border-color-hover': success[80],
    'button-success-ghost-border-color-focus': success[80],
    'button-success-ghost-border-color-active': success[90],
    'button-success-ghost-border-color-disabled': grayScale[50],

    'button-success-text-background-color-normal': 'transparent',
    'button-success-text-background-color-hover': success[40],
    'button-success-text-background-color-focus': success[40],
    'button-success-text-background-color-active': success[50],
    'button-success-text-background-color-disabled': 'transparent',
    'button-success-text-color-normal': success[90],
    'button-success-text-color-hover': success[100],
    'button-success-text-color-focus': success[100],
    'button-success-text-color-active': success[200],
    'button-success-text-color-disabled': grayScale[80],
    'button-success-text-border-color': 'none',

    'button-success-ripple-background-color': success[60],

    // Checkbox Primary
    'checkbox-primary-background-color-unchecked': 'transparent',
    'checkbox-primary-background-color-checked': primary[90],
    'checkbox-primary-background-color-unchecked-disabled': 'transparent',
    'checkbox-primary-background-color-checked-disabled': grayScale[80],

    'checkbox-primary-border-color-unchecked': grayScale[200],
    'checkbox-primary-border-color-checked': primary[90],
    'checkbox-primary-border-color-unchecked-disabled': grayScale[80],
    'checkbox-primary-border-color-checked-disabled': grayScale[80],

    'checkbox-primary-color-unchecked': grayScale[300],
    'checkbox-primary-color-checked': grayScale[300],
    'checkbox-primary-color-unchecked-disabled': grayScale[80],
    'checkbox-primary-color-checked-disabled': grayScale[80],

    'checkbox-primary-ripple-background-color': primary[60],

    // Checkbox Secondary
    'checkbox-secondary-background-color-unchecked': 'transparent',
    'checkbox-secondary-background-color-checked': secondary[90],
    'checkbox-secondary-background-color-unchecked-disabled': 'transparent',
    'checkbox-secondary-background-color-checked-disabled': grayScale[80],

    'checkbox-secondary-border-color-unchecked': grayScale[200],
    'checkbox-secondary-border-color-checked': secondary[90],
    'checkbox-secondary-border-color-unchecked-disabled': grayScale[80],
    'checkbox-secondary-border-color-checked-disabled': grayScale[80],

    'checkbox-secondary-color-unchecked': grayScale[300],
    'checkbox-secondary-color-checked': grayScale[300],
    'checkbox-secondary-color-unchecked-disabled': grayScale[80],
    'checkbox-secondary-color-checked-disabled': grayScale[80],

    'checkbox-secondary-ripple-background-color': secondary[60],

    // Checkbox Danger
    'checkbox-danger-background-color-unchecked': 'transparent',
    'checkbox-danger-background-color-checked': danger[90],
    'checkbox-danger-background-color-unchecked-disabled': 'transparent',
    'checkbox-danger-background-color-checked-disabled': grayScale[80],

    'checkbox-danger-border-color-unchecked': grayScale[200],
    'checkbox-danger-border-color-checked': danger[90],
    'checkbox-danger-border-color-unchecked-disabled': grayScale[80],
    'checkbox-danger-border-color-checked-disabled': grayScale[80],

    'checkbox-danger-color-unchecked': grayScale[300],
    'checkbox-danger-color-checked': grayScale[300],
    'checkbox-danger-color-unchecked-disabled': grayScale[80],
    'checkbox-danger-color-checked-disabled': grayScale[80],

    'checkbox-danger-ripple-background-color': danger[60]
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
  zIndice: {
    ...zIndexTokens()
  }
};
