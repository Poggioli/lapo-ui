import { Text } from '@components/typograph/Text';
import { ComponentCSSProp, LapoVariants } from '@lapo';
import { Ripple } from '@components/layout/Ripple';
import { CheckedState } from '@radix-ui/react-checkbox';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { useMemo } from 'react';
import { CheckboxContainer, RippleStyle, StyledCheckbox, StyledIndicator, IndeterminateIndicator, CheckIndicator } from './styles';

/* -------------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------*/
type CheckboxCSSProp = ComponentCSSProp;
type CheckboxVariants = LapoVariants<typeof StyledCheckbox>;
type CheckboxProps = CheckboxCSSProp & CheckboxVariants;

type CheckboxComponent = Polymorphic.ForwardRefComponent<typeof StyledCheckbox, CheckboxProps>;

const Checkbox = React.forwardRef(
  ({ id, children, ...props }, forwardedRef) => {
    const customId: string = useMemo(() => id || useId('checkbox'), [id]);

    const rippleBackgroundColor: string = `$checkbox-${props.variant}-ripple-background-color`;

    return (
      <CheckboxContainer
        align="center"
        disabled={props.disabled}
        checked={!!props.checked}
        variant={props.variant}
      >
        <Ripple className={RippleStyle()} backgroundColor={rippleBackgroundColor} center>
          <StyledCheckbox
            {...props}
            ref={forwardedRef}
            id={customId}
          >
            <StyledIndicator>
              <CheckIndicator />
              <IndeterminateIndicator />
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

Checkbox.defaultProps = {
  variant: 'primary'
};

/* -----------------------------------------------------------------------------------------------*/
