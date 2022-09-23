import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
export { VariantProps } from '@stitches/react'
import { indigo, slate, tomato } from '@radix-ui/colors'
// import { buttonTokens } from '@components/Button'
import { inputTokens } from '@components/Input';
import WebFont from "webfontloader";

import {
    borderWidthTokens,
    spaceTokens,
    fontSizeTokens,
    fontFamilyTokens,
    fontWeightTokens,
    lineHeightTokens,
    letterSpaceTokens,
    sizeTokens,
    borderRadiusTokens,
    zIndexTokens
} from '@tokens';

WebFont.load({ google: { families: ["Roboto: 300, 400, 500, 700", "Nunito: 300, 400, 500, 600, 700"] } });

export const {   
    styled,
    css,
    globalCss,
    keyframes,
    theme,
    createTheme,
    getCssText,
    config
} = createStitches({
    theme: {
        colors: {
            white: '#FFF',
            black: '#000',
            transparent: 'transparent',
            // ...buttonTokens(indigo, slate),
            ...inputTokens(indigo, slate, tomato),
        },
        space: {
            ...spaceTokens()
        },
        fontSizes: {
            ...fontSizeTokens()
        },
        fonts: {
            ...fontFamilyTokens()
        },
        fontWeights: {
            ...fontWeightTokens()
        },
        lineHeights: {
            ...lineHeightTokens()
        },
        letterSpacings: {
            ...letterSpaceTokens()
        },
        sizes: {
            ...sizeTokens()
        },
        borderWidths: {
            ...borderWidthTokens()
        },
        radii: {
            ...borderRadiusTokens()
        },
        zIndices: {
            ...zIndexTokens()
        }      
    }
});

export type CSS = Stitches.CSS<typeof config>;
