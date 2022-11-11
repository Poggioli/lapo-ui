import { keyframes, styled } from '@lapo';
import * as Dialog from '@radix-ui/react-dialog';

const overlayShow = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});

const contentShow = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});

/* -------------------------------------------------------------------------------------------------
 * Modal Root
 * -----------------------------------------------------------------------------------------------*/
const StyledRoot = styled(Dialog.Root, {});
/* ----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Trigger
 * -----------------------------------------------------------------------------------------------*/
const StyledTrigger = styled(Dialog.Trigger, {
  height: 0
});
/* ----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Portal
 * -----------------------------------------------------------------------------------------------*/
const StyledPortal = Dialog.Portal;
/* ----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Overlay
 * -----------------------------------------------------------------------------------------------*/
const StyledOverlay = styled(Dialog.Overlay, {
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backgroundColor: '$modal-background-color-overlay',
  display: 'flex',
  overflowY: 'auto',
  padding: '$12 0',
  position: 'fixed',
});
/* ----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Content
 * -----------------------------------------------------------------------------------------------*/
const StyledContent = styled(Dialog.Content, {
  $$boxShadow:
    '$colors-dropdown-box-shadow-color-content 0px 10px 38px -10px, $colors-dropdown-box-shadow-color-content 0px 10px 20px -15px',
  backgroundColor: '$modal-background-color-content',
  boxSizing: 'border-box',
  borderRadius: '$2',
  boxShadow: '$$boxShadow',
  margin: 'auto',
  maxWidth: 'calc($13 * 8)',
  padding: '$6',
  position: 'relative',
  width: '85vw',
  animation: `${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '@small': {
    minWidth: 'calc($13 * 3)',
    width: '75vw'
  },

  '&:focus': {
    outline: 'none'
  }
});
/* ----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Title
 * -----------------------------------------------------------------------------------------------*/
const StyledTitle = Dialog.Title;
/* ----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Description
 * -----------------------------------------------------------------------------------------------*/
const StyledDescription = Dialog.Description;
/* ----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Close
 * -----------------------------------------------------------------------------------------------*/
const StyledClose = Dialog.Close;
/* ----------------------------------------------------------------------------------------------*/

const IconButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  borderRadius: '100%',
  color: '$modal-color-close-icon-normal',
  display: 'inline-flex',
  height: '$6',
  justifyContent: 'center',
  position: 'absolute',
  right: 'calc($4/2)',
  top: 'calc($4/2)',
  transition: 'color 200ms linear',
  width: '$6',

  '&:hover': {
    color: '$modal-color-close-icon-hover'
  },

  '&:focus': {
    color: '$modal-color-close-icon-focus'
  },

  svg: {
    height: '$6',
    width: '$6'
  }
});

export {
  StyledRoot,
  StyledTrigger,
  StyledPortal,
  StyledOverlay,
  StyledContent,
  StyledTitle,
  StyledDescription,
  StyledClose,
  IconButton
};
