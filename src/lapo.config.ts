import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
export { VariantProps } from '@stitches/react'
import { indigo, slate } from '@radix-ui/colors'
import { buttonTokens } from '@components/Button'

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
            ...buttonTokens(indigo, slate)
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
