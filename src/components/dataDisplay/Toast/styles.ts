import { keyframes, styled } from '@lapo';
import * as Toast from '@radix-ui/react-toast';
import { body_2, heading_6 } from '@tokens';

const VIEWPORT_PADDING = '$6';

const hide = keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
});

const slideIn = keyframes({
  from: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}))`
  },
  to: {
    transform: 'translateX(0)'
  }
});

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))'
  },
  to: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING})`
  }
});

const StyledProvider = styled(Toast.Provider, {});

const StyledRoot = styled(Toast.Root, {
  backgroundColor: '$toast-background-color',
  borderRadius: '$2',
  $$boxShadow: '$colors-overlay-70 0px 10px 38px -10px, $colors-overlay-80 0px 10px 20px -15px',
  boxShadow: '$$boxShadow',
  padding: '$4',

  '@small': {
    padding: '$4 $6'
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))'
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out'
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`
  }
});

const StyledTitle = styled(Toast.Title, {
  ...heading_6,
  color: '$text-gray-colored-color-high-contrast',
  marginBottom: '$3'
});

const StyledDescription = styled(Toast.Description, {
  ...body_2,
  color: '$text-gray-colored-color-low-contrast'
});

const StyledAction = styled(Toast.Action, {});

const StyledClose = styled(Toast.Close, {});

const StyledViewport = styled(Toast.Viewport, {
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  listStyle: 'none',
  margin: 0,
  maxWidth: 'max(35vw, calc($13 * 2.5))',
  outline: 'none',
  padding: VIEWPORT_PADDING,
  position: 'fixed',
  right: 0,
  zIndex: '$12'
});

export {
  StyledProvider,
  StyledRoot,
  StyledTitle,
  StyledDescription,
  StyledAction,
  StyledClose,
  StyledViewport
};
