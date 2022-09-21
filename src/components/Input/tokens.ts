import { GenericScale, specificScaleToGenericScale } from "@utils/generic-scale"

const generateBorderColorTokens = (scale: any, grayScale: any, errorScale: any): any => {
    const genericScale: GenericScale = specificScaleToGenericScale(scale);
    const genericErrorScale: GenericScale = specificScaleToGenericScale(errorScale);
    const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);

    const borderColor: any = {
        'border-input-normal': genericGrayScale[100],
        'border-input-focused': genericScale[90],
        'border-input-disabled': genericGrayScale[80],
        'border-input-error': genericErrorScale[200]
    };

    return {
        ...borderColor
    }
};

const generateTextColorTokens = (scale: any, grayScale: any, errorScale: any): any => {
    const genericScale: GenericScale = specificScaleToGenericScale(scale);
    const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);
    const genericErrorScale: GenericScale = specificScaleToGenericScale(errorScale);

    const textColor: any = {
        'text-input-label-normal': genericGrayScale[200],
        'text-input-label-focused': genericScale[100],
        'text-input-label-disabled': genericGrayScale[80],
        'text-input-label-error': genericErrorScale[200],

        'text-input-placeholder': genericGrayScale[70],
        'text-input-value-normal': genericGrayScale[300],
        'text-input-value-disabled': genericGrayScale[80],
        'text-input-value-error': genericErrorScale[200],
    };

    return {
        ...textColor
    }

}

export const inputTokens = (scale: any, grayScale: any, errorScale: any): any => ({
    ...generateBorderColorTokens(scale, grayScale, errorScale),
    ...generateTextColorTokens(scale, grayScale, errorScale)
});