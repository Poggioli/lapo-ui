import { css, keyframes, styled } from '@lapo';
import { Flex } from '@components/layout/Flex';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

const CheckAnimation = keyframes({
  from: {
    transform: 'scale(0)'
  },
  to: {
    transform: 'scale(1)'
  }
});

const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: 'block'
});

const StyledRadiobutton = styled(RadioGroupPrimitive.Item, {
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  margin: '0',
  outline: 'none',
  padding: '0',
  transition: 'border-color 200ms linear',
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
  borderRadius: '$4',
  borderWidth: '$2',
  borderStyle: 'solid',

  backgroundColor: '$transparent',
  borderColor: '$$borderColor',

  '&[data-state="unchecked"]': {
    $$borderColor: '$$borderColorUnchecked',

    '&>span': {
      backgroundColor: '$$backgroundColorUnchecked'
    },

    '&:hover, &:focus': {
      $$borderColor: '$$borderColorHover'
    },

    '&:disabled, &[disabled], &[aria-disabled=true]': {
      $$borderColor: '$$borderColorUncheckedDisabled',

      '&>span': {
        backgroundColor: '$$backgroundColorUncheckedDisabled'
      }
    }
  },

  '&[data-state="checked"]': {
    $$borderColor: '$$borderColorChecked',

    '&>span': {
      backgroundColor: '$$backgroundColorChecked'
    },

    '&:disabled, &[disabled], &[aria-disabled=true]': {
      $$borderColor: '$$borderColorCheckedDisabled',

      '&>span': {
        backgroundColor: '$$backgroundColorCheckedDisabled'
      }
    }
  },

  variants: {
    variant: {
      primary: {
        $$borderColorUnchecked: '$colors-radiobutton-primary-border-color-unchecked',
        $$borderColorUncheckedDisabled:
          '$colors-radiobutton-primary-border-color-unchecked-disabled',
        $$borderColorChecked: '$colors-radiobutton-primary-border-color-checked',
        $$borderColorCheckedDisabled: '$colors-radiobutton-primary-border-color-checked-disabled',
        $$borderColorHover: '$colors-radiobutton-primary-border-color-hover',

        $$backgroundColorUnchecked: '$colors-radiobutton-primary-background-color-unchecked',
        $$backgroundColorUncheckedDisabled:
          '$colors-radiobutton-primary-background-color-unchecked-disabled',
        $$backgroundColorChecked: '$colors-radiobutton-primary-background-color-checked',
        $$backgroundColorCheckedDisabled:
          '$colors-radiobutton-primary-background-color-checked-disabled'
      },
      secondary: {
        $$borderColorUnchecked: '$colors-radiobutton-secondary-border-color-unchecked',
        $$borderColorUncheckedDisabled:
          '$colors-radiobutton-secondary-border-color-unchecked-disabled',
        $$borderColorChecked: '$colors-radiobutton-secondary-border-color-checked',
        $$borderColorCheckedDisabled: '$colors-radiobutton-secondary-border-color-checked-disabled',
        $$borderColorHover: '$colors-radiobutton-secondary-border-color-hover',

        $$backgroundColorUnchecked: '$colors-radiobutton-secondary-background-color-unchecked',
        $$backgroundColorUncheckedDisabled:
          '$colors-radiobutton-secondary-background-color-unchecked-disabled',
        $$backgroundColorChecked: '$colors-radiobutton-secondary-background-color-checked',
        $$backgroundColorCheckedDisabled:
          '$colors-radiobutton-secondary-background-color-checked-disabled'
      },
      danger: {
        $$borderColorUnchecked: '$colors-radiobutton-danger-border-color-unchecked',
        $$borderColorUncheckedDisabled:
          '$colors-radiobutton-danger-border-color-unchecked-disabled',
        $$borderColorChecked: '$colors-radiobutton-danger-border-color-checked',
        $$borderColorCheckedDisabled: '$colors-radiobutton-danger-border-color-checked-disabled',
        $$borderColorHover: '$colors-radiobutton-danger-border-color-hover',

        $$backgroundColorUnchecked: '$colors-radiobutton-danger-background-color-unchecked',
        $$backgroundColorUncheckedDisabled:
          '$colors-radiobutton-danger-background-color-unchecked-disabled',
        $$backgroundColorChecked: '$colors-radiobutton-danger-background-color-checked',
        $$backgroundColorCheckedDisabled:
          '$colors-radiobutton-danger-background-color-checked-disabled'
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
});
StyledRadiobutton.toString = () => `.${StyledRadiobutton.className}`;

const RadiobuttonContainer = styled(Flex, {
  '& label': {
    color: '$$colorText',
    transition: 'color 200ms linear'
  },

  [`&:has(${StyledRadiobutton.toString()}:focus)`]: {
    $$colorText: '$$colorHover'
  },

  variants: {
    variant: {
      primary: {
        $$colorUnchecked: '$colors-radiobutton-primary-color-unchecked',
        $$colorChecked: '$colors-radiobutton-primary-color-checked',
        $$colorUncheckedDisabled: '$colors-radiobutton-primary-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-radiobutton-primary-color-checked-disabled',
        $$colorHover: '$colors-radiobutton-primary-color-hover'
      },
      secondary: {
        $$colorUnchecked: '$colors-radiobutton-secondary-color-unchecked',
        $$colorChecked: '$colors-radiobutton-secondary-color-checked',
        $$colorUncheckedDisabled: '$colors-radiobutton-secondary-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-radiobutton-secondary-color-checked-disabled',
        $$colorHover: '$colors-radiobutton-secondary-color-hover'
      },
      danger: {
        $$colorUnchecked: '$colors-radiobutton-danger-color-unchecked',
        $$colorChecked: '$colors-radiobutton-danger-color-checked',
        $$colorUncheckedDisabled: '$colors-radiobutton-danger-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-radiobutton-danger-color-checked-disabled',
        $$colorHover: '$colors-radiobutton-danger-color-hover'
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
          $$colorText: '$$colorHover'
        }
      }
    },
    {
      disabled: false,
      checked: true,
      css: {
        $$colorText: '$$colorChecked',
        '&:hover': {
          $$colorText: '$$colorHover'
        }
      }
    },
    {
      disabled: true,
      checked: false,
      css: {
        $$colorText: '$$colorUncheckedDisabled'
      }
    }
  ],

  defaultVariants: {
    variant: 'primary',
    checked: false,
    disabled: false
  }
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  height: '$3',
  borderRadius: '$4',
  width: '$3',
  transition: 'background-color 200ms linear',
  animation: `${CheckAnimation} 200ms`
});

const RippleStyle = css({
  height: '$8',
  width: '$8',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex !important',
  borderRadius: '$4 !important'
});

export { RadiobuttonContainer, RadioGroup, StyledRadiobutton, StyledIndicator, RippleStyle };
