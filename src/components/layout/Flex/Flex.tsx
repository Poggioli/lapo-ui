import { CSS, styled } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Flex
 * -----------------------------------------------------------------------------------------------*/
const StyledFlex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex'
});

type FlexVariants = {
  direction?: CSS['flexDirection'];
  align?: CSS['alignItems'];
  justify?: CSS['justifyContent'];
  wrap?: CSS['flexWrap'];
  templateColumns?: CSS['gridTemplateColumns'];
  templateRows?: CSS['gridTemplateRows'];
  gap?: CSS['gap'];
  gapX?: CSS['columnGap'];
  gapY?: CSS['rowGap'];
};

type FlexOwnProps = FlexVariants;
type FlexComponent = Polymorphic.ForwardRefComponent<typeof StyledFlex, FlexOwnProps>;

const Flex = React.forwardRef(
  (
    {
      direction,
      align,
      justify,
      wrap,
      templateColumns,
      templateRows,
      gap,
      gapX,
      gapY,
      css,
      ...props
    },
    forwardedRef
  ) => {
    const flexStyles = {
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
      gridTemplateColumns: templateColumns,
      gridTemplateRows: templateRows,
      gap,
      columnGap: gapX,
      rowGap: gapY,
      css
    } as CSS;

    for (const key in flexStyles) {
      if (flexStyles[key] === null || flexStyles[key] === undefined) {
        delete flexStyles[key];
      }
    }

    return <StyledFlex ref={forwardedRef} css={{ ...flexStyles, ...(css as any) }} {...props} />;
  }
) as FlexComponent;
/* -----------------------------------------------------------------------------------------------*/

export { Flex };
