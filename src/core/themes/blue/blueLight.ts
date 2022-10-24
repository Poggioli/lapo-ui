import { blue, brown, grass, gray, slate, tomato } from '@radix-ui/colors';
import { generateColors } from '@utils/generateColors';
import { GenericScale, specificScaleToGenericScale } from '@utils/genericScale';
import { base } from '../base';

const primary: GenericScale = specificScaleToGenericScale(blue);
const secondary: GenericScale = specificScaleToGenericScale(brown);
const grayScale: GenericScale = specificScaleToGenericScale(gray);
const grayColoredColor: GenericScale = specificScaleToGenericScale(slate);
const white = grayScale[10];
const black = grayColoredColor[300];
const danger: GenericScale = specificScaleToGenericScale(tomato);
const success: GenericScale = specificScaleToGenericScale(grass);

export const blueLightTheme = {
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
