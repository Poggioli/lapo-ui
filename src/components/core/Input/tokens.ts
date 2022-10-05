import { GenericScale, specificScaleToGenericScale } from '@utils/generic-scale';

const generateBackgroundColorTokens = (scale: any, grayScale: any, errorScale: any): any => {
  const genericScale: GenericScale = specificScaleToGenericScale(scale);
  const genericErrorScale: GenericScale = specificScaleToGenericScale(errorScale);
  const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);

  const backgroundColors: any = {
    'background-input-filled-primary-normal': genericScale[20],
    'background-input-filled-primary-focused': genericScale[30],
    'background-input-filled-primary-disabled': genericGrayScale[20],
    'background-input-filled-primary-invalid': genericErrorScale[20],
    'background-input-filled-primary-invalid-focused': genericErrorScale[30],

    'background-input-outlined-primary-normal': genericScale[20],
    'background-input-outlined-primary-focused': genericScale[30],
    'background-input-outlined-primary-disabled': genericGrayScale[20],
    'background-input-outlined-primary-invalid': genericErrorScale[20],
    'background-input-outlined-primary-invalid-focused': genericErrorScale[30]
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
    'border-input-filled-primary-normal': genericGrayScale[100],
    'border-input-filled-primary-focused': genericScale[90],
    'border-input-filled-primary-disabled': genericGrayScale[80],
    'border-input-filled-primary-invalid': genericErrorScale[100],
    'border-input-filled-primary-invalid-focused': genericErrorScale[200],

    'border-input-outlined-primary-normal': genericGrayScale[100],
    'border-input-outlined-primary-focused': genericScale[90],
    'border-input-outlined-primary-disabled': genericGrayScale[80],
    'border-input-outlined-primary-invalid': genericErrorScale[100],
    'border-input-outlined-primary-invalid-focused': genericErrorScale[200]
  };

  return {
    ...borderColors
  };
};

const generateTextColorTokens = (scale: any, grayScale: any, errorScale: any): any => {
  const genericScale: GenericScale = specificScaleToGenericScale(scale);
  const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);
  const genericErrorScale: GenericScale = specificScaleToGenericScale(errorScale);

  const textColors: any = {
    'text-input-filled-primary-label-normal': genericGrayScale[300],
    'text-input-filled-primary-label-focused': genericScale[90],
    'text-input-filled-primary-label-disabled': genericGrayScale[80],
    'text-input-filled-primary-label-invalid': genericErrorScale[100],
    'text-input-filled-primary-label-invalid-focused': genericErrorScale[200],
    'text-input-filled-primary-placeholder-normal': genericGrayScale[70],
    'text-input-filled-primary-input-value-normal': genericGrayScale[300],
    'text-input-filled-primary-input-value-focused': genericGrayScale[300],
    'text-input-filled-primary-input-value-disabled': genericGrayScale[80],
    'text-input-filled-primary-input-value-invalid': genericErrorScale[100],
    'text-input-filled-primary-input-value-invalid-focused': genericErrorScale[200],

    'text-input-outlined-primary-label-normal': genericGrayScale[300],
    'text-input-outlined-primary-label-focused': genericScale[90],
    'text-input-outlined-primary-label-disabled': genericGrayScale[80],
    'text-input-outlined-primary-label-invalid': genericErrorScale[100],
    'text-input-outlined-primary-label-invalid-focused': genericErrorScale[200],
    'text-input-outlined-primary-placeholder-normal': genericGrayScale[70],
    'text-input-outlined-primary-input-value-normal': genericGrayScale[300],
    'text-input-outlined-primary-input-value-focused': genericGrayScale[300],
    'text-input-outlined-primary-input-value-disabled': genericGrayScale[80],
    'text-input-outlined-primary-input-value-invalid': genericErrorScale[100],
    'text-input-outlined-primary-input-value-invalid-focused': genericErrorScale[200]
  };

  return {
    ...textColors
  };
};

export const inputTokens = (scale: any, grayScale: any, errorScale: any): any => ({
  ...generateBackgroundColorTokens(scale, grayScale, errorScale),
  ...generateBorderColorTokens(scale, grayScale, errorScale),
  ...generateTextColorTokens(scale, grayScale, errorScale)
});
