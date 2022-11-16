import { StyledText } from '@components/typograph/Text';
import { styled } from '@lapo';
import { Flex } from '@components/layout/Flex';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const Label = styled(StyledText, {
  transition: 'color 200ms linear'
});
Label.toString = () => `.${Label.className}`;

const StyledSwitch = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$4',
  boxShadow: '$$boxShadow',
  marginTop: '-$2',
  height: 'calc($5 + $2)',
  transition: 'transform 175ms linear, background-color 200ms linear, box-shadow 200ms linear',
  transform: 'translateX(0px)',
  width: 'calc($5 + $2)',
  willChange: 'transform',

  $$boxShadow: '$colors-switch-box-shadow-color-thumb-normal',
  $$backgroundColor: '$$backgroundNormal',

  '&:not([data-disabled])': {
    '&:hover, &:focus': {
      $$backgroundColor: '$$backgroundHover',
      $$boxShadow: '$colors-switch-box-shadow-color-thumb-hover'
    },

    '&[data-state="checked"]': {
      $$backgroundColor: '$$backgroundChecked'
    }
  },

  '&[data-disabled]': {
    $$backgroundColor: '$$backgroundDisabled',
    $$boxShadow: '0 0 0 $colors-switch-box-shadow-color-thumb',

    '&[data-state="checked"]': {
      $$backgroundColor: '$$backgroundDisabledChecked'
    }
  },

  '&[data-state="checked"]': {
    transform: 'translateX($sizes-5)'
  },

  variants: {
    variant: {
      primary: {
        $$backgroundNormal: '$colors-switch-primary-background-color-thumb-normal',
        $$backgroundHover: '$colors-switch-primary-background-color-thumb-hover',
        $$backgroundChecked: '$colors-switch-primary-background-color-thumb-checked',
        $$backgroundDisabled: '$colors-switch-primary-background-color-thumb-disabled-normal',
        $$backgroundDisabledChecked:
          '$colors-switch-primary-background-color-thumb-disabled-checked'
      },
      secondary: {
        $$backgroundNormal: '$colors-switch-secondary-background-color-thumb-normal',
        $$backgroundHover: '$colors-switch-secondary-background-color-thumb-hover',
        $$backgroundChecked: '$colors-switch-secondary-background-color-thumb-checked',
        $$backgroundDisabled: '$colors-switch-secondary-background-color-thumb-disabled-normal',
        $$backgroundDisabledChecked:
          '$colors-switch-secondary-background-color-thumb-disabled-checked'
      },
      danger: {
        $$backgroundNormal: '$colors-switch-danger-background-color-thumb-normal',
        $$backgroundHover: '$colors-switch-danger-background-color-thumb-hover',
        $$backgroundChecked: '$colors-switch-danger-background-color-thumb-checked',
        $$backgroundDisabled: '$colors-switch-danger-background-color-thumb-disabled-normal',
        $$backgroundDisabledChecked: '$colors-switch-danger-background-color-thumb-disabled-checked'
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
});
StyledSwitch.toString = () => `.${StyledSwitch.className}`;

const StyledRoot = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: '$8',
  height: '$4',
  backgroundColor: '$$backgroundRootNormal',
  borderRadius: '$4',
  position: 'relative',
  transition: 'background-color 200ms linear',

  '&:not([data-disabled])': {
    '&:hover, &:focus': {
      [`${StyledSwitch.toString()}`]: {
        backgroundColor: '$$backgroundThumbHover',
        $$boxShadow: '$colors-switch-box-shadow-color-thumb-hover'
      }
    }
  },

  '&:not([data-disabled])[data-state="checked"]': {
    backgroundColor: '$$backgroundRootChecked',
    [`${StyledSwitch.toString()}`]: {
      backgroundColor: '$$backgroundThumbChecked !important'
    }
  },

  '&[data-disabled]': {
    backgroundColor: '$$backgroundRootDisabledNormal',

    '&[data-state="checked"]': {
      backgroundColor: '$$backgroundRootDisabledChecked'
    }
  },

  variants: {
    variant: {
      primary: {
        $$backgroundRootNormal: '$colors-switch-primary-background-color-normal',
        $$backgroundRootChecked: '$colors-switch-primary-background-color-checked',
        $$backgroundRootDisabledNormal: '$colors-switch-primary-background-color-disabled-normal',
        $$backgroundRootDisabledChecked: '$colors-switch-primary-background-color-disabled-checked',
        $$backgroundThumbHover: '$colors-switch-primary-background-color-thumb-hover',
        $$backgroundThumbChecked: '$colors-switch-primary-background-color-thumb-checked'
      },
      secondary: {
        $$backgroundRootNormal: '$colors-switch-secondary-background-color-normal',
        $$backgroundRootChecked: '$colors-switch-secondary-background-color-checked',
        $$backgroundRootDisabledNormal: '$colors-switch-secondary-background-color-disabled-normal',
        $$backgroundRootDisabledChecked:
          '$colors-switch-secondary-background-color-disabled-checked',
        $$backgroundThumbHover: '$colors-switch-secondary-background-color-thumb-hover',
        $$backgroundThumbChecked: '$colors-switch-secondary-background-color-thumb-checked'
      },
      danger: {
        $$backgroundRootNormal: '$colors-switch-danger-background-color-normal',
        $$backgroundRootChecked: '$colors-switch-danger-background-color-checked',
        $$backgroundRootDisabledNormal: '$colors-switch-danger-background-color-disabled-normal',
        $$backgroundRootDisabledChecked: '$colors-switch-danger-background-color-disabled-checked',
        $$backgroundThumbHover: '$colors-switch-danger-background-color-thumb-hover',
        $$backgroundThumbChecked: '$colors-switch-danger-background-color-thumb-checked'
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
});

const Container = styled(Flex, {
  gap: '$4',
  padding: 'calc($4 - $2) 0',
  width: 'fit-content',
  flexDirection: 'row-reverse !important',

  '&:hover, &:has(*:focus)': {
    [`button:not([data-disabled])[data-state="unchecked"] +${Label.toString()}`]: {
      color: '$$colorHover'
    }
  },

  'button:not([data-disabled])': {
    '&[data-state="checked"]': {
      [`+${Label.toString()}`]: {
        color: '$$colorChecked'
      }
    },

    '&[data-state="unchecked"]': {
      [`+${Label.toString()}`]: {
        color: '$$colorUnchecked'
      }
    }
  },

  'button[data-disabled]': {
    '&[data-state="checked"]': {
      [`+${Label.toString()}`]: {
        color: '$$colorCheckedDisabled'
      }
    },

    '&[data-state="unchecked"]': {
      [`+${Label.toString()}`]: {
        color: '$$colorUncheckedDisabled'
      }
    }
  },

  variants: {
    inverted: {
      true: {
        flexDirection: 'row !important'
      }
    },
    variant: {
      primary: {
        $$colorUnchecked: '$colors-switch-primary-color-unchecked',
        $$colorHover: '$colors-switch-primary-color-hover',
        $$colorChecked: '$colors-switch-primary-color-checked',
        $$colorUncheckedDisabled: '$colors-switch-primary-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-switch-primary-color-checked-disabled'
      },
      secondary: {
        $$colorUnchecked: '$colors-switch-secondary-color-unchecked',
        $$colorHover: '$colors-switch-secondary-color-hover',
        $$colorChecked: '$colors-switch-secondary-color-checked',
        $$colorUncheckedDisabled: '$colors-switch-secondary-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-switch-secondary-color-checked-disabled'
      },
      danger: {
        $$colorUnchecked: '$colors-switch-danger-color-unchecked',
        $$colorHover: '$colors-switch-danger-color-hover',
        $$colorChecked: '$colors-switch-danger-color-checked',
        $$colorUncheckedDisabled: '$colors-switch-danger-color-unchecked-disabled',
        $$colorCheckedDisabled: '$colors-switch-danger-color-checked-disabled'
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    inverted: false
  }
});

export { StyledRoot, StyledSwitch, Container, Label };
