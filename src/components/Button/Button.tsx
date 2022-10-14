import { Text } from '@components/Text';
import { ComponentCSSProp, LapoVariants, styled } from '@lapo';
import { Ripple } from '@layout/Ripple';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { body_1 } from '@tokens';
import useId from '@utils/hooks/useId';
import React, { useMemo } from 'react';

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/
const DEFAULT_TAG = 'button';
export const StyledButton = styled(DEFAULT_TAG, {
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  margin: '0',
  outline: 'none',
  padding: '$3 $6',
  transition: `background-color 200ms linear,
                color 200ms linear,
                border-color 200ms linear`,
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  border: 'none',
  borderRadius: '$$borderRadius',
  ...body_1,

  backgroundColor: '$$backgroundColorNormal',
  color: '$$colorNormal',
  borderColor: '$$borderColorNormal',

  '&:hover': {
    backgroundColor: '$$backgroundColorHover',
    color: '$$colorHover',
    borderColor: '$$borderColorHover'
  },

  '&:focus': {
    backgroundColor: '$$backgroundColorFocus',
    color: '$$colorFocus',
    borderColor: '$$borderColorFocus'
  },

  '&:active': {
    backgroundColor: '$$backgroundColorActive',
    color: '$$colorActive',
    borderColor: '$$borderColorActive'
  },

  '&:disabled, &[disabled], &[aria-disabled=true]': {
    backgroundColor: '$$backgroundColorDisabled',
    color: '$$colorDisabled',
    borderColor: '$$borderColorDisabled'
  },

  variants: {
    type: {
      solid: {
        $$backgroundColorNormal: '$$backgroundColorSolidNormal',
        $$colorNormal: '$$colorSolidNormal',
        $$borderColorNormal: '$$borderColorSolid',

        $$backgroundColorHover: '$$backgroundColorSolidHover',
        $$colorHover: '$$colorSolidNormal',
        $$borderColorHover: '$$borderColorSolid',

        $$backgroundColorFocus: '$$backgroundColorSolidFocus',
        $$colorFocus: '$$colorSolidNormal',
        $$borderColorFocus: '$$borderColorSolid',

        $$backgroundColorActive: '$$backgroundColorSolidActive',
        $$colorActive: '$$colorSolidNormal',
        $$borderColorActive: '$$borderColorSolid',

        $$backgroundColorDisabled: '$$backgroundColorSolidDisabled',
        $$colorDisabled: '$$colorSolidDisabled',
        $$borderColorDisabled: '$$borderColorSolid'
      },
      ghost: {
        borderWidth: '$1',
        borderStyle: 'solid',
        padding: 'calc($3 - 1px) calc($6 - 1px)',

        $$backgroundColorNormal: '$$backgroundColorGhostNormal',
        $$colorNormal: '$$colorGhostNormal',
        $$borderColorNormal: '$$borderColorGhostNormal',

        $$backgroundColorHover: '$$backgroundColorGhostHover',
        $$colorHover: '$$colorGhostHover',
        $$borderColorHover: '$$borderColorGhostHover',

        $$backgroundColorFocus: '$$backgroundColorGhostFocus',
        $$colorFocus: '$$colorGhostFocus',
        $$borderColorFocus: '$$borderColorGhostFocus',

        $$backgroundColorActive: '$$backgroundColorGhostActive',
        $$colorActive: '$$colorGhostActive',
        $$borderColorActive: '$$borderColorGhostActive',

        $$backgroundColorDisabled: '$$backgroundColorGhostDisabled',
        $$colorDisabled: '$$colorGhostDisabled',
        $$borderColorDisabled: '$$borderColorGhostDisabled'
      },
      text: {
        fontWeight: '$4',
        $$backgroundColorNormal: '$$backgroundColorTextNormal',
        $$colorNormal: '$$colorTextNormal',
        $$borderColorNormal: '$$borderColorText',

        $$backgroundColorHover: '$$backgroundColorTextHover',
        $$colorHover: '$$colorTextHover',
        $$borderColorHover: '$$borderColorText',

        $$backgroundColorFocus: '$$backgroundColorTextFocus',
        $$colorFocus: '$$colorTextFocus',
        $$borderColorFocus: '$$borderColorText',

        $$backgroundColorActive: '$$backgroundColorTextActive',
        $$colorActive: '$$colorTextActive',
        $$borderColorActive: '$$borderColorText',

        $$backgroundColorDisabled: '$$backgroundColorTextDisabled',
        $$colorDisabled: '$$colorTextDisabled',
        $$borderColorDisabled: '$$borderColorText'
      }
    },

    shape: {
      flat: {
        $$borderRadius: 0
      },
      rounded: {
        $$borderRadius: '$radii-2'
      },
      soft: {
        $$borderRadius: '$radii-4'
      }
    },

    variant: {
      primary: {
        $$backgroundColorSolidNormal: '$colors-button-primary-solid-background-color-normal',
        $$backgroundColorSolidHover: '$colors-button-primary-solid-background-color-hover',
        $$backgroundColorSolidFocus: '$colors-button-primary-solid-background-color-focus',
        $$backgroundColorSolidActive: '$colors-button-primary-solid-background-color-active',
        $$backgroundColorSolidDisabled: '$colors-button-primary-solid-background-color-disabled',
        $$colorSolidNormal: '$colors-button-primary-solid-color-normal',
        $$colorSolidDisabled: '$colors-button-primary-solid-color-disabled',
        $$borderColorSolid: '$colors-button-primary-solid-border-color',

        $$backgroundColorGhostNormal: '$colors-button-primary-ghost-background-color-normal',
        $$backgroundColorGhostHover: '$colors-button-primary-ghost-background-color-hover',
        $$backgroundColorGhostFocus: '$colors-button-primary-ghost-background-color-focus',
        $$backgroundColorGhostActive: '$colors-button-primary-ghost-background-color-active',
        $$backgroundColorGhostDisabled: '$colors-button-primary-ghost-background-color-disabled',
        $$colorGhostNormal: '$colors-button-primary-ghost-color-normal',
        $$colorGhostHover: '$colors-button-primary-ghost-color-hover',
        $$colorGhostFocus: '$colors-button-primary-ghost-color-focus',
        $$colorGhostActive: '$colors-button-primary-ghost-color-active',
        $$colorGhostDisabled: '$colors-button-primary-ghost-color-disabled',
        $$borderColorGhostNormal: '$colors-button-primary-ghost-border-color-normal',
        $$borderColorGhostHover: '$colors-button-primary-ghost-border-color-hover',
        $$borderColorGhostFocus: '$colors-button-primary-ghost-border-color-focus',
        $$borderColorGhostActive: '$colors-button-primary-ghost-border-color-active',
        $$borderColorGhostDisabled: '$colors-button-primary-ghost-border-color-disabled',

        $$backgroundColorTextNormal: '$colors-button-primary-text-background-color-normal',
        $$backgroundColorTextHover: '$colors-button-primary-text-background-color-hover',
        $$backgroundColorTextFocus: '$colors-button-primary-text-background-color-focus',
        $$backgroundColorTextActive: '$colors-button-primary-text-background-color-active',
        $$backgroundColorTextDisabled: '$colors-button-primary-text-background-color-disabled',
        $$colorTextNormal: '$colors-button-primary-text-color-normal',
        $$colorTextHover: '$colors-button-primary-text-color-hover',
        $$colorTextFocus: '$colors-button-primary-text-color-focus',
        $$colorTextActive: '$colors-button-primary-text-color-active',
        $$colorTextDisabled: '$colors-button-primary-text-color-disabled',
        $$borderColorText: '$colors-button-primary-text-border-color'
      },
      secondary: {
        $$backgroundColorSolidNormal: '$colors-button-secondary-solid-background-color-normal',
        $$backgroundColorSolidHover: '$colors-button-secondary-solid-background-color-hover',
        $$backgroundColorSolidFocus: '$colors-button-secondary-solid-background-color-focus',
        $$backgroundColorSolidActive: '$colors-button-secondary-solid-background-color-active',
        $$backgroundColorSolidDisabled: '$colors-button-secondary-solid-background-color-disabled',
        $$colorSolidNormal: '$colors-button-secondary-solid-color-normal',
        $$colorSolidDisabled: '$colors-button-secondary-solid-color-disabled',
        $$borderColorSolid: '$colors-button-secondary-solid-border-color',

        $$backgroundColorGhostNormal: '$colors-button-secondary-ghost-background-color-normal',
        $$backgroundColorGhostHover: '$colors-button-secondary-ghost-background-color-hover',
        $$backgroundColorGhostFocus: '$colors-button-secondary-ghost-background-color-focus',
        $$backgroundColorGhostActive: '$colors-button-secondary-ghost-background-color-active',
        $$backgroundColorGhostDisabled: '$colors-button-secondary-ghost-background-color-disabled',
        $$colorGhostNormal: '$colors-button-secondary-ghost-color-normal',
        $$colorGhostHover: '$colors-button-secondary-ghost-color-hover',
        $$colorGhostFocus: '$colors-button-secondary-ghost-color-focus',
        $$colorGhostActive: '$colors-button-secondary-ghost-color-active',
        $$colorGhostDisabled: '$colors-button-secondary-ghost-color-disabled',
        $$borderColorGhostNormal: '$colors-button-secondary-ghost-border-color-normal',
        $$borderColorGhostHover: '$colors-button-secondary-ghost-border-color-hover',
        $$borderColorGhostFocus: '$colors-button-secondary-ghost-border-color-focus',
        $$borderColorGhostActive: '$colors-button-secondary-ghost-border-color-active',
        $$borderColorGhostDisabled: '$colors-button-secondary-ghost-border-color-disabled',

        $$backgroundColorTextNormal: '$colors-button-secondary-text-background-color-normal',
        $$backgroundColorTextHover: '$colors-button-secondary-text-background-color-hover',
        $$backgroundColorTextFocus: '$colors-button-secondary-text-background-color-focus',
        $$backgroundColorTextActive: '$colors-button-secondary-text-background-color-active',
        $$backgroundColorTextDisabled: '$colors-button-secondary-text-background-color-disabled',
        $$colorTextNormal: '$colors-button-secondary-text-color-normal',
        $$colorTextHover: '$colors-button-secondary-text-color-hover',
        $$colorTextFocus: '$colors-button-secondary-text-color-focus',
        $$colorTextActive: '$colors-button-secondary-text-color-active',
        $$colorTextDisabled: '$colors-button-secondary-text-color-disabled',
        $$borderColorText: '$colors-button-secondary-text-border-color'
      },
      danger: {
        $$backgroundColorSolidNormal: '$colors-button-danger-solid-background-color-normal',
        $$backgroundColorSolidHover: '$colors-button-danger-solid-background-color-hover',
        $$backgroundColorSolidFocus: '$colors-button-danger-solid-background-color-focus',
        $$backgroundColorSolidActive: '$colors-button-danger-solid-background-color-active',
        $$backgroundColorSolidDisabled: '$colors-button-danger-solid-background-color-disabled',
        $$colorSolidNormal: '$colors-button-danger-solid-color-normal',
        $$colorSolidDisabled: '$colors-button-danger-solid-color-disabled',
        $$borderColorSolid: '$colors-button-danger-solid-border-color',

        $$backgroundColorGhostNormal: '$colors-button-danger-ghost-background-color-normal',
        $$backgroundColorGhostHover: '$colors-button-danger-ghost-background-color-hover',
        $$backgroundColorGhostFocus: '$colors-button-danger-ghost-background-color-focus',
        $$backgroundColorGhostActive: '$colors-button-danger-ghost-background-color-active',
        $$backgroundColorGhostDisabled: '$colors-button-danger-ghost-background-color-disabled',
        $$colorGhostNormal: '$colors-button-danger-ghost-color-normal',
        $$colorGhostHover: '$colors-button-danger-ghost-color-hover',
        $$colorGhostFocus: '$colors-button-danger-ghost-color-focus',
        $$colorGhostActive: '$colors-button-danger-ghost-color-active',
        $$colorGhostDisabled: '$colors-button-danger-ghost-color-disabled',
        $$borderColorGhostNormal: '$colors-button-danger-ghost-border-color-normal',
        $$borderColorGhostHover: '$colors-button-danger-ghost-border-color-hover',
        $$borderColorGhostFocus: '$colors-button-danger-ghost-border-color-focus',
        $$borderColorGhostActive: '$colors-button-danger-ghost-border-color-active',
        $$borderColorGhostDisabled: '$colors-button-danger-ghost-border-color-disabled',

        $$backgroundColorTextNormal: '$colors-button-danger-text-background-color-normal',
        $$backgroundColorTextHover: '$colors-button-danger-text-background-color-hover',
        $$backgroundColorTextFocus: '$colors-button-danger-text-background-color-focus',
        $$backgroundColorTextActive: '$colors-button-danger-text-background-color-active',
        $$backgroundColorTextDisabled: '$colors-button-danger-text-background-color-disabled',
        $$colorTextNormal: '$colors-button-danger-text-color-normal',
        $$colorTextHover: '$colors-button-danger-text-color-hover',
        $$colorTextFocus: '$colors-button-danger-text-color-focus',
        $$colorTextActive: '$colors-button-danger-text-color-active',
        $$colorTextDisabled: '$colors-button-danger-text-color-disabled',
        $$borderColorText: '$colors-button-danger-text-border-color'
      },
      success: {
        $$backgroundColorSolidNormal: '$colors-button-success-solid-background-color-normal',
        $$backgroundColorSolidHover: '$colors-button-success-solid-background-color-hover',
        $$backgroundColorSolidFocus: '$colors-button-success-solid-background-color-focus',
        $$backgroundColorSolidActive: '$colors-button-success-solid-background-color-active',
        $$backgroundColorSolidDisabled: '$colors-button-success-solid-background-color-disabled',
        $$colorSolidNormal: '$colors-button-success-solid-color-normal',
        $$colorSolidDisabled: '$colors-button-success-solid-color-disabled',
        $$borderColorSolid: '$colors-button-success-solid-border-color',

        $$backgroundColorGhostNormal: '$colors-button-success-ghost-background-color-normal',
        $$backgroundColorGhostHover: '$colors-button-success-ghost-background-color-hover',
        $$backgroundColorGhostFocus: '$colors-button-success-ghost-background-color-focus',
        $$backgroundColorGhostActive: '$colors-button-success-ghost-background-color-active',
        $$backgroundColorGhostDisabled: '$colors-button-success-ghost-background-color-disabled',
        $$colorGhostNormal: '$colors-button-success-ghost-color-normal',
        $$colorGhostHover: '$colors-button-success-ghost-color-hover',
        $$colorGhostFocus: '$colors-button-success-ghost-color-focus',
        $$colorGhostActive: '$colors-button-success-ghost-color-active',
        $$colorGhostDisabled: '$colors-button-success-ghost-color-disabled',
        $$borderColorGhostNormal: '$colors-button-success-ghost-border-color-normal',
        $$borderColorGhostHover: '$colors-button-success-ghost-border-color-hover',
        $$borderColorGhostFocus: '$colors-button-success-ghost-border-color-focus',
        $$borderColorGhostActive: '$colors-button-success-ghost-border-color-active',
        $$borderColorGhostDisabled: '$colors-button-success-ghost-border-color-disabled',

        $$backgroundColorTextNormal: '$colors-button-success-text-background-color-normal',
        $$backgroundColorTextHover: '$colors-button-success-text-background-color-hover',
        $$backgroundColorTextFocus: '$colors-button-success-text-background-color-focus',
        $$backgroundColorTextActive: '$colors-button-success-text-background-color-active',
        $$backgroundColorTextDisabled: '$colors-button-success-text-background-color-disabled',
        $$colorTextNormal: '$colors-button-success-text-color-normal',
        $$colorTextHover: '$colors-button-success-text-color-hover',
        $$colorTextFocus: '$colors-button-success-text-color-focus',
        $$colorTextActive: '$colors-button-success-text-color-active',
        $$colorTextDisabled: '$colors-button-success-text-color-disabled',
        $$borderColorText: '$colors-button-success-text-border-color'
      }
    }
  },

  defaultVariants: {
    type: 'solid',
    shape: 'rounded',
    variant: 'primary'
  }
});

type ButtonCSSProp = ComponentCSSProp;
type ButtonVariants = LapoVariants<typeof StyledButton>;
type ButtonProps = ButtonCSSProp & ButtonVariants;

type ButtonComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ButtonProps>;

const Button = React.forwardRef(({ id, children, variant, shape, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('button'), [id]);

  const rippleBackgroundColor: string = `$button-${variant}-ripple-background-color`;

  return (
    <Ripple backgroundColor={rippleBackgroundColor} shape={shape}>
      <StyledButton {...props} variant={variant} shape={shape} id={customId} ref={forwardedRef}>
        {children}
      </StyledButton>
    </Ripple>
  );
}) as ButtonComponent;

export { Button };

/* -----------------------------------------------------------------------------------------------*/
