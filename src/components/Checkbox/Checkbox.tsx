import { Text } from '@components/Text';
import { ComponentCSSProp, LapoVariants, styled } from '@lapo';
import { Ripple } from '@layout/Ripple';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { useMemo, useState } from 'react';
import { CheckboxContainer, RippleStyle, StyledCheckbox, StyledIndicator } from './styles';
import { CheckedState } from '@radix-ui/react-checkbox';
import { useCallback } from 'react';

/* -------------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------*/
type CheckboxCSSProp = ComponentCSSProp;
type CheckboxVariants = LapoVariants<typeof StyledCheckbox>;
type CheckboxProps = CheckboxCSSProp & CheckboxVariants;

type CheckboxComponent = Polymorphic.ForwardRefComponent<typeof StyledCheckbox, CheckboxProps>;

const Checkbox = React.forwardRef(
  ({ id, children, checked, variant, disabled, onCheckedChange, ...props }, forwardedRef) => {
    const customId: string = useMemo(() => id || useId('checkbox'), [id]);
    const [checkedState, setCheckedState] = useState<CheckedState>(checked);

    const rippleBackgroundColor: string = `$checkbox-${variant}-ripple-background-color`;

    const handleOnCheckedChange = useCallback((value: CheckedState) => {
      setCheckedState(value);
      if (onCheckedChange) {
        onCheckedChange(value);
      }
    }, []);

    return (
      <CheckboxContainer
        alignItems="center"
        disabled={disabled}
        checked={!!checkedState}
        variant={variant}
      >
        <Ripple className={RippleStyle()} backgroundColor={rippleBackgroundColor} center>
          <StyledCheckbox
            {...props}
            ref={forwardedRef}
            id={customId}
            checked={checkedState}
            variant={variant}
            disabled={disabled}
            aria-label={`Checkbox ${children}`}
            onCheckedChange={handleOnCheckedChange}
          >
            <StyledIndicator>
              {checkedState && checkedState !== 'indeterminate' && <CheckIcon />}
              {checkedState && checkedState === 'indeterminate' && <DividerHorizontalIcon />}
            </StyledIndicator>
          </StyledCheckbox>
        </Ripple>
        <Text variant="body1" as="label" htmlFor={customId}>
          {children}
        </Text>
      </CheckboxContainer>
    );
  }
) as CheckboxComponent;

export { Checkbox };

/* -----------------------------------------------------------------------------------------------*/
