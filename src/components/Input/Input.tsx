import { CSS, styled, VariantProps } from '@lapoConfig';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { body_1 } from '@tokens';
import React, { useState } from 'react';

const DEFAULT_TAG_INPUT = 'input';
const DEFAULT_CONTAINER_TAG = 'div';
const DEFAULT_LABEL_TAG = 'label';

/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/
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
      },
    },

    focused: { 
      true: {
        color: '$$textColorLabelFocused',
        fontSize: '$1',
        lineHeight: '$1',
        marginTop: '0',
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
        marginTop: '0',
      }
    },
    disabled: {
      true: {
        color: '$$textColorLabelDisabled !important'
      }
    },
  },

  compoundVariants: [
    {
      focused: true,
      invalid: true,
      css: {
        color: '$$textColorLabelInvalidFocused',
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
  return <StyledLabel {...props} ref={forwardedRef}>{children}</StyledLabel>;
}) as LabelComponent;
/* -----------------------------------------------------------------------------------------------*/


/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/
const StyledContainer = styled(DEFAULT_CONTAINER_TAG, {
  backgroundColor: '$$backgroundColorNormal',
  borderBottom: '$borderWidths$1 solid $$borderColorNormal',
  borderTopLeftRadius: '$1',
  borderTopRightRadius: '$1',
  boxSizing: 'border-box',
  display: "flex",
  flexDirection: 'column',
  height: "$9",
  justifyContent: 'flex-start',
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
type ContainerComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_CONTAINER_TAG, ContainerOwnProps>;

const Container = React.forwardRef(({children, ...props}, forwardedRef) => {
  return <StyledContainer {...props} ref={forwardedRef}>{children}</StyledContainer>
}) as ContainerComponent
/* -----------------------------------------------------------------------------------------------*/


/* -------------------------------------------------------------------------------------------------
 * Input
 * -----------------------------------------------------------------------------------------------*/
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
  const newId = id || 'any-id';
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
      variant={variant}>
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
