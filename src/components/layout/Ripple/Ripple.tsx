import { keyframes, styled, LapoVariants } from '@lapo';
import { Box } from '@components/layout/Box';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { MouseEvent, useMemo, useState } from 'react';

/* -------------------------------------------------------------------------------------------------
 * Ripple
 * -----------------------------------------------------------------------------------------------*/
const StyledRippleContainer = styled(Box, {
  position: 'relative',
  overflow: 'hidden',
  display: 'inline-block',
  pointerEvents: 'none',

  '*': {
    pointerEvents: 'auto'
  },

  variants: {
    shape: {
      flat: {
        borderRadius: 0
      },
      rounded: {
        borderRadius: '$2'
      },
      soft: {
        borderRadius: '$4'
      }
    }
  },

  defaultVariants: {
    shape: 'rounded'
  }
});

const RippleAnimation = keyframes({
  to: {
    opacity: 0,
    transform: 'scale(2)'
  }
});

const StyledRippleEffect = styled('span', {
  transform: 'scale(0)',
  borderRadius: '$4',
  position: 'absolute',
  opacity: '0.75',
  animation: `${RippleAnimation} 1000ms`,
  pointerEvents: 'none'
});

type RippleVariants = LapoVariants<typeof StyledRippleContainer>;
type RippleOwnProps = RippleVariants & { center?: boolean; backgroundColor?: string };
type RippleComponent = Polymorphic.ForwardRefComponent<typeof Box, RippleOwnProps>;

const Ripple = React.forwardRef(({ children, center, backgroundColor, ...props }, forwardedRef) => {
  const [spanStyles, setSpanStyles] = useState({});
  const [count, setCount] = useState(0);
  const [bounce, setBounce] = useState<any>();
  const id = useMemo(() => useId('ripple'), []);

  const cleanUp = () => {
    setSpanStyles({});
    setCount(0);
  };

  const onMouseUp = (cleanUpFn: any, delay: number) => {
    clearTimeout(bounce);
    setBounce(
      setTimeout(() => {
        cleanUpFn();
      }, delay)
    );
  };

  const renderRipple = () => {
    const spanArray = Object.keys(spanStyles);
    if (spanArray && spanArray.length) {
      return spanArray.map((key, index) => (
        <StyledRippleEffect
          key={index}
          id={`${id}-${index}`}
          as="span"
          css={{ ...spanStyles[key] }}
        />
      ));
    }

    return null;
  };

  const handleRippleEffect = (event: MouseEvent<HTMLElement>) => {
    const rippleContainer = event.currentTarget;
    const width = rippleContainer.offsetWidth;
    const height = rippleContainer.offsetHeight;
    const size = Math.max(width, height);
    const pos = rippleContainer.getBoundingClientRect();
    let x: number;
    let y: number;

    if (center) {
      x = 0;
      y = -width / 2 + height / 2;
    } else {
      x = event.pageX - pos.x - size / 2;
      y = event.pageY - pos.y - size / 2;
    }

    const spanPositionAndSize = {
      top: y,
      left: x,
      height: size,
      width: size,
      backgroundColor: backgroundColor || '$background-ripple'
    };
    const currentCount = count + 1;
    setSpanStyles((currenSpanStyles) => ({
      ...currenSpanStyles,
      [currentCount]: spanPositionAndSize
    }));
    setCount(currentCount);
    onMouseUp(cleanUp, 1001);
  };

  return (
    <StyledRippleContainer {...props} id={id} ref={forwardedRef} onClick={handleRippleEffect}>
      {children}
      {renderRipple()}
    </StyledRippleContainer>
  );
}) as RippleComponent;

/* -----------------------------------------------------------------------------------------------*/
export { Ripple };
