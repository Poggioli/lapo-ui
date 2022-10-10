import { CSS, styled, VariantProps } from '@lapoConfig';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import {
  heading_1,
  heading_2,
  heading_3,
  heading_4,
  heading_5,
  heading_6,
  lead_1,
  lead_2,
  body_1,
  body_2,
  auxiliary,
  caption
} from '@tokens';
import React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Text
 * -----------------------------------------------------------------------------------------------*/
const DEFAULT_SPAN_TAG = 'span';
const StyledText = styled(DEFAULT_SPAN_TAG, {
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
    }
  },

  defaultVariants: {
    variant: 'body1'
  }
});

type TextCSSProp = { css?: CSS };
type TextVariants = VariantProps<typeof StyledText>;
type TextOwnProps = TextCSSProp & TextVariants;
type TextComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_SPAN_TAG, TextOwnProps>;

export const Text = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <StyledText {...props} ref={forwardedRef}>
      {children}
    </StyledText>
  );
}) as TextComponent;

Text.toString = () => `.${StyledText.className}`;
/* -----------------------------------------------------------------------------------------------*/
