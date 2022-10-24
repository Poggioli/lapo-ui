import { blueDark, brownDark, grassDark, grayDark, slateDark, tomatoDark } from '@radix-ui/colors';
import { generateColors } from '@utils/generateColors';
import { GenericScale, specificScaleToGenericScale } from '@utils/genericScale';
import { base } from '../base';

const primary: GenericScale = specificScaleToGenericScale(blueDark);
const secondary: GenericScale = specificScaleToGenericScale(brownDark);
const grayScale: GenericScale = specificScaleToGenericScale(grayDark);
const grayColoredColor: GenericScale = specificScaleToGenericScale(slateDark);
const white = grayScale[300];
const black = grayColoredColor[10];
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
      success
    })
  }
};
