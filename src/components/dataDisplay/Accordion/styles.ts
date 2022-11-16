import { Box } from '@components/layout/Box';
import { keyframes, styled } from '@lapo';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { heading_6, body_2 } from '@tokens';

const slideDown = keyframes({
  from: {
    height: 0
  },
  to: {
    height: 'var(--radix-accordion-content-height)'
  }
});

const slideUp = keyframes({
  from: {
    height: 'var(--radix-accordion-content-height)'
  },
  to: {
    height: 0
  }
});

const StyledChevron = styled(ChevronDownIcon, {
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  width: '$5',
  height: '$5',

  '[data-state=open] &': {
    transform: 'rotate(180deg)'
  }
});

const StyledAccordion = styled(Accordion.Root, {
  borderRadius: '$2',
  boxSizing: 'border-box',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',

  variants: {
    variant: {
      shaded: {
        $$boxShadow: '0 2px 10px $colors-accordion-box-shadow-color',
        boxShadow: '$$boxShadow'
      },
      bordered: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '$accordion-border-color'
      },
      unstyled: {}
    }
  },

  defaultVariants: {
    variant: 'bordered'
  }
});

const StyledAccordionItem = styled(Accordion.Item, {
  overflow: 'hidden',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '$accordion-border-color-separator',

  '&:first-child': {
    borderTopLeftRadius: '$2',
    borderTopRightRadius: '$2'
  },

  '&:last-child': {
    borderBottomLeftRadius: '$2',
    borderBottomRightRadius: '$2',
    borderBottomWidth: 0
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: '$1'
  }
});

const StyledAccordionItemHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex'
});

const StyledAccordionItemTrigger = styled(Accordion.Trigger, {
  alignItems: 'center',
  all: 'unset',
  backgroundColor: '$accordion-item-trigger-background-color-normal',
  color: '$text-gray-colored-color-high-contrast',
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  padding: '$4 $6',
  transition: 'background-color 200ms linear, color 200ms linear',
  ...heading_6,

  '&:hover:enabled, &:hover:enabled svg': {
    backgroundColor: '$accordion-item-trigger-background-color-hover',
    color: '$text-gray-colored-color-high-contrast'
  },

  '&[data-disabled]': {
    color: '$text-gray-colored-disabled'
  },

  '&[data-state="open"]': {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '$accordion-border-color'
  }
});

const StyledAccordionItemContent = styled(Accordion.Content, {
  ...body_2,
  color: '$text-gray-colored-color-low-contrast',
  overflow: 'hidden',
  backgroundColor: '$accordion-item-content-background-color',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`
  }
});

const StyledAccordionItemContentBox = styled(Box, {
  padding: '$4 $4 $4 $7'
});

export {
  StyledAccordion,
  StyledAccordionItem,
  StyledAccordionItemHeader,
  StyledAccordionItemTrigger,
  StyledAccordionItemContent,
  StyledChevron,
  StyledAccordionItemContentBox
};
