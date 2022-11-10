import { Text } from '@components/typograph/Text';
import { ComponentCSSProp, LapoVariants } from '@lapo';
import { Ripple } from '@components/layout/Ripple';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import {} from '@radix-ui/react-radio-group';
import useId from '@utils/hooks/useId';
import React, { useMemo } from 'react';
import { RadiobuttonContainer, RippleStyle, StyledIndicator, StyledRadiobutton } from './styles';

/* -------------------------------------------------------------------------------------------------
 * Radiobutton
 * -----------------------------------------------------------------------------------------------*/
type RadiobuttonCSSProp = ComponentCSSProp;
type RadiobuttonVariants = LapoVariants<typeof StyledRadiobutton>;
type RadiobuttonProps = RadiobuttonCSSProp & RadiobuttonVariants;

type RadiobuttonComponent = Polymorphic.ForwardRefComponent<
  typeof StyledRadiobutton,
  RadiobuttonProps
>;

const Radiobutton = React.forwardRef(
  ({ id, children, variant, disabled, checked, ...props }, forwardedRef) => {
    const customId: string = useMemo(() => id || useId('radiobutton'), [id]);

    const rippleBackgroundColor: string = `$radiobutton-${variant}-ripple-background-color`;

    return (
      <RadiobuttonContainer
        alignItems="center"
        disabled={disabled}
        checked={checked}
        variant={variant}
      >
        <Ripple className={RippleStyle()} backgroundColor={rippleBackgroundColor} center>
          <StyledRadiobutton
            {...props}
            ref={forwardedRef}
            id={customId}
            variant={variant}
            disabled={disabled}
            checked={checked}
            aria-label={`Radiobutton ${children}`}
          >
            <StyledIndicator />
          </StyledRadiobutton>
        </Ripple>
        <Text variant="body1" as="label" htmlFor={customId}>
          {children}
        </Text>
      </RadiobuttonContainer>
    );
  }
) as RadiobuttonComponent;

Radiobutton.defaultProps = {
  variant: 'primary',
  disabled: false,
  checked: false
};

export { Radiobutton };

/* -----------------------------------------------------------------------------------------------*/
