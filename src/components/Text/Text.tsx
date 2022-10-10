import { ComponentCSSProp, LapoVariants, styled } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import {
  auxiliary,
  body_1,
  body_2,
  caption,
  heading_1,
  heading_2,
  heading_3,
  heading_4,
  heading_5,
  heading_6,
  lead_1,
  lead_2
} from '@tokens';
import useId from '@utils/hooks/useId';
import React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Text
 * -----------------------------------------------------------------------------------------------*/
const DEFAULT_TAG = 'span';
export const StyledText = styled(DEFAULT_TAG, {
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    variant: {
      heading1: {
        ...heading_1
      },
      heading2: {
        ...heading_2
      },
      heading3: {
        ...heading_3
      },
      heading4: {
        ...heading_4
      },
      heading5: {
        ...heading_5
      },
      heading6: {
        ...heading_6
      },
      lead1: {
        ...lead_1
      },
      lead2: {
        ...lead_2
      },
      body1: {
        ...body_1
      },
      body2: {
        ...body_2
      },
      auxiliary: {
        ...auxiliary
      },
      caption: {
        ...caption
      }
    },

    color: {
      primaryLowContrast: {
        color: '$text-primary-color-low-contrast'
      },
      primaryHighContrast: {
        color: '$text-primary-color-high-contrast'
      },
      grayLowContrast: {
        color: '$text-gray-color-low-contrast'
      },
      grayHighContrast: {
        color: '$text-gray-color-high-contrast'
      },
      grayColoredLowContrast: {
        color: '$text-gray-colored-color-low-contrast'
      },
      grayColoredHighContrast: {
        color: '$text-gray-colored-color-high-contrast'
      }
    }
  },

  defaultVariants: {
    variant: 'body1',
    color: 'grayColoredHighContrast'
  }
});

type TextCSSProp = ComponentCSSProp;
type TextVariants = LapoVariants<typeof StyledText>;
type TextProps = TextCSSProp & TextVariants;

type TextComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, TextProps>;

const Text = React.forwardRef(({ id, ...props }, forwardedRef) => {
  const customId: string = id || useId('Text');

  return <StyledText {...props} id={customId} ref={forwardedRef} />;
}) as TextComponent;

export { Text };

/* -----------------------------------------------------------------------------------------------*/
