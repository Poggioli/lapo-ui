import { css, styled } from '@lapo';
import { Flex } from '@layout/Flex';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const CheckboxContainer = styled(Flex, {
  '& label': {
    color: '$$colorText',
    transition: 'color 200ms linear',
  },

  variants: {
    variant: {
      primary: {
        $$colorUnchecked: '$colors-checkbox-primary-color-unchecked',
        $$colorChecked: '$colors-checkbox-primary-color-checked',
        $$colorUncheckedDisabled: '$colors-checkbox-primary-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-checkbox-primary-color-checked-disabled',
        $$colorHover: '$colors-checkbox-primary-color-hover'
      },
      secondary: {
        $$colorUnchecked: '$colors-checkbox-secondary-color-unchecked',
        $$colorChecked: '$colors-checkbox-secondary-color-checked',
        $$colorUncheckedDisabled: '$colors-checkbox-secondary-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-checkbox-secondary-color-checked-disabled',
        $$colorHover: '$colors-checkbox-secondary-color-hover'
      },
      danger: {
        $$colorUnchecked: '$colors-checkbox-danger-color-unchecked',
        $$colorChecked: '$colors-checkbox-danger-color-checked',
        $$colorUncheckedDisabled: '$colors-checkbox-danger-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-checkbox-danger-color-checked-disabled',
        $$colorHover: '$colors-checkbox-danger-color-hover'
      }
    },
    checked: {
      true: {}
    },
    disabled: {
      true: {}
    }
  },

  compoundVariants: [
    {
      disabled: true,
      checked: true,
      css: {
        $$colorText: '$$colorCheckedDisabled'
      }
    },
    {
      disabled: false,
      checked: false,
      css: {
        $$colorText: '$$colorUnchecked',
        '&:hover': {
          $$colorText: '$$colorHover',
        },
      }
    },
    {
      disabled: false,
      checked: true,
      css: {
        $$colorText: '$$colorChecked',
        '&:hover': {
          $$colorText: '$$colorHover',
        },
      }
    },
    {
      disabled: true,
      checked: false,
      css: {
        $$colorText: '$$colorUncheckedDisabled'
      }
    }
  ]
});

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  margin: '0',
  outline: 'none',
  padding: '0',
  transition: `background-color 200ms linear,
                border-color 200ms linear`,
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  border: 'none',

  height: '$4',
  width: '$4',
  borderRadius: '$1',
  borderWidth: '$2',
  borderStyle: 'solid',

  backgroundColor: '$$backgroundColor',
  borderColor: '$$borderColor',

  '&[data-state="unchecked"]': {
    $$backgroundColor: '$$backgroundColorUnchecked',
    $$borderColor: '$$borderColorUnchecked',

    '&:hover': {
      $$borderColor: '$$borderColorHover',
    },

    '&:disabled, &[disabled], &[aria-disabled=true]': {
      $$backgroundColor: '$$backgroundColorUncheckedDisabled',
      $$borderColor: '$$borderColorUncheckedDisabled'
    }
  },

  '&[data-state="checked"], &[data-state="indeterminate"]': {
    $$backgroundColor: '$$backgroundColorChecked',
    $$borderColor: '$$borderColorChecked',

    '&:disabled, &[disabled], &[aria-disabled=true]': {
      $$backgroundColor: '$$backgroundColorCheckedDisabled',
      $$borderColor: '$$borderColorCheckedDisabled'
    }
  },

  variants: {
    variant: {
      primary: {
        $$backgroundColorUnchecked: '$colors-checkbox-primary-background-color-unchecked',
        $$borderColorUnchecked: '$colors-checkbox-primary-border-color-unchecked',
        $$backgroundColorUncheckedDisabled:
          '$colors-checkbox-primary-background-color-unchecked-disabled',
        $$borderColorUncheckedDisabled: '$colors-checkbox-primary-border-color-unchecked-disabled',
        $$backgroundColorChecked: '$colors-checkbox-primary-background-color-checked',
        $$borderColorChecked: '$colors-checkbox-primary-border-color-checked',
        $$borderColorHover: '$colors-checkbox-primary-border-color-hover',
        $$backgroundColorCheckedDisabled:
          '$colors-checkbox-primary-background-color-checked-disabled',
        $$borderColorCheckedDisabled: '$colors-checkbox-primary-border-color-checked-disabled'
      },
      secondary: {
        $$backgroundColorUnchecked: '$colors-checkbox-secondary-background-color-unchecked',
        $$borderColorUnchecked: '$colors-checkbox-secondary-border-color-unchecked',
        $$backgroundColorUncheckedDisabled:
          '$colors-checkbox-secondary-background-color-unchecked-disabled',
        $$borderColorUncheckedDisabled:
          '$colors-checkbox-secondary-border-color-unchecked-disabled',
        $$backgroundColorChecked: '$colors-checkbox-secondary-background-color-checked',
        $$borderColorChecked: '$colors-checkbox-secondary-border-color-checked',
        $$borderColorHover: '$colors-checkbox-secondary-border-color-hover',
        $$backgroundColorCheckedDisabled:
          '$colors-checkbox-secondary-background-color-checked-disabled',
        $$borderColorCheckedDisabled: '$colors-checkbox-secondary-border-color-checked-disabled'
      },
      danger: {
        $$backgroundColorUnchecked: '$colors-checkbox-danger-background-color-unchecked',
        $$borderColorUnchecked: '$colors-checkbox-danger-border-color-unchecked',
        $$backgroundColorUncheckedDisabled:
          '$colors-checkbox-danger-background-color-unchecked-disabled',
        $$borderColorUncheckedDisabled: '$colors-checkbox-danger-border-color-unchecked-disabled',
        $$backgroundColorChecked: '$colors-checkbox-danger-background-color-checked',
        $$borderColorChecked: '$colors-checkbox-danger-border-color-checked',
        $$borderColorHover: '$colors-checkbox-danger-border-color-hover',
        $$backgroundColorCheckedDisabled:
          '$colors-checkbox-danger-background-color-checked-disabled',
        $$borderColorCheckedDisabled: '$colors-checkbox-danger-border-color-checked-disabled'
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
  color: '$background-app',

  '>svg': {
    width: '100%',
    height: '100%'
  }
});

const RippleStyle = css({
  height: '$8',
  width: '$8',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex !important',
  borderRadius: '$4 !important'
});

export { CheckboxContainer, StyledCheckbox, StyledIndicator, RippleStyle };
