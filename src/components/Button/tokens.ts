import { GenericScale, specificScaleToGenericScale } from "@utils/generic-scale"

const generateBackgroundColorTokens = (scale: any, grayScale: any): any => {
    const genericScale: GenericScale = specificScaleToGenericScale(scale);
    const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);

    const filledButtonBackgroundColor = {
        'background-button-filled-primary-normal': genericScale[90],
        'background-button-filled-primary-hover': genericScale[100],
        'background-button-filled-primary-pressed': genericScale[200],
        'background-button-filled-primary-focused': genericScale[200],
        'background-button-filled-primary-disabled': genericGrayScale[60],
    }

    const outlinedButtonBackgroundColor = {
        'background-button-outlined-primary-normal': genericScale[20],
        'background-button-outlined-primary-hover': genericScale[30],
        'background-button-outlined-primary-pressed': genericScale[40],
        'background-button-outlined-primary-focused': genericScale[50],
        'background-button-outlined-primary-disabled': '$transparent',
    }

    const textButtonBackgroundColor = {
        'background-button-text-primary-normal': '$transparent',
        'background-button-text-primary-hover': genericScale[20],
        'background-button-text-primary-pressed': genericScale[30],
        'background-button-text-primary-focused': genericScale[40],
        'background-button-text-primary-disabled': '$transparent',
    }

    return {
        ...filledButtonBackgroundColor,
        ...outlinedButtonBackgroundColor,
        ...textButtonBackgroundColor
    };
};

const generateBorderColorTokens = (scale: any, grayScale: any): any => {
    const genericScale: GenericScale = specificScaleToGenericScale(scale);
    const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);

    const filledButtonBorderColor: any = {
        'border-button-filled-primary-focused': genericScale[90]
    };

    const outlinedButtonBorderColor: any = {
        'border-button-outlined-primary-normal': genericGrayScale[200],
        'border-button-outlined-primary-hover': genericGrayScale[200],
        'border-button-outlined-primary-pressed': genericGrayScale[300],
        'border-button-outlined-primary-focused': genericScale[90],
        'border-button-outlined-primary-disabled': genericGrayScale[80],
    };

    return {
        ...filledButtonBorderColor,
        ...outlinedButtonBorderColor
    }
};

const generateTextColorTokens = (scale: any, grayScale: any): any => {
    const genericScale: GenericScale = specificScaleToGenericScale(scale);
    const genericGrayScale: GenericScale = specificScaleToGenericScale(grayScale);

    const filledButtonTextColor: any = {
        'text-button-filled-primary-normal': genericScale[10],
        'text-button-filled-primary-hover': genericScale[20],
        'text-button-filled-primary-pressed': genericScale[30],
        'text-button-filled-primary-focused': genericScale[30],
        'text-button-filled-primary-disabled': genericGrayScale[200],
    };

    const outlinedButtonTextColor: any = {
        'text-button-outlined-primary-normal': genericScale[90],
        'text-button-outlined-primary-hover': genericScale[90],
        'text-button-outlined-primary-pressed': genericScale[90],
        'text-button-outlined-primary-focused': genericScale[90],
        'text-button-outlined-primary-disabled': genericGrayScale[80],
    };

    const textButtonTextColor: any = {
        'text-button-text-primary-normal': genericScale[90],
        'text-button-text-primary-hover': genericScale[90],
        'text-button-text-primary-pressed': genericScale[100],
        'text-button-text-primary-focused': genericScale[200],
        'text-button-text-primary-disabled': genericGrayScale[80],
    };

    return {
        ...filledButtonTextColor,
        ...outlinedButtonTextColor,
        ...textButtonTextColor,
    }
};

export const buttonTokens = (scale: any, grayScale: any): any => ({
    ...generateBackgroundColorTokens(scale, grayScale),
    ...generateBorderColorTokens(scale, grayScale),
    ...generateTextColorTokens(scale, grayScale),
});