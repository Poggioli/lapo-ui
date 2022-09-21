import React, { useId, useState } from 'react';
import { styled, CSS, VariantProps } from '../../lapo.config';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { body_1 } from '@tokens';

const DEFAULT_TAG = 'input';
const DEFAULT_CONTAINER_TAG = 'div';
const DEFAULT_LABEL_TAG = 'label';

/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/
const StyledLabel = styled(DEFAULT_LABEL_TAG, {
  ...body_1,
  position: 'absolute',
  top: '100%',
  transform: 'translateY(-100%)',
  color: '$text-input-label-normal',
  transition: `color 150ms linear,
               top 150ms linear, 
               font-size 150ms linear, 
               transform 150ms linear`,

  variants: {
    toTop: {
      true: {
        top: 0,
        fontSize: '$2',
        transform: 'translateY(0%)',
      }
    },

    focused: {
      true: {
        color: '$text-input-label-focused'
      }
    },

    invalid: {
      true: {
        color: '$text-input-label-error'
      }
    },

    disabled: {
      true: {
        color: '$text-input-label-disabled'
      }
    },
  },

  compoundVariants: [
    {
      focused: true,
      invalid: true,
      css: {
        color: '$text-input-label-error'
      }
    }
  ]

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
  boxSizing: 'border-box',
  height: "$9",
  borderBottom: '$borderWidths$1 solid $border-input-normal',
  padding: '0 $4 $1 $3',
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  transition: 'border-color 150ms linear',

  variants: {
    focused: {
      true: {
        borderBottomColor: '$border-input-focused'
      }
    },
    
    invalid: {
      true: {
        borderBottomColor: '$border-input-error'
      }
    },

    disabled: {
      true: {
        borderBottomColor: '$border-input-disabled'
      }
    },
  },

  compoundVariants: [
    {
      focused: true,
      invalid: true,
      css: {
        borderBottomColor: '$border-input-error'
      }
    }
  ]
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
const StyledInput = styled(DEFAULT_TAG, {
  // reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  ...body_1,
  color: '$text-input-value-normal',
  fontVariantNumeric: 'tabular-nums',

  '&::placeholder': {
    color: '$text-input-placeholder',
  },

  variants: {
    invalid: {
      true: {
        color: '$text-input-value-error'
      }
    },
  },

  '&:disabled': {
    color: '$text-input-value-disabled',
    pointerEvents: 'none',
    background: '$transparent'
  },

});

type InputCSSProp = { css?: CSS };
type InputVariants = VariantProps<typeof StyledInput>;
type InputOwnProps = InputCSSProp & InputVariants & { 
  label: string 
  invalid?: boolean, 
};

type InputComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, InputOwnProps>;

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
    ...props
  }, forwardedRef) => {

  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);
  const newId = id || useId();
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
    <Container focused={isFocused} disabled={disabled} invalid={invalid}>
      <Label 
        htmlFor={newId}
        toTop={isFocused || hasValue} 
        focused={isFocused}
        disabled={disabled}
        invalid={invalid}
      >
        {ownLabel}
      </Label>
      <StyledInput 
        {...props}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder={isFocused && !value ? placeholder : ''}
        ref={forwardedRef}
        value={value}
        disabled={disabled}
        invalid={invalid}
        id={newId}
      />
    </Container>
  );
}) as InputComponent;

Input.toString = () => `.${StyledInput.className}`;
/* -----------------------------------------------------------------------------------------------*/

export { Input }