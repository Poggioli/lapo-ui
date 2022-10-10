import React, { useState } from 'react';
import { styled, CSS, VariantProps } from '@lapoConfig';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import type * as Polymorphic from '@radix-ui/react-polymorphic';
import Container from './Container';
import Label from './Label';
import useId from '@utils/hooks/use-id';

const DEFAULT_TAG_RADIO = 'button';
export const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: 'block'
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',
  borderRadius: '$4',
  backgroundColor: '$$backgroundColor',

  "&[data-state='checked']": {
    $$backgroundColor: '$colors-background-radio-indicator-primary-checked',

    '&[data-disabled]': {
      $$backgroundColor: '$colors-background-radio-indicator-primary-disabled'
    }
  },

  variants: {
    invalid: {
      true: {
        $$backgroundColor: '$colors-background-radio-indicator-primary-invalid',

        "&[data-state='checked']": {
          $$backgroundColor: '$colors-background-radio-indicator-primary-invalid',

          '&[data-disabled]': {
            $$backgroundColor: '$colors-background-radio-indicator-primary-disabled'
          }
        }
      }
    }
  }
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '$2',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  transition: `border-color 150ms linear,
        background-color 150ms linear`,

  height: '$5',
  width: '$5',
  marginRight: '$4',
  marginBottom: '$1',
  borderRadius: '$4',
  borderWidth: '$2',
  borderStyle: 'solid',
  color: '$white',
  borderColor: '$$borderColor',
  backgroundColor: '$$backgroundColor',

  $$borderColor: '$colors-border-radio-primary-normal',
  $$backgroundColor: '$colors-background-radio-primary-normal',

  '&:disabled': {
    $$backgroundColor: '$colors-background-radio-primary-disabled',
    $$borderColor: '$colors-border-radio-primary-disabled'
  },

  "&[data-state='checked']": {
    $$borderColor: '$colors-border-radio-primary-checked',
    $$backgroundColor: '$colors-background-radio-primary-checked',

    '&:disabled': {
      $$backgroundColor: '$colors-background-radio-primary-disabled',
      $$borderColor: '$colors-border-radio-primary-disabled'
    }
  },

  variants: {
    invalid: {
      true: {
        $$borderColor: '$colors-border-radio-primary-invalid',
        $$backgroundColor: '$colors-background-radio-primary-invalid',

        "&[data-state='checked']": {
          $$borderColor: '$colors-border-radio-primary-invalid',
          $$backgroundColor: '$colors-background-radio-primary-invalid',

          '&:disabled': {
            $$backgroundColor: '$colors-background-radio-primary-disabled',
            $$borderColor: '$colors-border-radio-primary-disabled'
          }
        }
      }
    }
  }
});

type RadioCSSProp = { css?: CSS };
type RadioVariants = VariantProps<typeof StyledRadio>;
type RadioOwnProps = Polymorphic.OwnProps<typeof RadioGroupPrimitive.Item> &
  RadioCSSProp &
  RadioGroupPrimitive.RadioGroupItemProps &
  RadioVariants & {
    label: string;
    invalid?: boolean;
  };

type RadioComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG_RADIO, RadioOwnProps>;

export const Radio = React.forwardRef(
  ({ label, id, checked, disabled, invalid, ...props }, forwardedRef) => {
    const newId = id || useId('radio-item');

    return (
      <Container alignItems="center">
        <StyledRadio
          {...props}
          id={newId}
          invalid={invalid}
          disabled={disabled}
          aria-label={`Radio ${label}`}
          ref={forwardedRef}
        >
          <StyledIndicator invalid={invalid} />
        </StyledRadio>
        <Label htmlFor={newId} as="label" invalid={invalid} checked={checked} disabled={disabled}>
          {label}
        </Label>
      </Container>
    );
  }
) as RadioComponent;
