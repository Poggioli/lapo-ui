import { GenericScale } from '@utils/genericScale';

type GenerateColors = {
  white: string;
  black: string;
  primary: GenericScale;
  grayColoredColor: GenericScale;
  grayScale: GenericScale;
  secondary: GenericScale;
  danger: GenericScale;
  success: GenericScale;
  overlay: GenericScale;
};

export const generateColors = ({
  white,
  black,
  primary,
  grayColoredColor,
  grayScale,
  secondary,
  danger,
  success,
  overlay
}: GenerateColors): any => ({
  ...overlay,
  white: white,
  black: black,
  transparent: 'transparent',
  'background-ripple': primary[90],
  'background-app': primary[10],
  'background-subtle': primary[20],
  'background-subtle-hover': primary[30],
  'border-in-subtle': grayColoredColor[50],

  // Text component
  'text-primary-color-low-contrast': primary[200],
  'text-primary-color-high-contrast': primary[300],
  'text-primary-color-disabled': primary[80],
  'text-gray-color-low-contrast': grayScale[200],
  'text-gray-color-high-contrast': grayScale[300],
  'text-gray-color-disabled': grayScale[80],
  'text-gray-colored-color-low-contrast': grayColoredColor[200],
  'text-gray-colored-color-high-contrast': grayColoredColor[300],
  'text-gray-colored-disabled': grayColoredColor[80],

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
  'checkbox-primary-background-color-checked-disabled': grayColoredColor[80],

  'checkbox-primary-border-color-unchecked': grayColoredColor[200],
  'checkbox-primary-border-color-checked': primary[90],
  'checkbox-primary-border-color-hover': primary[200],
  'checkbox-primary-border-color-unchecked-disabled': grayColoredColor[80],
  'checkbox-primary-border-color-checked-disabled': grayColoredColor[80],

  'checkbox-primary-color-unchecked': grayColoredColor[200],
  'checkbox-primary-color-checked': grayColoredColor[300],
  'checkbox-primary-color-hover': grayColoredColor[300],
  'checkbox-primary-color-unchecked-disabled': grayColoredColor[80],
  'checkbox-primary-color-checked-disabled': grayColoredColor[80],

  'checkbox-primary-ripple-background-color': primary[60],

  // Checkbox Secondary
  'checkbox-secondary-background-color-unchecked': 'transparent',
  'checkbox-secondary-background-color-checked': secondary[90],
  'checkbox-secondary-background-color-unchecked-disabled': 'transparent',
  'checkbox-secondary-background-color-checked-disabled': grayColoredColor[80],

  'checkbox-secondary-border-color-unchecked': grayColoredColor[200],
  'checkbox-secondary-border-color-checked': secondary[90],
  'checkbox-secondary-border-color-hover': secondary[200],
  'checkbox-secondary-border-color-unchecked-disabled': grayColoredColor[80],
  'checkbox-secondary-border-color-checked-disabled': grayColoredColor[80],

  'checkbox-secondary-color-unchecked': grayColoredColor[200],
  'checkbox-secondary-color-checked': grayColoredColor[300],
  'checkbox-secondary-color-hover': grayColoredColor[300],
  'checkbox-secondary-color-unchecked-disabled': grayColoredColor[80],
  'checkbox-secondary-color-checked-disabled': grayColoredColor[80],

  'checkbox-secondary-ripple-background-color': secondary[60],

  // Checkbox Danger
  'checkbox-danger-background-color-unchecked': 'transparent',
  'checkbox-danger-background-color-checked': danger[90],
  'checkbox-danger-background-color-unchecked-disabled': 'transparent',
  'checkbox-danger-background-color-checked-disabled': grayColoredColor[80],

  'checkbox-danger-border-color-unchecked': danger[100],
  'checkbox-danger-border-color-checked': danger[90],
  'checkbox-danger-border-color-hover': danger[200],
  'checkbox-danger-border-color-unchecked-disabled': grayColoredColor[80],
  'checkbox-danger-border-color-checked-disabled': grayColoredColor[80],

  'checkbox-danger-color-unchecked': grayColoredColor[200],
  'checkbox-danger-color-checked': grayColoredColor[300],
  'checkbox-danger-color-hover': grayColoredColor[300],
  'checkbox-danger-color-unchecked-disabled': grayColoredColor[80],
  'checkbox-danger-color-checked-disabled': grayColoredColor[80],

  'checkbox-danger-ripple-background-color': danger[60],

  // Radiobutton Primary
  'radiobutton-primary-background-color-unchecked': 'transparent',
  'radiobutton-primary-background-color-checked': primary[90],
  'radiobutton-primary-background-color-unchecked-disabled': 'transparent',
  'radiobutton-primary-background-color-checked-disabled': grayColoredColor[80],

  'radiobutton-primary-border-color-unchecked': grayColoredColor[200],
  'radiobutton-primary-border-color-checked': primary[90],
  'radiobutton-primary-border-color-hover': primary[200],
  'radiobutton-primary-border-color-unchecked-disabled': grayColoredColor[80],
  'radiobutton-primary-border-color-checked-disabled': grayColoredColor[80],

  'radiobutton-primary-color-unchecked': grayColoredColor[200],
  'radiobutton-primary-color-checked': grayColoredColor[300],
  'radiobutton-primary-color-hover': grayColoredColor[300],
  'radiobutton-primary-color-unchecked-disabled': grayColoredColor[80],
  'radiobutton-primary-color-checked-disabled': grayColoredColor[80],

  'radiobutton-primary-ripple-background-color': primary[60],

  // Radiobutton Secondary
  'radiobutton-secondary-background-color-unchecked': 'transparent',
  'radiobutton-secondary-background-color-checked': secondary[90],
  'radiobutton-secondary-background-color-unchecked-disabled': 'transparent',
  'radiobutton-secondary-background-color-checked-disabled': grayColoredColor[80],

  'radiobutton-secondary-border-color-unchecked': grayColoredColor[200],
  'radiobutton-secondary-border-color-checked': secondary[90],
  'radiobutton-secondary-border-color-hover': secondary[200],
  'radiobutton-secondary-border-color-unchecked-disabled': grayColoredColor[80],
  'radiobutton-secondary-border-color-checked-disabled': grayColoredColor[80],

  'radiobutton-secondary-color-unchecked': grayColoredColor[200],
  'radiobutton-secondary-color-checked': grayColoredColor[200],
  'radiobutton-secondary-color-hover': grayColoredColor[300],
  'radiobutton-secondary-color-unchecked-disabled': grayColoredColor[80],
  'radiobutton-secondary-color-checked-disabled': grayColoredColor[80],

  'radiobutton-secondary-ripple-background-color': secondary[60],

  // Radiobutton Danger
  'radiobutton-danger-background-color-unchecked': 'transparent',
  'radiobutton-danger-background-color-checked': danger[90],
  'radiobutton-danger-background-color-unchecked-disabled': 'transparent',
  'radiobutton-danger-background-color-checked-disabled': grayColoredColor[80],

  'radiobutton-danger-border-color-unchecked': danger[100],
  'radiobutton-danger-border-color-checked': danger[90],
  'radiobutton-danger-border-color-hover': danger[200],
  'radiobutton-danger-border-color-unchecked-disabled': grayColoredColor[80],
  'radiobutton-danger-border-color-checked-disabled': grayColoredColor[80],

  'radiobutton-danger-color-unchecked': grayColoredColor[200],
  'radiobutton-danger-color-checked': grayColoredColor[300],
  'radiobutton-danger-color-hover': grayColoredColor[300],
  'radiobutton-danger-color-unchecked-disabled': grayColoredColor[80],
  'radiobutton-danger-color-checked-disabled': grayColoredColor[80],

  'radiobutton-danger-ripple-background-color': danger[60],

  // Dropdown
  'dropdown-primary-solid-value-normal': grayColoredColor[300],
  'dropdown-primary-solid-value-placeholder-normal': grayColoredColor[200],
  'dropdown-primary-solid-value-hover': grayColoredColor[300],
  'dropdown-primary-solid-value-focus': primary[200],
  'dropdown-primary-solid-value-active': primary[200],
  'dropdown-primary-solid-value-disabled': grayColoredColor[80],
  'dropdown-primary-solid-background-color-normal': primary[20],
  'dropdown-primary-solid-background-color-hover': primary[30],
  'dropdown-primary-solid-background-color-focus': primary[30],
  'dropdown-primary-solid-background-color-active': primary[30],
  'dropdown-primary-solid-background-color-disabled': grayColoredColor[30],
  'dropdown-primary-solid-border-color-normal': primary[300],
  'dropdown-primary-solid-border-color-hover': primary[200],
  'dropdown-primary-solid-border-color-focus': primary[200],
  'dropdown-primary-solid-border-color-active': primary[200],
  'dropdown-primary-solid-border-color-disabled': grayColoredColor[80],

  'dropdown-primary-ghost-value-normal': grayColoredColor[300],
  'dropdown-primary-ghost-value-placeholder-normal': grayColoredColor[200],
  'dropdown-primary-ghost-value-hover': grayColoredColor[300],
  'dropdown-primary-ghost-value-focus': primary[200],
  'dropdown-primary-ghost-value-active': primary[200],
  'dropdown-primary-ghost-value-disabled': grayColoredColor[80],
  'dropdown-primary-ghost-background-color-normal': 'transparent',
  'dropdown-primary-ghost-background-color-hover': 'transparent',
  'dropdown-primary-ghost-background-color-focus': 'transparent',
  'dropdown-primary-ghost-background-color-active': 'transparent',
  'dropdown-primary-ghost-background-color-disabled': 'transparent',
  'dropdown-primary-ghost-border-color-normal': primary[300],
  'dropdown-primary-ghost-border-color-hover': primary[200],
  'dropdown-primary-ghost-border-color-focus': primary[200],
  'dropdown-primary-ghost-border-color-active': primary[200],
  'dropdown-primary-ghost-border-color-disabled': grayColoredColor[80],

  'dropdown-primary-standard-value-normal': grayColoredColor[300],
  'dropdown-primary-standard-value-placeholder-normal': grayColoredColor[200],
  'dropdown-primary-standard-value-hover': grayColoredColor[300],
  'dropdown-primary-standard-value-focus': primary[200],
  'dropdown-primary-standard-value-active': primary[200],
  'dropdown-primary-standard-value-disabled': grayColoredColor[80],
  'dropdown-primary-standard-background-color-normal': 'transparent',
  'dropdown-primary-standard-background-color-hover': 'transparent',
  'dropdown-primary-standard-background-color-focus': 'transparent',
  'dropdown-primary-standard-background-color-active': 'transparent',
  'dropdown-primary-standard-background-color-disabled': 'transparent',
  'dropdown-primary-standard-border-color-normal': primary[300],
  'dropdown-primary-standard-border-color-hover': primary[200],
  'dropdown-primary-standard-border-color-focus': primary[200],
  'dropdown-primary-standard-border-color-active': primary[200],
  'dropdown-primary-standard-border-color-disabled': grayColoredColor[80],

  'dropdown-danger-solid-value-normal': grayColoredColor[300],
  'dropdown-danger-solid-value-placeholder-normal': grayColoredColor[200],
  'dropdown-danger-solid-value-hover': grayColoredColor[300],
  'dropdown-danger-solid-value-focus': danger[200],
  'dropdown-danger-solid-value-active': danger[200],
  'dropdown-danger-solid-value-disabled': grayColoredColor[80],
  'dropdown-danger-solid-background-color-normal': danger[20],
  'dropdown-danger-solid-background-color-hover': danger[30],
  'dropdown-danger-solid-background-color-focus': danger[30],
  'dropdown-danger-solid-background-color-active': danger[30],
  'dropdown-danger-solid-background-color-disabled': grayColoredColor[30],
  'dropdown-danger-solid-border-color-normal': danger[300],
  'dropdown-danger-solid-border-color-hover': danger[200],
  'dropdown-danger-solid-border-color-focus': danger[200],
  'dropdown-danger-solid-border-color-active': danger[200],
  'dropdown-danger-solid-border-color-disabled': grayColoredColor[80],

  'dropdown-danger-ghost-value-normal': grayColoredColor[300],
  'dropdown-danger-ghost-value-placeholder-normal': grayColoredColor[200],
  'dropdown-danger-ghost-value-hover': grayColoredColor[300],
  'dropdown-danger-ghost-value-focus': danger[200],
  'dropdown-danger-ghost-value-active': danger[200],
  'dropdown-danger-ghost-value-disabled': grayColoredColor[80],
  'dropdown-danger-ghost-background-color-normal': 'transparent',
  'dropdown-danger-ghost-background-color-hover': 'transparent',
  'dropdown-danger-ghost-background-color-focus': 'transparent',
  'dropdown-danger-ghost-background-color-active': 'transparent',
  'dropdown-danger-ghost-background-color-disabled': 'transparent',
  'dropdown-danger-ghost-border-color-normal': danger[100],
  'dropdown-danger-ghost-border-color-hover': danger[200],
  'dropdown-danger-ghost-border-color-focus': danger[200],
  'dropdown-danger-ghost-border-color-active': danger[200],
  'dropdown-danger-ghost-border-color-disabled': grayColoredColor[80],

  'dropdown-danger-standard-value-normal': grayColoredColor[300],
  'dropdown-danger-standard-value-placeholder-normal': grayColoredColor[200],
  'dropdown-danger-standard-value-hover': grayColoredColor[300],
  'dropdown-danger-standard-value-focus': danger[200],
  'dropdown-danger-standard-value-active': danger[200],
  'dropdown-danger-standard-value-disabled': grayColoredColor[80],
  'dropdown-danger-standard-background-color-normal': 'transparent',
  'dropdown-danger-standard-background-color-hover': 'transparent',
  'dropdown-danger-standard-background-color-focus': 'transparent',
  'dropdown-danger-standard-background-color-active': 'transparent',
  'dropdown-danger-standard-background-color-disabled': 'transparent',
  'dropdown-danger-standard-border-color-normal': danger[100],
  'dropdown-danger-standard-border-color-hover': danger[200],
  'dropdown-danger-standard-border-color-focus': danger[200],
  'dropdown-danger-standard-border-color-active': danger[200],
  'dropdown-danger-standard-border-color-disabled': grayColoredColor[80],

  'dropdown-background-color-content': primary[20],
  'dropdown-box-shadow-color-content': '$overlay-80',
  'dropdown-border-color-separator': grayColoredColor[50],

  'dropdown-item-background-hover': primary[30],
  'dropdown-item-background-checked': primary[40],
  'dropdown-item-text-color-disabled': grayColoredColor[80],
  'dropdown-scroll-butons-color': grayColoredColor[300],

  // Input
  'input-primary-standard-label-normal': grayColoredColor[200],
  'input-primary-standard-label-hover': grayColoredColor[300],
  'input-primary-standard-label-focus': primary[200],
  'input-primary-standard-label-active': primary[200],
  'input-primary-standard-label-disabled': grayColoredColor[80],
  'input-primary-standard-value-disabled': grayColoredColor[80],
  'input-primary-standard-value-normal': grayColoredColor[300],
  'input-primary-standard-background-color-normal': 'transparent',
  'input-primary-standard-background-color-hover': 'transparent',
  'input-primary-standard-background-color-focus': 'transparent',
  'input-primary-standard-background-color-active': 'transparent',
  'input-primary-standard-background-color-disabled': 'transparent',
  'input-primary-standard-border-color-normal': primary[300],
  'input-primary-standard-border-color-hover': primary[300],
  'input-primary-standard-border-color-focus': primary[200],
  'input-primary-standard-border-color-active': primary[200],
  'input-primary-standard-border-color-disabled': grayColoredColor[80],

  'input-primary-solid-label-normal': grayColoredColor[200],
  'input-primary-solid-label-hover': grayColoredColor[300],
  'input-primary-solid-label-focus': primary[200],
  'input-primary-solid-label-active': primary[200],
  'input-primary-solid-label-disabled': grayColoredColor[80],
  'input-primary-solid-value-disabled': grayColoredColor[80],
  'input-primary-solid-value-normal': grayColoredColor[300],
  'input-primary-solid-background-color-normal': primary[20],
  'input-primary-solid-background-color-hover': primary[30],
  'input-primary-solid-background-color-focus': primary[30],
  'input-primary-solid-background-color-active': primary[30],
  'input-primary-solid-background-color-disabled': grayColoredColor[30],
  'input-primary-solid-border-color-normal': primary[300],
  'input-primary-solid-border-color-hover': primary[300],
  'input-primary-solid-border-color-focus': primary[200],
  'input-primary-solid-border-color-active': primary[200],
  'input-primary-solid-border-color-disabled': grayColoredColor[80],

  'input-primary-ghost-label-normal': grayColoredColor[200],
  'input-primary-ghost-label-hover': grayColoredColor[300],
  'input-primary-ghost-label-focus': primary[200],
  'input-primary-ghost-label-active': primary[200],
  'input-primary-ghost-label-disabled': grayColoredColor[80],
  'input-primary-ghost-value-disabled': grayColoredColor[80],
  'input-primary-ghost-value-normal': grayColoredColor[300],
  'input-primary-ghost-background-color-normal': 'transparent',
  'input-primary-ghost-background-color-hover': 'transparent',
  'input-primary-ghost-background-color-focus': 'transparent',
  'input-primary-ghost-background-color-active': 'transparent',
  'input-primary-ghost-background-color-disabled': 'transparent',
  'input-primary-ghost-border-color-normal': primary[300],
  'input-primary-ghost-border-color-hover': primary[300],
  'input-primary-ghost-border-color-focus': primary[200],
  'input-primary-ghost-border-color-active': primary[200],
  'input-primary-ghost-border-color-disabled': grayColoredColor[80],

  'input-danger-standard-label-normal': grayColoredColor[200],
  'input-danger-standard-label-hover': grayColoredColor[300],
  'input-danger-standard-label-focus': danger[200],
  'input-danger-standard-label-active': danger[200],
  'input-danger-standard-label-disabled': grayColoredColor[80],
  'input-danger-standard-value-disabled': grayColoredColor[80],
  'input-danger-standard-value-normal': grayColoredColor[300],
  'input-danger-standard-background-color-normal': 'transparent',
  'input-danger-standard-background-color-hover': 'transparent',
  'input-danger-standard-background-color-focus': 'transparent',
  'input-danger-standard-background-color-active': 'transparent',
  'input-danger-standard-background-color-disabled': 'transparent',
  'input-danger-standard-border-color-normal': danger[100],
  'input-danger-standard-border-color-hover': danger[200],
  'input-danger-standard-border-color-focus': danger[200],
  'input-danger-standard-border-color-active': danger[200],
  'input-danger-standard-border-color-disabled': grayColoredColor[80],

  'input-danger-solid-label-normal': grayColoredColor[200],
  'input-danger-solid-label-hover': grayColoredColor[300],
  'input-danger-solid-label-focus': danger[200],
  'input-danger-solid-label-active': danger[200],
  'input-danger-solid-label-disabled': grayColoredColor[80],
  'input-danger-solid-value-disabled': grayColoredColor[80],
  'input-danger-solid-value-normal': grayColoredColor[300],
  'input-danger-solid-background-color-normal': danger[20],
  'input-danger-solid-background-color-hover': danger[30],
  'input-danger-solid-background-color-focus': danger[30],
  'input-danger-solid-background-color-active': danger[30],
  'input-danger-solid-background-color-disabled': grayColoredColor[30],
  'input-danger-solid-border-color-normal': danger[300],
  'input-danger-solid-border-color-hover': danger[200],
  'input-danger-solid-border-color-focus': danger[200],
  'input-danger-solid-border-color-active': danger[200],
  'input-danger-solid-border-color-disabled': grayColoredColor[80],

  'input-danger-ghost-label-normal': grayColoredColor[200],
  'input-danger-ghost-label-hover': grayColoredColor[300],
  'input-danger-ghost-label-focus': danger[200],
  'input-danger-ghost-label-active': danger[200],
  'input-danger-ghost-label-disabled': grayColoredColor[80],
  'input-danger-ghost-value-disabled': grayColoredColor[80],
  'input-danger-ghost-value-normal': grayColoredColor[300],
  'input-danger-ghost-background-color-normal': 'transparent',
  'input-danger-ghost-background-color-hover': 'transparent',
  'input-danger-ghost-background-color-focus': 'transparent',
  'input-danger-ghost-background-color-active': 'transparent',
  'input-danger-ghost-background-color-disabled': 'transparent',
  'input-danger-ghost-border-color-normal': danger[100],
  'input-danger-ghost-border-color-hover': danger[200],
  'input-danger-ghost-border-color-focus': danger[200],
  'input-danger-ghost-border-color-active': danger[200],
  'input-danger-ghost-border-color-disabled': grayColoredColor[80],

  // Slider
  'slider-background-color-track-normal': primary[60],
  'slider-background-color-track-disabled': grayColoredColor[50],
  'slider-background-color-range-normal': primary[90],
  'slider-background-color-range-disabled': grayColoredColor[80],
  'slider-background-color-thumb-normal': primary[100],
  'slider-background-color-thumb-hover': primary[200],
  'slider-background-color-thumb-focus': primary[200],
  'slider-background-color-thumb-active': primary[200],
  'slider-background-color-thumb-disabled': grayColoredColor[90],
  'slider-box-shadow-thumb-normal': grayColoredColor[90],
  'slider-box-shadow-thumb-hover': grayColoredColor[100],
  'slider-box-shadow-thumb-focus': grayColoredColor[200],
  'slider-box-shadow-thumb-active': grayColoredColor[200],
  'slider-color-max-and-min-value-normal': grayColoredColor[200],
  'slider-color-max-and-min-value-disabled': grayColoredColor[80],
  'slider-color-indicator-value-normal': grayColoredColor[200],

  // Switch
  'switch-primary-background-color-normal': grayColoredColor[70],
  'switch-primary-background-color-checked': primary[70],
  'switch-primary-background-color-disabled-normal': grayColoredColor[50],
  'switch-primary-background-color-disabled-checked': primary[30],

  'switch-primary-background-color-thumb-normal': grayColoredColor[20],
  'switch-primary-background-color-thumb-hover': grayColoredColor[30],
  'switch-primary-background-color-thumb-checked': primary[90],
  'switch-primary-background-color-thumb-disabled-normal': grayColoredColor[20],
  'switch-primary-background-color-thumb-disabled-checked': primary[50],

  'switch-primary-color-unchecked': grayColoredColor[200],
  'switch-primary-color-hover': grayColoredColor[300],
  'switch-primary-color-checked': grayColoredColor[300],
  'switch-primary-color-unchecked-disabled': grayColoredColor[80],
  'switch-primary-color-checked-disabled': grayColoredColor[80],

  'switch-secondary-background-color-normal': grayColoredColor[70],
  'switch-secondary-background-color-checked': secondary[70],
  'switch-secondary-background-color-disabled-normal': grayColoredColor[50],
  'switch-secondary-background-color-disabled-checked': secondary[30],

  'switch-secondary-background-color-thumb-normal': grayColoredColor[20],
  'switch-secondary-background-color-thumb-hover': grayColoredColor[30],
  'switch-secondary-background-color-thumb-checked': secondary[90],
  'switch-secondary-background-color-thumb-disabled-normal': grayColoredColor[20],
  'switch-secondary-background-color-thumb-disabled-checked': secondary[50],

  'switch-secondary-color-unchecked': grayColoredColor[200],
  'switch-secondary-color-hover': grayColoredColor[300],
  'switch-secondary-color-checked': grayColoredColor[300],
  'switch-secondary-color-unchecked-disabled': grayColoredColor[80],
  'switch-secondary-color-checked-disabled': grayColoredColor[80],

  'switch-danger-background-color-normal': grayColoredColor[70],
  'switch-danger-background-color-checked': danger[70],
  'switch-danger-background-color-disabled-normal': grayColoredColor[50],
  'switch-danger-background-color-disabled-checked': danger[30],

  'switch-danger-background-color-thumb-normal': grayColoredColor[20],
  'switch-danger-background-color-thumb-hover': grayColoredColor[30],
  'switch-danger-background-color-thumb-checked': danger[90],
  'switch-danger-background-color-thumb-disabled-normal': grayColoredColor[20],
  'switch-danger-background-color-thumb-disabled-checked': danger[50],

  'switch-danger-color-unchecked': danger[200],
  'switch-danger-color-hover': danger[200],
  'switch-danger-color-checked': danger[300],
  'switch-danger-color-unchecked-disabled': grayColoredColor[80],
  'switch-danger-color-checked-disabled': grayColoredColor[80],

  'switch-box-shadow-color-thumb-normal':
    '0 2px 1px -1px #0003, 0 1px 1px #00000024, 0 1px 3px #0000001f',
  'switch-box-shadow-color-thumb-hover':
    '0 2px 12px 2px #0003, 0 1px 1px #00000024, 0 1px 3px #0000001f',

  // Card
  'card-border-color-normal': grayColoredColor[70],
  'card-border-color-hover': grayColoredColor[80],
  'card-background-color-normal': primary[20],
  'card-background-color-hover': primary[30],

  // Separator
  'separator-background-color': grayColoredColor[70],

  // Modal
  'modal-background-color-content': primary[20],
  'modal-background-color-overlay': '$overlay-200',
  'modal-color-close-icon-normal': grayColoredColor[100],
  'modal-color-close-icon-hover': grayColoredColor[300],
  'modal-color-close-icon-focus': grayColoredColor[300],

  // Accordion
  'accordion-item-trigger-background-color-normal': primary[10],
  'accordion-item-trigger-background-color-hover': primary[20],
  'accordion-item-content-background-color': primary[10],
  'accordion-box-shadow-color': '$overlay-70',
  'accordion-border-color-separator': grayColoredColor[50],
  'accordion-border-color': grayColoredColor[50],

  // Toast
  'toast-background-color': '$background-subtle'
});
