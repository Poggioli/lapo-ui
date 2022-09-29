import { CSS, styled, VariantProps } from '@lapoConfig';
import { Flex } from '@layout/Flex';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/
const StyledContainer = styled(Flex, {
    boxSizing: 'border-box',
    height: "$9",
    padding: '$3 0',
});
  
type ContainerCSSProp = { css?: CSS };
type ContainerVariants = VariantProps<typeof StyledContainer>;
type ContainerOwnProps = ContainerCSSProp & ContainerVariants;
type ContainerComponent = Polymorphic.ForwardRefComponent<typeof Flex, ContainerOwnProps>;

const Container = React.forwardRef(({children, ...props}, forwardedRef) => {
  return <StyledContainer {...props} ref={forwardedRef}>{children}</StyledContainer>
}) as ContainerComponent
/* -----------------------------------------------------------------------------------------------*/

export default Container;