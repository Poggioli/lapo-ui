import { GenericScale, specificScaleToGenericScale } from '@utils/generic-scale';

const generateBackgroundColorTokens = (scale: any, grayScale: any, errorScale: any): any => {
  const genericScale: GenericScale = specificScaleToGenericScale(scale);
  const genericErrorScale: GenericScale = specificScaleToGenericScale(errorScale);
  const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);

  const backgroundColors: any = {
    'background-checkbox-primary-normal': '$transparent',
    'background-checkbox-primary-checked': genericScale[200],
    'background-checkbox-primary-disabled': genericGrayScale[80],
    'background-checkbox-primary-invalid': genericErrorScale[100]
  };

  return {
    ...backgroundColors
  };
};

const generateBorderColorTokens = (scale: any, grayScale: any, errorScale: any): any => {
  const genericScale: GenericScale = specificScaleToGenericScale(scale);
  const genericErrorScale: GenericScale = specificScaleToGenericScale(errorScale);
  const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);

  const borderColors: any = {
    'border-checkbox-primary-normal': genericGrayScale[100],
    'border-checkbox-primary-checked': genericScale[200],
    'border-checkbox-primary-disabled': genericGrayScale[80],
    'border-checkbox-primary-invalid': genericErrorScale[100]
  };

  return {
    ...borderColors
  };
};

const generateTextColorTokens = (grayScale: any, errorScale: any): any => {
  const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);
  const genericErrorScale: GenericScale = specificScaleToGenericScale(errorScale);

  const textColors: any = {
    'text-checkbox-primary-normal': genericGrayScale[300],
    'text-checkbox-primary-checked': genericGrayScale[300],
    'text-checkbox-primary-disabled': genericGrayScale[80],
    'text-checkbox-primary-invalid': genericErrorScale[200]
  };

  return {
    ...textColors
  };
};

export const checkboxTokens = (scale: any, grayScale: any, errorScale: any): any => ({
  ...generateBackgroundColorTokens(scale, grayScale, errorScale),
  ...generateBorderColorTokens(scale, grayScale, errorScale),
  ...generateTextColorTokens(grayScale, errorScale)
});
