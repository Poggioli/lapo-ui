import { CSS, styled, VariantProps } from '@lapoConfig';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { body_1 } from '@tokens';
import React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/
const DEFAULT_LABEL_TAG = 'label';
const StyledLabel = styled(DEFAULT_LABEL_TAG, {
  ...body_1,
  color: '$$textColorLabelNormal',
  marginTop: '$3',
  transition: `color 150ms linear,
    font-size 150ms linear,
    margin-top 175ms linear`,

  variants: {
    variant: {
      filled: {
        $$textColorLabelNormal: '$colors-text-input-filled-primary-label-normal',
        $$textColorLabelFocused: '$colors-text-input-filled-primary-label-focused',
        $$textColorLabelDisabled: '$colors-text-input-filled-primary-label-disabled',
        $$textColorLabelInvalid: '$colors-text-input-filled-primary-label-invalid',
        $$textColorLabelInvalidFocused: '$colors-text-input-filled-primary-label-invalid-focused'
      },
      outlined: {
        $$textColorLabelNormal: '$colors-text-input-outlined-primary-label-normal',
        $$textColorLabelFocused: '$colors-text-input-outlined-primary-label-focused',
        $$textColorLabelDisabled: '$colors-text-input-outlined-primary-label-disabled',
        $$textColorLabelInvalid: '$colors-text-input-outlined-primary-label-invalid',
        $$textColorLabelInvalidFocused: '$colors-text-input-outlined-primary-label-invalid-focused'
      }
    },

    focused: {
      true: {
        color: '$$textColorLabelFocused',
        fontSize: '$1',
        lineHeight: '$1',
        marginTop: '0'
      }
    },
    invalid: {
      true: {
        color: '$$textColorLabelInvalid'
      }
    },
    filled: {
      true: {
        fontSize: '$1',
        lineHeight: '$1',
        marginTop: '0'
      }
    },
    disabled: {
      true: {
        color: '$$textColorLabelDisabled !important'
      }
    }
  },

  compoundVariants: [
    {
      focused: true,
      invalid: true,
      css: {
        color: '$$textColorLabelInvalidFocused'
      }
    }
  ],

  defaultVariants: {
    variant: 'filled'
  }
});

type LabelCSSProp = { css?: CSS };
type LabelVariants = VariantProps<typeof StyledLabel>;
type LabelOwnProps = LabelCSSProp & LabelVariants;
type LabelComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_LABEL_TAG, LabelOwnProps>;

const Label = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <StyledLabel {...props} ref={forwardedRef}>
      {children}
    </StyledLabel>
  );
}) as LabelComponent;
/* -----------------------------------------------------------------------------------------------*/

export default Label;
