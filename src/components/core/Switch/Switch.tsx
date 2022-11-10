import { ComponentCSSProp, LapoVariants } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import assignRefs from '@utils/assignRefs/assignRefs';
import useId from '@utils/hooks/useId';
import React, { useMemo } from 'react';
import { Container, Label, StyledRoot, StyledSwitch } from './styles';

/* -------------------------------------------------------------------------------------------------
 * Switch
 * -----------------------------------------------------------------------------------------------*/
type SwitchCSSProp = ComponentCSSProp;
type SwitchVariants = LapoVariants<typeof StyledRoot>;
type SwitchProps = SwitchCSSProp &
  SwitchVariants & {
    inverted?: boolean;
  };

type SwitchComponent = Polymorphic.ForwardRefComponent<typeof StyledRoot, SwitchProps>;

const Switch = React.forwardRef(({ id, children, inverted, variant, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('switch'), [id]);

  return (
    <Container inverted={!!inverted} variant={variant} alignItems="center">
      <StyledRoot
        {...props}
        id={customId}
        variant={variant}
        aria-label="Switch"
        ref={assignRefs(forwardedRef)}
      >
        <StyledSwitch variant={variant} />
      </StyledRoot>
      <Label as="label" htmlFor={customId}>
        {children}
      </Label>
    </Container>
  );
}) as SwitchComponent;

Switch.defaultProps = {
  inverted: false,
  orientation: 'primary'
};

export { Switch };

/* -----------------------------------------------------------------------------------------------*/
