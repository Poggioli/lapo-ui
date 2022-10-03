import { GenericScale, specificScaleToGenericScale } from "@utils/generic-scale"

const generateBackgroundColorTokens = (scale: any, grayScale: any, errorScale: any): any => {
    const genericScale: GenericScale = specificScaleToGenericScale(scale);
    const genericErrorScale: GenericScale = specificScaleToGenericScale(errorScale);
    const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);

    const backgroundColors: any = {
        'background-radio-primary-normal': '$transparent',
        'background-radio-primary-checked': '$transparent',
        'background-radio-primary-disabled': '$transparent',
        'background-radio-primary-invalid': '$transparent',

        'background-radio-indicator-primary-checked': genericScale[90],
        'background-radio-indicator-primary-disabled': genericGrayScale[80],
        'background-radio-indicator-primary-invalid': genericErrorScale[100],
    };

    return {
        ...backgroundColors
    }

}

const generateBorderColorTokens = (scale: any, grayScale: any, errorScale: any): any => {
    const genericScale: GenericScale = specificScaleToGenericScale(scale);
    const genericErrorScale: GenericScale = specificScaleToGenericScale(errorScale);
    const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);

    const borderColors: any = {
        'border-radio-primary-normal': genericGrayScale[100],
        'border-radio-primary-checked': genericScale[90],
        'border-radio-primary-disabled': genericGrayScale[80],
        'border-radio-primary-invalid': genericErrorScale[100],
    };

    return {
        ...borderColors
    }
};

const generateTextColorTokens = (grayScale: any, errorScale: any): any => {
    const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);
    const genericErrorScale: GenericScale = specificScaleToGenericScale(errorScale);

    const textColors: any = {
        'text-radio-primary-normal': genericGrayScale[300],
        'text-radio-primary-checked': genericGrayScale[300],
        'text-radio-primary-disabled': genericGrayScale[80],
        'text-radio-primary-invalid': genericErrorScale[200],
    };

    return {
        ...textColors
    }

}

export const radioTokens = (scale: any, grayScale: any, errorScale: any): any => ({
    ...generateBackgroundColorTokens(scale, grayScale, errorScale),
    ...generateBorderColorTokens(scale, grayScale, errorScale),
    ...generateTextColorTokens(grayScale, errorScale)
});