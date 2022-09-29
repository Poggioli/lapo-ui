import { CSS, styled, VariantProps } from '@lapoConfig';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { body_1 } from '@tokens';
import useId from '@utils/hooks/use-id';
import React, { useState } from 'react';
import Container from './Container';
import Label from './Label';


/* -------------------------------------------------------------------------------------------------
* Input
* -----------------------------------------------------------------------------------------------*/
const DEFAULT_TAG_INPUT = 'input';
const StyledInput = styled(DEFAULT_TAG_INPUT, {
  // reset
  appearance: 'none',
  backgroundColor: '$transparent',
  borderWidth: '0',
  bottom: '$3',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '0',
  position: 'absolute',
  width: 'calc(100% - $6)',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  transition: `color 150ms linear`,

  '&::before': {
    boxSizing: 'border-box',
  },

  '&::after': {
    boxSizing: 'border-box',
  },

  ...body_1,

  '&::placeholder': {
    color: '$text-input-filled-primary-placeholder-normal',
  },

  '&:disabled': {
    color: '$$textColorInputDisabled !important',
    pointerEvents: 'none',
  },

  '&:focus': {
    color: '$$textColorInputFocused'
  },
  
  color: '$$textColorInputNormal',
  fontVariantNumeric: 'tabular-nums',

  variants: {
    variant: {
      filled: {
        $$textColorInputNormal: '$colors-text-input-filled-primary-input-value-normal',
        $$textColorInputFocused: '$colors-text-input-filled-primary-input-value-focused',
        $$textColorInputDisabled: '$colors-text-input-filled-primary-input-value-disabled',
        $$textColorInputInvalid: '$colors-text-input-filled-primary-input-value-invalid',
        $$textColorInputInvalidFocused: '$colors-text-input-filled-primary-input-value-invalid-focused'
      },
      outlined: {
        $$textColorInputNormal: '$colors-text-input-outlined-primary-input-value-normal',
        $$textColorInputFocused: '$colors-text-input-outlined-primary-input-value-focused',
        $$textColorInputDisabled: '$colors-text-input-outlined-primary-input-value-disabled',
        $$textColorInputInvalid: '$colors-text-input-outlined-primary-input-value-invalid',
        $$textColorInputInvalidFocused: '$colors-text-input-outlined-primary-input-value-invalid-focused'
      },
    },

    invalid: {
      true: {
        color: '$$textColorInputInvalid',

        '&:focus': {
          color: '$$textColorInputInvalidFocused'
        },
      }
    }
  },

  defaultVariants: {
    variant: 'filled'
  }
});

type InputCSSProp = { css?: CSS };
type InputVariants = VariantProps<typeof StyledInput>;
type InputOwnProps = InputCSSProp & InputVariants & { 
  label: string
  variant?: 'filled' | 'outlined'
};

type InputComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG_INPUT, InputOwnProps>;

const Input = React.forwardRef((
  {
    children,
    onFocus, 
    onBlur, 
    onChange, 
    value, 
    placeholder, 
    disabled,
    id,
    required,
    invalid,
    label,
    variant,
    ...props
  }, forwardedRef) => {

  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);
  //ToDo create a hook to generate Id's
  // const newId = id || useId();
  const newId = id || useId('input');
  const ownLabel = required ? '*'.concat(label) : label;

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(true);
    if(onFocus) {
      onFocus(event);
    }
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(false);
    if(onBlur) {
      onBlur(event)
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!event.target.value)
    if(onChange) {
      onChange(event)
    }
  };

  return  (
    <Container 
      focused={isFocused}
      disabled={disabled}
      invalid={invalid}
      variant={variant}
      flexDirection='column'
    >
      <Label 
        htmlFor={newId}
        filled={hasValue}
        focused={isFocused}
        disabled={disabled}
        invalid={invalid}
        variant={variant}
      >
        {ownLabel}
      </Label>
      <StyledInput 
        {...props}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder={isFocused ? placeholder : ''}
        ref={forwardedRef}
        value={value}
        disabled={disabled}
        invalid={invalid}
        id={newId}
        variant={variant}
      />
    </Container>
  );
}) as InputComponent;

Input.toString = () => `.${StyledInput.className}`;
/* -----------------------------------------------------------------------------------------------*/

export { Input };
