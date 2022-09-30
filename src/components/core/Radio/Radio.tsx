import React, { useState } from 'react';
import { styled, CSS, VariantProps } from '@lapoConfig';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import type * as Polymorphic from '@radix-ui/react-polymorphic';
import Container from './Container';
import Label from './Label';
import useId from '@utils/hooks/use-id';

export const RadioGroup = styled(RadioGroupPrimitive.Root, {
    display: 'block',
});
  
const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
  backgorundColor: '#000'
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
    padding: '0',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },
    transition: `border-color 150ms linear,
        background-color 150ms linear`,

    height: '$5',
    width: '$5',
    marginRight: '$4',
    borderRadius: '$4',
    borderWidth: '$2',
    borderStyle: 'solid',
    color: '$white',
    borderColor: '$$borderColor',
    backgroundColor: '$$backgroundColor',

    $$borderColor: '$colors-border-radio-primary-normal',
    $$backgroundColor: '$colors-background-radio-primary-normal',

    '&:disabled': {
        $$borderColor: '$colors-border-radio-primary-disabled',
        $$backgroundColor: '$colors-background-radio-primary-normal',
    },

    variants: {
        isChecked: {
            true: {
                $$borderColor: '$colors-border-radio-primary-checked',
                $$backgroundColor: '$colors-background-radio-primary-checked',

                '&:disabled': {
                    $$backgroundColor: '$colors-background-radio-primary-disabled',
                },
            }
        },
        invalid: {
            true: {
                $$borderColor: '$colors-border-radio-primary-invalid',
                $$backgroundColor: '$colors-background-radio-primary-normal',
            }
        },
    },

    compoundVariants: [
        {
            isChecked: true,
            invalid: true,
            css: {
                $$borderColor: '$colors-border-radio-primary-invalid',
                $$backgroundColor: '$colors-background-radio-primary-invalid',
            }
        }
    ]
});

type RadioCSSProp = { css?: CSS };
type RadioVariants = VariantProps<typeof StyledRadio>;
type RadioOwnProps = Polymorphic.OwnProps<typeof RadioGroupPrimitive.Item> &
  RadioCSSProp &
  RadioVariants & { 
    label: string
  };

type RadioComponent = Polymorphic.ForwardRefComponent<
    Polymorphic.IntrinsicElement<typeof RadioGroupPrimitive.Item>,
    RadioOwnProps
>;

export const Radio = React.forwardRef((
  {  
    label, 
    disabled, 
    checked,
    invalid,
    id,
    onCheckedChange,
    ...props
  }, forwardedRef) => {
  
  const newId = id || useId('radio-item');
  const [checkedValue, setCheckedValue] = useState<RadioGroupPrimitive.RadioGroupContextValue>(checked)

  return (
    <Container alignItems='center'>
      <StyledRadio 
        {...props} 
        id={newId}
        ref={forwardedRef}
      >
        <StyledIndicator />
      </StyledRadio>
      <Label
        htmlFor={newId}
        // invalid={invalid}
        // isChecked={!!checkedValue}
        // disabled={disabled}
      >
        {label}
      </Label>
    </Container>
  )
}) as RadioComponent;