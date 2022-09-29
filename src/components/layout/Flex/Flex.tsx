import { CSS, styled } from "@lapoConfig";
import { Box } from "@layout/Box";
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import React from "react";

/* -------------------------------------------------------------------------------------------------
* Flex
* -----------------------------------------------------------------------------------------------*/
const StyledFlex = styled(Box, {
    display: "flex"
});

type FlexCSSProp = { css?: Omit<CSS, "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent">};
type FlexVariants = Pick<CSS, "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent"> ;
type FlexOwnProps = FlexCSSProp & FlexVariants;
type FlexComponent = Polymorphic.ForwardRefComponent<typeof Box, FlexOwnProps>;

const Flex = React.forwardRef((
    { 
        children, 
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        css,
        ...props 
    }, forwardedRef) => {

        const variants: FlexVariants = {
            flexDirection: flexDirection || 'row',
            flexWrap: flexWrap || 'nowrap',
            justifyContent: justifyContent || 'flex-start',
            alignItems: alignItems || 'flex-start',
            alignContent: alignContent || 'flex-start',
        }
        
        const customCss: CSS = {
            ...css,
            ...variants
        } 

        return (
            <StyledFlex
                {...props}
                css={{
                    ...customCss
                }}
                ref={forwardedRef}
            >
                {children}
            </StyledFlex>
        );
}) as FlexComponent;
/* -----------------------------------------------------------------------------------------------*/

export { Flex, FlexOwnProps as FlexProps };
