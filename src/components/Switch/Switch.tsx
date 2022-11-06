import { ComponentCSSProp, LapoVariants, styled } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { useMemo } from 'react';

/* -------------------------------------------------------------------------------------------------
 * Switch
 * -----------------------------------------------------------------------------------------------*/
const DEFAULT_TAG = 'span';
export const StyledSwitch = styled(DEFAULT_TAG, {});

type SwitchCSSProp = ComponentCSSProp;
type SwitchVariants = LapoVariants<typeof StyledSwitch>;
type SwitchProps = SwitchCSSProp & SwitchVariants;

type SwitchComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SwitchProps>;

const Switch = React.forwardRef(({ id, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('switch'), [id]);

  return <StyledSwitch {...props} id={customId} ref={forwardedRef} />;
}) as SwitchComponent;

export { Switch };

/* -----------------------------------------------------------------------------------------------*/
