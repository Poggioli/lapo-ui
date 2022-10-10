import { Text } from '@components/Text';
import { CSS, styled, VariantProps } from '@lapoConfig';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { body_1 } from '@tokens';
import React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/
const StyledLabel = styled(Text, {
  color: '$$textColor',
  transition: 'color 150ms linear',

  $$textColor: '$colors-text-checkbox-primary-normal',

  variants: {
    isChecked: {
      true: {
        $$textColor: '$colors-text-checkbox-primary-checked'
      }
    },
    invalid: {
      true: {
        $$textColor: '$colors-text-checkbox-primary-invalid'
      }
    },
    disabled: {
      true: {
        $$textColor: '$colors-text-checkbox-primary-disabled !important'
      }
    }
  },

  compoundVariants: [
    {
      isChecked: true,
      invalid: true,
      css: {
        $$textColor: '$colors-text-checkbox-primary-invalid'
      }
    }
  ]
});

type LabelCSSProp = { css?: CSS };
type LabelVariants = VariantProps<typeof StyledLabel>;
type LabelOwnProps = LabelCSSProp & LabelVariants;
type LabelComponent = Polymorphic.ForwardRefComponent<typeof Text, LabelOwnProps>;

const Label = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <StyledLabel {...props} ref={forwardedRef}>
      {children}
    </StyledLabel>
  );
}) as LabelComponent;
/* -----------------------------------------------------------------------------------------------*/

export default Label;
