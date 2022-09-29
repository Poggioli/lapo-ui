import { CSS, styled, VariantProps } from '@lapoConfig';
import { Flex } from '@layout/Flex';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/
const StyledContainer = styled(Flex, {
    backgroundColor: '$$backgroundColorNormal',
    borderBottom: '$borderWidths$1 solid $$borderColorNormal',
    borderTopLeftRadius: '$1',
    borderTopRightRadius: '$1',
    boxSizing: 'border-box',
    height: "$9",
    padding: '$2 $4 $3 $3',
    position: 'relative',
    transition: `background-color 150ms linear,
      border-color 150ms linear`,
  
    variants: {
      variant: {
        filled: {
          $$backgroundColorNormal: '$colors-background-input-filled-primary-normal',
          $$backgroundColorFocused: '$colors-background-input-filled-primary-focused',
          $$backgroundColorDisabled: '$colors-background-input-filled-primary-disabled',
          $$backgroundColorInvalid: '$colors-background-input-filled-primary-invalid',
          $$backgroundColorInvalidFocused: '$colors-background-input-filled-primary-invalid-focused',
  
          $$borderColorNormal: '$colors-border-input-filled-primary-normal',
          $$borderColorFocused: '$colors-border-input-filled-primary-focused',
          $$borderColorDisabled: '$colors-border-input-filled-primary-disabled',
          $$borderColorInvalid: '$colors-border-input-filled-primary-invalid',
          $$borderColorInvalidFocused: '$colors-border-input-filled-primary-invalid-focused',
        },
        outlined: {
          $$backgroundColorNormal: '$colors-background-input-outlined-primary-normal',
          $$backgroundColorFocused: '$colors-background-input-outlined-primary-focused',
          $$backgroundColorDisabled: '$colors-background-input-outlined-primary-disabled',
          $$backgroundColorInvalid: '$colors-background-input-outlined-primary-invalid',
          $$backgroundColorInvalidFocused: '$colors-background-input-outlined-primary-invalid-focused',
  
          $$borderColorNormal: '$colors-border-input-outlined-primary-normal',
          $$borderColorFocused: '$colors-border-input-outlined-primary-focused',
          $$borderColorDisabled: '$colors-border-input-outlined-primary-disabled',
          $$borderColorInvalid: '$colors-border-input-outlined-primary-invalid',
          $$borderColorInvalidFocused: '$colors-border-input-outlined-primary-invalid-focused',
  
          borderBottomLeftRadius: '$1',
          borderBottomRightRadius: '$1',
          border: '$borderWidths$1 solid $$borderColorNormal',
        }
      },
  
      focused: {
        true: {
          backgroundColor: '$$backgroundColorFocused',
          borderColor: '$$borderColorFocused',
        }
      },
      
      invalid: {
        true: {
          backgroundColor: '$$backgroundColorInvalid',
          borderColor: '$$borderColorInvalid',
        }
      },
  
      disabled: {
        true: {
          backgroundColor: '$$backgroundColorDisabled !important',
          borderColor: '$$borderColorDisabled !important',
        }
      },
    },
  
    compoundVariants: [
      {
        focused: true,
        invalid: true,
        css: {
          backgroundColor: '$$backgroundColorInvalidFocused',
          borderColor: '$$borderColorInvalidFocused',
        }
      }
    ],
  
    defaultVariants: {
      variant: 'filled'
    }
  
});
  
type ContainerCSSProp = { css?: CSS };
type ContainerVariants = VariantProps<typeof StyledContainer>;
type ContainerOwnProps = ContainerCSSProp & ContainerVariants;
type ContainerComponent = Polymorphic.ForwardRefComponent<typeof Flex, ContainerOwnProps>;

const Container = React.forwardRef(({children, ...props}, forwardedRef) => {
  return <StyledContainer {...props} ref={forwardedRef}>{children}</StyledContainer>
}) as ContainerComponent
/* -----------------------------------------------------------------------------------------------*/

export default Container;