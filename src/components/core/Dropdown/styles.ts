import { Text } from '@components/typograph/Text';
import { CSS, keyframes, Reset, styled } from '@lapo';
import * as Select from '@radix-ui/react-select';
import { body_1 } from '@tokens';

const opening = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(2px)'
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)'
  }
});

const StyledValue = styled(Select.Value, {});

const StyledIcon = styled(Select.Icon, {
  marginLeft: '$6'
});

const StyledTrigger = styled(Select.Trigger, {
  ...Reset,
  alignItems: 'center',
  border: 'none',
  borderBottomStyle: 'solid',
  borderBottomWidth: '$1',
  display: 'inline-flex',
  justifyContent: 'space-between',
  maxWidth: 'calc($13 * 2.5)',
  padding: '$3 $4 calc($3 - 1px) $4',
  transition:
    'background-color 200ms linear, border-width 200ms linear, padding-bottom 200ms linear, border-color 200ms linear',
  width: '100%',
  backgroundColor: '$$backgroundColor',
  borderColor: '$$borderColor',

  $$borderColor: '$$borderColorNormal',
  $$backgroundColor: '$$backgroundColorNormal',
  $$color: '$$valueColorNormal',

  '&:hover, &[data-placeholder]:hover': {
    $$color: '$$placeholderColorHover',
    $$backgroundColor: '$$backgroundColorHover',
    $$borderColor: '$$borderColorHover'
  },

  '&:focus, &[data-placeholder]:focus': {
    $$color: '$$placeholderColorFocus',
    $$backgroundColor: '$$backgroundColorFocus',
    $$borderColor: '$$borderColorFocus'
  },

  '&:active, &[data-placeholder]:active': {
    $$color: '$$placeholderColorActive',
    $$backgroundColor: '$$backgroundColorActive',
    $$borderColor: '$$borderColorActive'
  },

  '&[data-disabled], &[data-placeholder][data-disabled]': {
    $$color: '$$placeholderColorDisabled',
    $$backgroundColor: '$$backgroundColorDisabled',
    $$borderColor: '$$borderColorDisabled'
  },

  '&[data-placeholder]': {
    $$color: '$$placeholderColorNormal'
  },

  [`>span:first-child, >span:first-child span, .${StyledIcon.className}`]: {
    color: '$$color',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transition: 'color 200ms linear',
    whiteSpace: 'nowrap'
  },

  span: {
    ...body_1,
    transition: 'color 200ms linear'
  },

  variants: {
    shape: {
      ghost: {
        borderRadius: '$2',
        borderStyle: 'solid',
        borderWidth: '$1',
        padding: 'calc($3 - 1px) calc($4 - 1px)',
        transition:
          'background-color 200ms linear, border-width 0ms linear, padding-bottom 0ms linear, border-color 200ms linear',

        '&:hover, &:focus': {
          borderWidth: '$2',
          padding: 'calc($3 - 2px) calc($4 - 2px)'
        },

        $$valueColorNormal: '$$valueColorGhostNormal',
        $$placeholderColorNormal: '$$placeholderColorGhostNormal',
        $$placeholderColorHover: '$$placeholderColorGhostHover',
        $$placeholderColorFocus: '$$placeholderColorGhostFocus',
        $$placeholderColorActive: '$$placeholderColorGhostActive',
        $$placeholderColorDisabled: '$$placeholderColorGhostDisabled',
        $$backgroundColorNormal: '$$backgroundColorGhostNormal',
        $$backgroundColorHover: '$$backgroundColorGhostHover',
        $$backgroundColorFocus: '$$backgroundColorGhostFocus',
        $$backgroundColorActive: '$$backgroundColorGhostActive',
        $$backgroundColorDisabled: '$$backgroundColorGhostDisabled',
        $$borderColorNormal: '$$borderColorGhostNormal',
        $$borderColorHover: '$$borderColorGhostHover',
        $$borderColorFocus: '$$borderColorGhostFocus',
        $$borderColorActive: '$$borderColorGhostActive',
        $$borderColorDisabled: '$$borderColorGhostDisabled'
      },
      solid: {
        borderRadius: '$2 $2 0 0',
        '&:hover, &:focus': {
          borderBottomWidth: '$2',
          paddingBottom: 'calc($3 - 2px)'
        },
        $$valueColorNormal: '$$valueColorSolidNormal',
        $$placeholderColorNormal: '$$placeholderColorSolidNormal',
        $$placeholderColorHover: '$$placeholderColorSolidHover',
        $$placeholderColorFocus: '$$placeholderColorSolidFocus',
        $$placeholderColorActive: '$$placeholderColorSolidActive',
        $$placeholderColorDisabled: '$$placeholderColorSolidDisabled',
        $$backgroundColorNormal: '$$backgroundColorSolidNormal',
        $$backgroundColorHover: '$$backgroundColorSolidHover',
        $$backgroundColorFocus: '$$backgroundColorSolidFocus',
        $$backgroundColorActive: '$$backgroundColorSolidActive',
        $$backgroundColorDisabled: '$$backgroundColorSolidDisabled',
        $$borderColorNormal: '$$borderColorSolidNormal',
        $$borderColorHover: '$$borderColorSolidHover',
        $$borderColorFocus: '$$borderColorSolidFocus',
        $$borderColorActive: '$$borderColorSolidActive',
        $$borderColorDisabled: '$$borderColorSolidDisabled'
      },
      standard: {
        borderRadius: '0',

        '&:hover, &:focus': {
          borderWidth: '$2',
          paddingBottom: 'calc($3 - 2px)'
        },

        $$valueColorNormal: '$$valueColorStandardNormal',
        $$placeholderColorNormal: '$$placeholderColorStandardNormal',
        $$placeholderColorHover: '$$placeholderColorStandardHover',
        $$placeholderColorFocus: '$$placeholderColorStandardFocus',
        $$placeholderColorActive: '$$placeholderColorStandardActive',
        $$placeholderColorDisabled: '$$placeholderColorStandardDisabled',
        $$backgroundColorNormal: '$$backgroundColorStandardNormal',
        $$backgroundColorHover: '$$backgroundColorStandardHover',
        $$backgroundColorFocus: '$$backgroundColorStandardFocus',
        $$backgroundColorActive: '$$backgroundColorStandardActive',
        $$backgroundColorDisabled: '$$backgroundColorStandardDisabled',
        $$borderColorNormal: '$$borderColorStandardNormal',
        $$borderColorHover: '$$borderColorStandardHover',
        $$borderColorFocus: '$$borderColorStandardFocus',
        $$borderColorActive: '$$borderColorStandardActive',
        $$borderColorDisabled: '$$borderColorStandardDisabled'
      }
    },

    variant: {
      primary: {
        $$valueColorSolidNormal: '$colors-dropdown-primary-solid-value-normal',
        $$placeholderColorSolidNormal: '$colors-dropdown-primary-solid-value-placeholder-normal',
        $$placeholderColorSolidHover: '$colors-dropdown-primary-solid-value-hover',
        $$placeholderColorSolidFocus: '$colors-dropdown-primary-solid-value-focus',
        $$placeholderColorSolidActive: '$colors-dropdown-primary-solid-value-active',
        $$placeholderColorSolidDisabled: '$colors-dropdown-primary-solid-value-disabled',
        $$backgroundColorSolidNormal: '$colors-dropdown-primary-solid-background-color-normal',
        $$backgroundColorSolidHover: '$colors-dropdown-primary-solid-background-color-hover',
        $$backgroundColorSolidFocus: '$colors-dropdown-primary-solid-background-color-focus',
        $$backgroundColorSolidActive: '$colors-dropdown-primary-solid-background-color-active',
        $$backgroundColorSolidDisabled: '$colors-dropdown-primary-solid-background-color-disabled',
        $$borderColorSolidNormal: '$colors-dropdown-primary-solid-border-color-normal',
        $$borderColorSolidHover: '$colors-dropdown-primary-solid-border-color-hover',
        $$borderColorSolidFocus: '$colors-dropdown-primary-solid-border-color-focus',
        $$borderColorSolidActive: '$colors-dropdown-primary-solid-border-color-active',
        $$borderColorSolidDisabled: '$colors-dropdown-primary-solid-border-color-disabled',

        $$valueColorGhostNormal: '$colors-dropdown-primary-ghost-value-normal',
        $$placeholderColorGhostNormal: '$colors-dropdown-primary-ghost-value-placeholder-normal',
        $$placeholderColorGhostHover: '$colors-dropdown-primary-ghost-value-hover',
        $$placeholderColorGhostFocus: '$colors-dropdown-primary-ghost-value-focus',
        $$placeholderColorGhostActive: '$colors-dropdown-primary-ghost-value-active',
        $$placeholderColorGhostDisabled: '$colors-dropdown-primary-ghost-value-disabled',
        $$backgroundColorGhostNormal: '$colors-dropdown-primary-ghost-background-color-normal',
        $$backgroundColorGhostHover: '$colors-dropdown-primary-ghost-background-color-hover',
        $$backgroundColorGhostFocus: '$colors-dropdown-primary-ghost-background-color-focus',
        $$backgroundColorGhostActive: '$colors-dropdown-primary-ghost-background-color-active',
        $$backgroundColorGhostDisabled: '$colors-dropdown-primary-ghost-background-color-disabled',
        $$borderColorGhostNormal: '$colors-dropdown-primary-ghost-border-color-normal',
        $$borderColorGhostHover: '$colors-dropdown-primary-ghost-border-color-hover',
        $$borderColorGhostFocus: '$colors-dropdown-primary-ghost-border-color-focus',
        $$borderColorGhostActive: '$colors-dropdown-primary-ghost-border-color-active',
        $$borderColorGhostDisabled: '$colors-dropdown-primary-ghost-border-color-disabled',

        $$valueColorStandardNormal: '$colors-dropdown-primary-standard-value-normal',
        $$placeholderColorStandardNormal:
          '$colors-dropdown-primary-standard-value-placeholder-normal',
        $$placeholderColorStandardHover: '$colors-dropdown-primary-standard-value-hover',
        $$placeholderColorStandardFocus: '$colors-dropdown-primary-standard-value-focus',
        $$placeholderColorStandardActive: '$colors-dropdown-primary-standard-value-active',
        $$placeholderColorStandardDisabled: '$colors-dropdown-primary-standard-value-disabled',
        $$backgroundColorStandardNormal:
          '$colors-dropdown-primary-standard-background-color-normal',
        $$backgroundColorStandardHover: '$colors-dropdown-primary-standard-background-color-hover',
        $$backgroundColorStandardFocus: '$colors-dropdown-primary-standard-background-color-focus',
        $$backgroundColorStandardActive:
          '$colors-dropdown-primary-standard-background-color-active',
        $$backgroundColorStandardDisabled:
          '$colors-dropdown-primary-standard-background-color-disabled',
        $$borderColorStandardNormal: '$colors-dropdown-primary-standard-border-color-normal',
        $$borderColorStandardHover: '$colors-dropdown-primary-standard-border-color-hover',
        $$borderColorStandardFocus: '$colors-dropdown-primary-standard-border-color-focus',
        $$borderColorStandardActive: '$colors-dropdown-primary-standard-border-color-active',
        $$borderColorStandardDisabled: '$colors-dropdown-primary-standard-border-color-disabled'
      },
      danger: {
        $$valueColorSolidNormal: '$colors-dropdown-danger-solid-value-normal',
        $$placeholderColorSolidNormal: '$colors-dropdown-danger-solid-value-placeholder-normal',
        $$placeholderColorSolidHover: '$colors-dropdown-danger-solid-value-hover',
        $$placeholderColorSolidFocus: '$colors-dropdown-danger-solid-value-focus',
        $$placeholderColorSolidActive: '$colors-dropdown-danger-solid-value-active',
        $$placeholderColorSolidDisabled: '$colors-dropdown-danger-solid-value-disabled',
        $$backgroundColorSolidNormal: '$colors-dropdown-danger-solid-background-color-normal',
        $$backgroundColorSolidHover: '$colors-dropdown-danger-solid-background-color-hover',
        $$backgroundColorSolidFocus: '$colors-dropdown-danger-solid-background-color-focus',
        $$backgroundColorSolidActive: '$colors-dropdown-danger-solid-background-color-active',
        $$backgroundColorSolidDisabled: '$colors-dropdown-danger-solid-background-color-disabled',
        $$borderColorSolidNormal: '$colors-dropdown-danger-solid-border-color-normal',
        $$borderColorSolidHover: '$colors-dropdown-danger-solid-border-color-hover',
        $$borderColorSolidFocus: '$colors-dropdown-danger-solid-border-color-focus',
        $$borderColorSolidActive: '$colors-dropdown-danger-solid-border-color-active',
        $$borderColorSolidDisabled: '$colors-dropdown-danger-solid-border-color-disabled',

        $$valueColorGhostNormal: '$colors-dropdown-danger-ghost-value-normal',
        $$placeholderColorGhostNormal: '$colors-dropdown-danger-ghost-value-placeholder-normal',
        $$placeholderColorGhostHover: '$colors-dropdown-danger-ghost-value-hover',
        $$placeholderColorGhostFocus: '$colors-dropdown-danger-ghost-value-focus',
        $$placeholderColorGhostActive: '$colors-dropdown-danger-ghost-value-active',
        $$placeholderColorGhostDisabled: '$colors-dropdown-danger-ghost-value-disabled',
        $$backgroundColorGhostNormal: '$colors-dropdown-danger-ghost-background-color-normal',
        $$backgroundColorGhostHover: '$colors-dropdown-danger-ghost-background-color-hover',
        $$backgroundColorGhostFocus: '$colors-dropdown-danger-ghost-background-color-focus',
        $$backgroundColorGhostActive: '$colors-dropdown-danger-ghost-background-color-active',
        $$backgroundColorGhostDisabled: '$colors-dropdown-danger-ghost-background-color-disabled',
        $$borderColorGhostNormal: '$colors-dropdown-danger-ghost-border-color-normal',
        $$borderColorGhostHover: '$colors-dropdown-danger-ghost-border-color-hover',
        $$borderColorGhostFocus: '$colors-dropdown-danger-ghost-border-color-focus',
        $$borderColorGhostActive: '$colors-dropdown-danger-ghost-border-color-active',
        $$borderColorGhostDisabled: '$colors-dropdown-danger-ghost-border-color-disabled',

        $$valueColorStandardNormal: '$colors-dropdown-danger-standard-value-normal',
        $$placeholderColorStandardNormal:
          '$colors-dropdown-danger-standard-value-placeholder-normal',
        $$placeholderColorStandardHover: '$colors-dropdown-danger-standard-value-hover',
        $$placeholderColorStandardFocus: '$colors-dropdown-danger-standard-value-focus',
        $$placeholderColorStandardActive: '$colors-dropdown-danger-standard-value-active',
        $$placeholderColorStandardDisabled: '$colors-dropdown-danger-standard-value-disabled',
        $$backgroundColorStandardNormal: '$colors-dropdown-danger-standard-background-color-normal',
        $$backgroundColorStandardHover: '$colors-dropdown-danger-standard-background-color-hover',
        $$backgroundColorStandardFocus: '$colors-dropdown-danger-standard-background-color-focus',
        $$backgroundColorStandardActive: '$colors-dropdown-danger-standard-background-color-active',
        $$backgroundColorStandardDisabled:
          '$colors-dropdown-danger-standard-background-color-disabled',
        $$borderColorStandardNormal: '$colors-dropdown-danger-standard-border-color-normal',
        $$borderColorStandardHover: '$colors-dropdown-danger-standard-border-color-hover',
        $$borderColorStandardFocus: '$colors-dropdown-danger-standard-border-color-focus',
        $$borderColorStandardActive: '$colors-dropdown-danger-standard-border-color-active',
        $$borderColorStandardDisabled: '$colors-dropdown-danger-standard-border-color-disabled'
      }
    }
  },

  defaultVariants: {
    shape: 'standard',
    variant: 'primary'
  }
});

