import { Ripple } from '@components/layout/Ripple';
import { ComponentCSSProp, LapoVariants } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { useMemo } from 'react';
import { StyledButton } from './styles';

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/
type ButtonCSSProp = ComponentCSSProp;
type ButtonVariants = LapoVariants<typeof StyledButton>;
type ButtonProps = ButtonCSSProp & ButtonVariants;

type ButtonComponent = Polymorphic.ForwardRefComponent<typeof StyledButton, ButtonProps>;

const Button = React.forwardRef(({ id, children, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('button'), [id]);

  const rippleBackgroundColor: string = `$button-${props.variant}-ripple-background-color`;

  return (
    <Ripple backgroundColor={rippleBackgroundColor} shape={props.shape}>
      <StyledButton {...props} id={customId} ref={forwardedRef}>
        {children}
      </StyledButton>
    </Ripple>
  );
}) as ButtonComponent;

Button.defaultProps = {
  variant: 'primary',
  shape: 'rounded',
  type: 'solid'
};

export { Button };
/* -----------------------------------------------------------------------------------------------*/
