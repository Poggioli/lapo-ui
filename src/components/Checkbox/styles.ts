import { css, styled } from '@lapo';
import { Flex } from '@layout/Flex';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const CheckboxContainer = styled(Flex, {
  '& label': {
    color: '$$colorText',
    transition: 'color 200ms linear'
  },

  variants: {
    variant: {
      primary: {
        $$colorUnchecked: '$colors-checkbox-primary-color-unchecked',
        $$colorChecked: '$colors-checkbox-primary-color-checked',
        $$colorUncheckedDisabled: '$colors-checkbox-primary-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-checkbox-primary-color-checked-disabled'
      },
      secondary: {
        $$colorUnchecked: '$colors-checkbox-secondary-color-unchecked',
        $$colorChecked: '$colors-checkbox-secondary-color-checked',
        $$colorUncheckedDisabled: '$colors-checkbox-secondary-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-checkbox-secondary-color-checked-disabled'
      },
      danger: {
        $$colorUnchecked: '$colors-checkbox-danger-color-unchecked',
        $$colorChecked: '$colors-checkbox-danger-color-checked',
        $$colorUncheckedDisabled: '$colors-checkbox-danger-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-checkbox-danger-color-checked-disabled'
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
        $$colorText: '$$colorUnchecked'
      }
    },
    {
      disabled: false,
      checked: true,
      css: {
        $$colorText: '$$colorChecked'
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
        $$backgroundColorCheckedDisabled:
          '$colors-checkbox-danger-background-color-checked-disabled',
        $$borderColorCheckedDisabled: '$colors-checkbox-danger-border-color-checked-disabled'
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }

  //border-color-empty border-color-checked border-color-hover border-color-focus border-color-active border-color-disabled
  //background-color-normal background-color-checked background-color-hover background-color-focus background-color-active background-color-disabled
  //color-empty color-checked color-hover color-focus color-active color-disabled
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
  color: '$white',

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
