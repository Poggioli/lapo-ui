import { CSS, styled, VariantProps } from '@lapoConfig';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { body_1 } from '@tokens';
import useId from '@utils/hooks/use-id';
import React from 'react';

const DEFAULT_TAG_BUTTON = 'button';

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/
const StyledButton = styled(DEFAULT_TAG_BUTTON, {
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  margin: '0',
  outline: 'none',
  padding: '$3 $8',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  borderRadius: '$4',
  transition: `color 150ms linear,
    border-color 150ms linear,
    background-color 150ms linear`,

  ...body_1,
  backgroundColor: '$$backgroundColorNormal',
  border: '$$borderStylesNormal',
  color: '$$textColorNormal',

  '&:hover': {
    backgroundColor: '$$backgroundColorHover',
    border: '$$borderStylesHover',
    color: '$$textColorHover'
  },

  '&:active': {
    backgroundColor: '$$backgroundColorPressed',
    border: '$$borderStylesPressed',
    color: '$$textColorPressed'
  },

  '&:focus': {
    backgroundColor: '$$backgroundColorFocused',
    border: '$$borderStylesFocused',
    color: '$$textColorFocused'
  },

  '&:disabled': {
    backgroundColor: '$$backgroundColorDisabled',
    border: '$$borderStylesDisabled',
    color: '$$textColorDisabled',
    pointerEvents: 'none'
  },

  variants: {
    variant: {
      filled: {
        $$backgroundColorNormal: '$colors-background-button-filled-primary-normal',
        $$backgroundColorHover: '$colors-background-button-filled-primary-hover',
        $$backgroundColorPressed: '$colors-background-button-filled-primary-active',
        $$backgroundColorFocused: '$colors-background-button-filled-primary-focused',
        $$backgroundColorDisabled: '$colors-background-button-filled-primary-disabled',

        $$borderStylesNormal: 'none',
        $$borderStylesHover: 'none',
        $$borderStylesPressed: 'none',
        $$borderStylesFocused: '$borderWidths-1 solid $colors-border-button-filled-primary-focused',
        $$borderStylesDisabled: 'none',

        $$textColorNormal: '$colors-text-button-filled-primary-normal',
        $$textColorHover: '$colors-text-button-filled-primary-hover',
        $$textColorPressed: '$colors-text-button-filled-primary-active',
        $$textColorFocused: '$colors-text-button-filled-primary-focused',
        $$textColorDisabled: '$colors-text-button-filled-primary-disabled'
      },

      outlined: {
        $$backgroundColorNormal: '$colors-background-button-outlined-primary-normal',
        $$backgroundColorHover: '$colors-background-button-outlined-primary-hover',
        $$backgroundColorPressed: '$colors-background-button-outlined-primary-active',
        $$backgroundColorFocused: '$colors-background-button-outlined-primary-focused',
        $$backgroundColorDisabled: '$colors-background-button-outlined-primary-disabled',

        $$borderStylesNormal: '$borderWidths-1 solid $colors-border-button-outlined-primary-normal',
        $$borderStylesHover: '$borderWidths-1 solid $colors-border-button-outlined-primary-hover',
        $$borderStylesPressed:
          '$borderWidths-1 solid $colors-border-button-outlined-primary-active',
        $$borderStylesFocused:
          '$borderWidths-1 solid $colors-border-button-outlined-primary-focused',
        $$borderStylesDisabled:
          '$borderWidths-1 solid $colors-border-button-outlined-primary-disabled',

        $$textColorNormal: '$colors-text-button-outlined-primary-normal',
        $$textColorHover: '$colors-text-button-outlined-primary-hover',
        $$textColorPressed: '$colors-text-button-outlined-primary-active',
        $$textColorFocused: '$colors-text-button-outlined-primary-focused',
        $$textColorDisabled: '$colors-text-button-outlined-primary-disabled',

        padding: 'calc($3 - 1px) calc($8 - 1px)'
      },

      text: {
        $$backgroundColorNormal: '$colors-background-button-text-primary-normal',
        $$backgroundColorHover: '$colors-background-button-text-primary-hover',
        $$backgroundColorPressed: '$colors-background-button-text-primary-active',
        $$backgroundColorFocused: '$colors-background-button-text-primary-focused',
        $$backgroundColorDisabled: '$colors-background-button-text-primary-disabled',

        $$borderStylesNormal: 'none',
        $$borderStylesHover: 'none',
        $$borderStylesPressed: 'none',
        $$borderStylesFocused: 'none',
        $$borderStylesDisabled: 'none',

        $$textColorNormal: '$colors-text-button-text-primary-normal',
        $$textColorHover: '$colors-text-button-text-primary-hover',
        $$textColorPressed: '$colors-text-button-text-primary-active',
        $$textColorFocused: '$colors-text-button-text-primary-focused',
        $$textColorDisabled: '$colors-text-button-text-primary-disabled'
      }
    }
  },

  defaultVariants: {
    variant: 'filled'
  }
});

type ButtonCSSProp = { css?: CSS };
type ButtonVariants = Omit<VariantProps<typeof StyledButton>, 'size'>;
type ButtonOwnProps = ButtonCSSProp & ButtonVariants & { size?: any };
type ButtonComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG_BUTTON, ButtonOwnProps>;

const Button = React.forwardRef(({ id, ...props }, forwardedRef) => {
  const newId = id || useId('button');

  return <StyledButton {...props} id={newId} ref={forwardedRef} />;
}) as ButtonComponent;

Button.toString = () => `.${StyledButton.className}`;
/* -----------------------------------------------------------------------------------------------*/

export { Button };
