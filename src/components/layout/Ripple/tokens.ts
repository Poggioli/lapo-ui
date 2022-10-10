import { GenericScale, specificScaleToGenericScale } from '@utils/generic-scale';

const generateBackgroundColorsTokens = (scale: any): any => {
  const genericScale: GenericScale = specificScaleToGenericScale(scale);

  const backgroundColors: any = {
    'background-ripple': genericScale[90]
  };

  return {
    ...backgroundColors
  };
};

export const rippleTokens = (scale: any): any => ({
  ...generateBackgroundColorsTokens(scale)
});
