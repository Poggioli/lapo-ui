import { CSS, styled, VariantProps } from '@lapoConfig';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/
const DEFAULT_CONTAINER_TAG = 'div';
const StyledContainer = styled(DEFAULT_CONTAINER_TAG, {
    boxSizing: 'border-box',
    display: "flex",
    height: "$9",
    alignItems: 'center',
    padding: '$3 0',
});
  
type ContainerCSSProp = { css?: CSS };
type ContainerVariants = VariantProps<typeof StyledContainer>;
type ContainerOwnProps = ContainerCSSProp & ContainerVariants;
type ContainerComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_CONTAINER_TAG, ContainerOwnProps>;

const Container = React.forwardRef(({children, ...props}, forwardedRef) => {
  return <StyledContainer {...props} ref={forwardedRef}>{children}</StyledContainer>
}) as ContainerComponent
/* -----------------------------------------------------------------------------------------------*/

export default Container;