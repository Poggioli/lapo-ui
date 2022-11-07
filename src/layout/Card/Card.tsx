import { ComponentCSSProp, LapoVariants, styled } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { useMemo } from 'react';
import { StyledCard } from './styles';

/* -------------------------------------------------------------------------------------------------
 * Card
 * -----------------------------------------------------------------------------------------------*/

type CardCSSProp = ComponentCSSProp;
type CardVariants = LapoVariants<typeof StyledCard>;
type CardProps = CardCSSProp & CardVariants;

type CardComponent = Polymorphic.ForwardRefComponent<typeof StyledCard, CardProps>;

const Card = React.forwardRef(({ id, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('card'), [id]);

  return <StyledCard {...props} id={customId} ref={forwardedRef} />;
}) as CardComponent;

export { Card };

/* -----------------------------------------------------------------------------------------------*/
