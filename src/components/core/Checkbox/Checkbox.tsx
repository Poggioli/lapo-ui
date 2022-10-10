import { CSS, styled, VariantProps } from '@lapoConfig';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/use-id';
import React, { useState } from 'react';
import Container from './Container';
import Label from './Label';

/* -------------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------*/
const DEFAULT_TAG_CHECKBOX = 'button';
const StyledCheckbox = styled(CheckboxPrimitive.Root, {
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
  borderRadius: '$1',
  borderWidth: '$2',
  borderStyle: 'solid',
  color: '$white',
  borderColor: '$$borderColor',
  backgroundColor: '$$backgroundColor',

  $$borderColor: '$colors-border-checkbox-primary-normal',
  $$backgroundColor: '$colors-background-checkbox-primary-normal',

  '&:disabled': {
    $$borderColor: '$colors-border-checkbox-primary-disabled',
    $$backgroundColor: '$colors-background-checkbox-primary-normal'
  },

  variants: {
    isChecked: {
      true: {
        $$borderColor: '$colors-border-checkbox-primary-checked',
        $$backgroundColor: '$colors-background-checkbox-primary-checked',

        '&:disabled': {
          $$backgroundColor: '$colors-background-checkbox-primary-disabled'
        }
      }
    },
    invalid: {
      true: {
        $$borderColor: '$colors-border-checkbox-primary-invalid',
        $$backgroundColor: '$colors-background-checkbox-primary-normal'
      }
    }
  },

  compoundVariants: [
    {
      isChecked: true,
      invalid: true,
      css: {
        $$borderColor: '$colors-border-checkbox-primary-invalid',
        $$backgroundColor: '$colors-background-checkbox-primary-invalid'
      }
    }
  ]
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',

  '>svg': {
    width: '100%',
    height: '100%'
  }
});

type CheckboxCSSProp = { css?: CSS };
type CheckboxVariants = VariantProps<typeof StyledCheckbox>;
type CheckboxOwnProps = Polymorphic.OwnProps<typeof CheckboxPrimitive.Root> &
  CheckboxCSSProp &
  CheckboxPrimitive.CheckboxProps &
  CheckboxVariants & {
    label: string;
  };

type CheckboxComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG_CHECKBOX,
  CheckboxOwnProps
>;

const Checkbox = React.forwardRef(
  ({ label, disabled, checked, invalid, id, onCheckedChange, ...props }, forwardedRef) => {
    const newId = id || useId('checkbox');
    const [checkedValue, setCheckedValue] = useState<CheckboxPrimitive.CheckedState>(checked);

    const handleOnCheckedChange = (checkedState: CheckboxPrimitive.CheckedState) => {
      setCheckedValue(checkedState);
      if (onCheckedChange) {
        onCheckedChange(checkedState);
      }
    };

    return (
      <Container alignItems="center">
        <StyledCheckbox
          {...props}
          invalid={invalid}
          isChecked={!!checkedValue}
          disabled={disabled}
          id={newId}
          checked={checkedValue}
          onCheckedChange={handleOnCheckedChange}
          aria-label={`Checkbox ${label}`}
          ref={forwardedRef}
        >
          <StyledIndicator>
            {checkedValue && checkedValue !== 'indeterminate' && <CheckIcon />}
            {checkedValue && checkedValue === 'indeterminate' && <DividerHorizontalIcon />}
          </StyledIndicator>
        </StyledCheckbox>
        <Label
          htmlFor={newId}
          as="label"
          invalid={invalid}
          isChecked={!!checkedValue}
          disabled={disabled}
        >
          {label}
        </Label>
      </Container>
    );
  }
) as CheckboxComponent;

export { Checkbox };
