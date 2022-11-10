import {
  blueDark,
  brownDark,
  grassDark,
  grayDark,
  slateDark,
  tomatoDark,
  whiteA
} from '@radix-ui/colors';
import { generateColors } from '@utils/generateColors';
import { GenericScale, specificScaleToGenericScale } from '@utils/genericScale';
import { base } from '../base';

const primary: GenericScale = specificScaleToGenericScale(blueDark);
const secondary: GenericScale = specificScaleToGenericScale(brownDark);
const grayScale: GenericScale = specificScaleToGenericScale(grayDark);
const grayColoredColor: GenericScale = specificScaleToGenericScale(slateDark);
const white = grayScale[300];
const black = grayColoredColor[10];
const overlay: GenericScale = specificScaleToGenericScale(whiteA, 'overlay');
const danger: GenericScale = specificScaleToGenericScale(tomatoDark);
const success: GenericScale = specificScaleToGenericScale(grassDark);

export const blueDarkTheme = {
  ...base,
  colors: {
    ...generateColors({
      white,
      black,
      primary,
      grayColoredColor,
      grayScale,
      secondary,
      danger,
      success,
      overlay
    }),
    'switch-primary-background-color-thumb-normal': grayColoredColor[200],
    'switch-primary-background-color-thumb-hover': grayColoredColor[300],
    'switch-primary-background-color-thumb-disabled-normal': grayColoredColor[70],
    'switch-secondary-background-color-thumb-normal': grayColoredColor[200],
    'switch-secondary-background-color-thumb-hover': grayColoredColor[300],
    'switch-secondary-background-color-thumb-disabled-normal': grayColoredColor[70],
    'switch-danger-background-color-thumb-normal': grayColoredColor[200],
    'switch-danger-background-color-thumb-hover': grayColoredColor[300],
    'switch-danger-background-color-thumb-disabled-normal': grayColoredColor[70],
    'switch-box-shadow-color-thumb-normal':
      '0 2px 1px -1px #FFF3, 0 1px 1px #FFFFFF24, 0 1px 3px #FFFFFF1f',

    'switch-box-shadow-color-thumb-hover':
      '0 2px 12px 2px #FFF3, 0 1px 1px #FFFFFF24, 0 1px 3px #FFFFFF1f'
  }
};
