import { StyledText } from '@components/typograph/Text';
import { styled } from '@lapo';
import { Flex } from '@components/layout/Flex';
import * as SliderPrimitive from '@radix-ui/react-slider';

const Container = styled(Flex, {
  minHeight: '$9',
  gap: '$4',
  width: 'fit-content',

  variants: {
    orientation: {
      horizontal: {
        alignItems: 'flex-end !important',
        flexDirection: 'row !important'
      },
      vertical: {
        alignItems: 'center !important',
        flexDirection: 'column !important'
      }
    }
  },

  defaultVariants: {
    orientation: 'horizontal'
  }
});

const RangeValue = styled(StyledText, {
  color: '$slider-color-max-and-min-value-normal !important',
  transition: 'color 200ms linear',

  variants: {
    disabled: {
      true: {
        color: '$slider-color-max-and-min-value-disabled !important'
      }
    }
  },

  defaultVariants: {
    disabled: false
  }
});

const StyledValue = styled(StyledText, {
  height: 0,
  opacity: 0,
  pointerEvents: 'none',
  position: 'absolute',
  transition: `color 200ms linear,
    height 200ms linear,
    left 300ms linear,
    opacity 300ms linear,
    top 300ms linear,
    width 200ms linear`,
  width: 0,
  color: '$slider-color-indicator-value-normal !important'
});
StyledValue.toString = () => `.${StyledValue.className}`;

const StyledRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  backgroundColor: '$slider-background-color-range-normal',
  borderRadius: '$4',
  transition: 'background-color 200ms linear',

  '&[data-disabled]': {
    backgroundColor: '$slider-background-color-range-disabled'
  }
});
StyledRange.toString = () => `.${StyledRange.className}`;

const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: '$slider-background-color-track-normal',
  borderRadius: '$4',
  flexGrow: 1,
  position: 'relative',
  transition: 'background-color 200ms linear',

  '&[data-disabled]': {
    backgroundColor: '$slider-background-color-track-disabled'
  },

  '&[data-orientation="horizontal"]': {
    height: '$2',

    [`${StyledRange.toString()}`]: {
      height: '100%'
    }
  },

  '&[data-orientation="vertical"]': {
    width: '$2',

    [`${StyledRange.toString()}`]: {
      width: '100%'
    }
  }
});

const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  backgroundColor: '$slider-background-color-thumb-normal',
  borderRadius: '$3',
  boxShadow: '$$boxShadow',
  display: 'block',
  height: '$4',
  transition: `background-color 200ms linear,
    transform 200ms linear,
    box-shadow 200ms linear`,
  width: '$4',
  position: 'relative',

  $$boxShadowColor: '$colors-slider-box-shadow-thumb-normal',
  $$boxShadow: '0 0 0 $$boxShadowColor',

  '&[data-disabled]': {
    backgroundColor: '$slider-background-color-thumb-disabled'
  },

  '&:not([data-disabled])': {
    '&:hover': {
      transform: 'scale(1.25)',
      $$boxShadowColor: '$colors-slider-box-shadow-thumb-hover',
      $$boxShadow: '0 2px 10px $$boxShadowColor',
      backgroundColor: '$slider-background-color-thumb-hover'
    },

    '&:focus': {
      transform: 'scale(1.25)',
      $$boxShadowColor: '$colors-slider-box-shadow-thumb-focus',
      $$boxShadow: '0 2px 10px $$boxShadowColor',
      backgroundColor: '$slider-background-color-thumb-focus'
    },

    '&:active': {
      transform: 'scale(1.25)',
      $$boxShadowColor: '$colors-slider-box-shadow-thumb-active',
      $$boxShadow: '0 2px 10px $$boxShadowColor',
      backgroundColor: '$slider-background-color-thumb-active'
    }
  }
});
StyledThumb.toString = () => `.${StyledThumb.className}`;

const StyledRoot = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',

  '&[data-orientation="horizontal"]': {
    height: '$5',
    minWidth: 'calc($13 * 2)',
    width: '100%',

    '&:not([data-disabled])': {
      [`${StyledThumb.toString()} ${StyledValue.toString()}`]: {
        top: 0
      },

      [`${StyledThumb.toString()}:is(:hover, :focus, :active) ${StyledValue.toString()}`]: {
        height: '100%',
        opacity: 1,
        top: '-$5',
        width: '100%'
      }
    }
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    height: '100%',
    minHeight: 'calc($13 * 2)',
    width: '$5',

    '&:not([data-disabled])': {
      [`${StyledThumb.toString()} ${StyledValue.toString()}`]: {
        left: 0
      },

      [`${StyledThumb.toString()}:is(:hover, :focus, :active) ${StyledValue.toString()}`]: {
        height: '100%',
        opacity: 1,
        left: '$5',
        width: '100%'
      }
    }
  }
});

export { RangeValue, StyledRoot, StyledTrack, StyledRange, StyledThumb, StyledValue, Container };