const StyledPortal = styled(Select.Portal, {});

const StyledContent = styled(Select.Content, {
  backgroundColor: '$dropdown-background-color-content',
  borderRadius: '$2',
  boxShadow: '$1',
  minWidth: 'calc($13 + $13)',
  overflow: 'hidden',
  padding: '$3',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      animationName: opening
    }
  }
});

const StyledViewport = styled(Select.Viewport, {});

const StyledItemIndicator = styled(Select.ItemIndicator, {
  position: 'absolute',
  left: '0',
  width: '$6',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const StyledItem = styled(Select.Item, {
  alignItems: 'center',
  borderRadius: '$2',
  display: 'flex',
  height: '$8',
  outline: 'none',
  padding: '0 $4 0 $6',
  position: 'relative',
  transition: 'background-color 200ms linear',

  [`${Text}, .${StyledItemIndicator.className}`]: {
    transition: 'color 200ms linear',
    cursor: 'default'
  },

  '&[data-disabled]': {
    [`${Text}, .${StyledItemIndicator.className}`]: {
      color: '$dropdown-item-text-color-disabled'
    },

    pointerEvents: 'none'
  },

  '&[data-highlighted]': {
    backgroundColor: '$dropdown-item-background-hover',

    [`${Text}, .${StyledItemIndicator.className}`]: {
      color: '$text-primary-color-low-contrast'
    }
  },

  '&[data-state="checked"]': {
    backgroundColor: '$dropdown-item-background-checked',

    [`${Text}, .${StyledItemIndicator.className}`]: {
      color: '$text-primary-color-low-contrast'
    }
  }
});

const StyledItemText = styled(Select.ItemText, {});

const StyledGroup = styled(Select.Group, {});

const StyledLabel = styled(Select.Label, {
  padding: '$4 $5 0 $5'
});

const StyledSeparator = styled(Select.Separator, {
  height: 1,
  backgroundColor: '$dropdown-bordar-color-separator',
  margin: '$2'
});

const ScrollButtonCSS: CSS = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$6',
  backgroundColor: '$dropdown-background-color-content',
  color: '$dropdown-scroll-butons-color',
  cursor: 'default'
};

const StyledScrollUpButton = styled(Select.ScrollUpButton, {
  ...ScrollButtonCSS
});

const StyledScrollDownButton = styled(Select.ScrollDownButton, {
  ...ScrollButtonCSS
});

const StyledContainer = styled(Select.Root, {});

export {
  StyledContainer,
  StyledTrigger,
  StyledValue,
  StyledIcon,
  StyledPortal,
  StyledContent,
  StyledScrollUpButton,
  StyledViewport,
  StyledItem,
  StyledItemText,
  StyledItemIndicator,
  StyledGroup,
  StyledLabel,
  StyledSeparator,
  StyledScrollDownButton
};
