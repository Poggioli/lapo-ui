import { ComponentCSSProp, LapoVariants, styled } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { useMemo } from 'react';
import { StyledSeparator } from './styles';

/* -------------------------------------------------------------------------------------------------
 * Separator
 * -----------------------------------------------------------------------------------------------*/

type SeparatorCSSProp = ComponentCSSProp;
type SeparatorVariants = LapoVariants<typeof StyledSeparator>;
type SeparatorProps = SeparatorCSSProp & SeparatorVariants;

type SeparatorComponent = Polymorphic.ForwardRefComponent<typeof StyledSeparator, SeparatorProps>;

const Separator = React.forwardRef(({ id, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('separator'), [id]);

  return <StyledSeparator {...props} id={customId} ref={forwardedRef} />;
}) as SeparatorComponent;

export { Separator };

/* -----------------------------------------------------------------------------------------------*/
