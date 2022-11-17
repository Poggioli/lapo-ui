import { StyledText } from '@components/typograph/Text';
import { keyframes, styled } from '@lapo';
import * as Tooltip from '@radix-ui/react-tooltip';
import { body_2 } from '@tokens';

const slideUpAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(2px)'
  },

  '100%': {
    opacity: 1,
    transform: 'translateY(0)'
  }
});

const slideRightAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-2px)'
  },

  '100%': {
    opacity: 1,
    transform: 'translateX(0)'
  }
});

const slideDownAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-2px)'
  },

  '100%': {
    opacity: 1,
    transform: 'translateY(0)'
  }
});

const slideLeftAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(2px)'
  },

  '100%': {
    opacity: 1,
    transform: 'translateX(0)'
  }
});

const StyledProvider = styled(Tooltip.Provider, {});
const StyledRoot = styled(Tooltip.Root, {});
const StyledTrigger = styled(Tooltip.Trigger, {});
const StyledPortal = styled(Tooltip.Portal, {});

const StyledContent = styled(Tooltip.Content, {
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  backgroundColor: '$tooltip-content-background-color',
  $$boxShadow: '$colors-overlay-80 0px 10px 38px -10px, $colors-overlay-90 0px 10px 20px -15px',
  boxShadow: '$$boxShadow',
  borderRadius: '$2',
  ...body_2,
  color: '$text-gray-colored-color-hight-contrast-white',
  padding: '$3 $4',
  userSelect: 'none',
  willChange: 'transform, opacity',

  [`${StyledText}`]: {
    ...body_2,
    color: '$text-gray-colored-color-hight-contrast-white'
  },

  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': {
      animationName: slideDownAndFade
    },
    '&[data-side="right"]': {
      animationName: slideLeftAndFade
    },
    '&[data-side="bottom"]': {
      animationName: slideUpAndFade
    },
    '&[data-side="left"]': {
      animationName: slideRightAndFade
    }
  }
});

const StyledArrow = styled(Tooltip.Arrow, {
  fill: '$tooltip-arrow-background-color'
});

export { StyledProvider, StyledRoot, StyledTrigger, StyledPortal, StyledContent, StyledArrow };
