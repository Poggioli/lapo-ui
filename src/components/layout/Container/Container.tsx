import { ComponentCSSProp, LapoVariants, styled } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { Box } from '@components/layout/Box';
import useId from '@utils/hooks/useId';
import React, { useMemo } from 'react';

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/
export const StyledContainer = styled(Box, {
  flexShrink: 0,
  marginInline: 'auto',
  paddingInline: '$4',
  width: '100%',
  transition: 'max-width 400ms ease-in-out',

  variants: {
    size: {
      small: {
        maxWidth: 'calc($13 * 4)'
      },
      medium: {
        maxWidth: 'calc($13 * 6)'
      },
      large: {
        maxWidth: 'calc($13 * 8)'
      },
      extraLarge: {
        maxWidth: 'calc($13 * 11)'
      }
    },

    centerContent: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }
  },

  defaultVariants: {
    size: 'large',
    centerContent: false
  }
});

type ContainerCSSProp = ComponentCSSProp;
type ContainerVariants = LapoVariants<typeof StyledContainer>;
type ContainerProps = ContainerCSSProp & ContainerVariants;

type ContainerComponent = Polymorphic.ForwardRefComponent<typeof StyledContainer, ContainerProps>;

const Container = React.forwardRef(({ id, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('container'), [id]);

  return <StyledContainer {...props} id={customId} ref={forwardedRef} />;
}) as ContainerComponent;

export { Container };

/* -----------------------------------------------------------------------------------------------*/
