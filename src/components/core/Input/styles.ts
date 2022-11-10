import { StyledText } from '@components/typograph/Text/Text';
import { CSS, Reset, styled } from '@lapo';
import { Box } from '@components/layout/Box';
import { body_1 } from '@tokens';

const isFilledOrFocused: CSS = {
  transform:
    'translateY(-$space-5) scale(.65) perspective(100px) translateZ(.001px) translateX(-27%)'
};

const isFilledOrFocusedGhostLine: CSS = {
  display: 'block',
  bottom: '$8',
  transform: 'scaleX(.65) translateX(-24%)'
};

const Label = styled(StyledText, {
  position: 'absolute',
  bottom: '$3',
  left: '$3',
  transform: 'perspective(100px)',
  transition: 'transform 200ms linear, color 200ms linear',
  zIndex: '$2',

  variants: {
    isFocused: {
      true: {
        ...isFilledOrFocused
      }
    },
    isFilled: {
      true: {
        ...isFilledOrFocused
      }
    }
  },

  defaultVariants: {
    isFocused: false,
    isFilled: false
  }
});

Label.toString = () => `.${Label.className}`;

const GhostLine = styled(Box, {
  border: 'none',
  borderTopStyle: 'solid',
  borderTopWidth: '$2',
  bottom: '$8',
  left: '$4',
  display: 'none',
  margin: 0,
  padding: 0,
  position: 'absolute',
  transform: 'perspective(100px)',
  marginLeft: '-3px',

  variants: {
    shape: {
      ghost: {
        borderTopColor: '$background-app'
      },
      solid: {
        borderTopColor: 'transparent'
      },
      standard: {
        borderTopColor: 'transparent'
      }
    },

    isFilled: {
      true: {
        ...isFilledOrFocusedGhostLine
      }
    }
  },

  defaultVariants: {
    shape: 'standard',
    isFilled: false
  }
});

GhostLine.toString = () => `.${GhostLine.className}`;

const Container = styled(Box, {
  position: 'relative',

  [`& input+${Label.toString()}`]: {
    color: '$$labelColorNormal'
  },

  [`& input:hover+${Label.toString()}`]: {
    color: '$$labelColorHover'
  },

  [`& input:focus+${Label.toString()}`]: {
    color: '$$labelColorFocus',

    [`&+${GhostLine.toString()}`]: {
      ...isFilledOrFocusedGhostLine
    }
  },

  [`& input:active+${Label.toString()}`]: {
    color: '$$labelColorActive',

    [`&+${GhostLine.toString()}`]: {
      ...isFilledOrFocusedGhostLine
    }
  },

  [`& input:disabled+${Label.toString()},
    & input[disabled]+${Label.toString()},
    & input[aria-disabled=true]+${Label.toString()}`]: {
    color: '$$labelColorDisabled'
  },

  variants: {
    shape: {
      ghost: {
        paddingTop: 'calc($3 - $1)',

        [`& input+${Label.toString()}`]: {
          left: '$4'
        },

        $$labelColorNormal: '$$labelColorGhostNormal',
        $$labelColorHover: '$$labelColorGhostHover',
        $$labelColorFocus: '$$labelColorGhostFocus',
        $$labelColorActive: '$$labelColorGhostActive',
        $$labelColorDisabled: '$$labelColorGhostDisabled'
      },
      solid: {
        $$labelColorNormal: '$$labelColorSolidNormal',
        $$labelColorHover: '$$labelColorSolidHover',
        $$labelColorFocus: '$$labelColorSolidFocus',
        $$labelColorActive: '$$labelColorSolidActive',
        $$labelColorDisabled: '$$labelColorSolidDisabled'
      },
      standard: {
        $$labelColorNormal: '$$labelColorStandardNormal',
        $$labelColorHover: '$$labelColorStandardHover',
        $$labelColorFocus: '$$labelColorStandardFocus',
        $$labelColorActive: '$$labelColorStandardActive',
        $$labelColorDisabled: '$$labelColorStandardDisabled'
      }
    },

    variant: {
      primary: {
        $$labelColorStandardNormal: '$colors-input-primary-standard-label-normal',
        $$labelColorStandardHover: '$colors-input-primary-standard-label-hover',
        $$labelColorStandardFocus: '$colors-input-primary-standard-label-focus',
        $$labelColorStandardActive: '$colors-input-primary-standard-label-active',
        $$labelColorStandardDisabled: '$colors-input-primary-standard-label-disabled',

        $$labelColorSolidNormal: '$colors-input-primary-solid-label-normal',
        $$labelColorSolidHover: '$colors-input-primary-solid-label-hover',
        $$labelColorSolidFocus: '$colors-input-primary-solid-label-focus',
        $$labelColorSolidActive: '$colors-input-primary-solid-label-active',
        $$labelColorSolidDisabled: '$colors-input-primary-solid-label-disabled',

        $$labelColorGhostNormal: '$colors-input-primary-ghost-label-normal',
        $$labelColorGhostHover: '$colors-input-primary-ghost-label-hover',
        $$labelColorGhostFocus: '$colors-input-primary-ghost-label-focus',
        $$labelColorGhostActive: '$colors-input-primary-ghost-label-active',
        $$labelColorGhostDisabled: '$colors-input-primary-ghost-label-disabled'
      },
      danger: {
        $$labelColorStandardNormal: '$colors-input-danger-standard-label-normal',
        $$labelColorStandardHover: '$colors-input-danger-standard-label-hover',
        $$labelColorStandardFocus: '$colors-input-danger-standard-label-focus',
        $$labelColorStandardActive: '$colors-input-danger-standard-label-active',
        $$labelColorStandardDisabled: '$colors-input-danger-standard-label-disabled',

        $$labelColorSolidNormal: '$colors-input-danger-solid-label-normal',
        $$labelColorSolidHover: '$colors-input-danger-solid-label-hover',
        $$labelColorSolidFocus: '$colors-input-danger-solid-label-focus',
        $$labelColorSolidActive: '$colors-input-danger-solid-label-active',
        $$labelColorSolidDisabled: '$colors-input-danger-solid-label-disabled',

        $$labelColorGhostNormal: '$colors-input-danger-ghost-label-normal',
        $$labelColorGhostHover: '$colors-input-danger-ghost-label-hover',
        $$labelColorGhostFocus: '$colors-input-danger-ghost-label-focus',
        $$labelColorGhostActive: '$colors-input-danger-ghost-label-active',
        $$labelColorGhostDisabled: '$colors-input-danger-ghost-label-disabled'
      }
    }
  },

  defaultVariants: {
    shape: 'standard',
    variant: 'primary'
  }
});

const DEFAULT_TAG = 'input';
const StyledInput = styled(DEFAULT_TAG, {
  ...Reset,
  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  border: 'none',
  borderBottomStyle: 'solid',
  borderBottomWidth: '$1',
  borderColor: '$$borderColor',
  color: '$$color',
  display: 'inline-flex',
  padding: '$4 $4 calc($3 - 1px) $3',
  transition: `background-color 200ms linear,
    border-width 200ms linear,
    padding-bottom 200ms linear,
    border-color 200ms linear,
    color 200ms linear`,
  width: '100%',
  ...body_1,

  $$borderColor: '$$borderColorNormal',
  $$backgroundColor: '$$backgroundColorNormal',
  $$color: '$$colorNormal',

  '&:hover': {
    $$backgroundColor: '$$backgroundColorHover',
    $$borderColor: '$$borderColorHover'
  },

  '&:focus': {
    $$backgroundColor: '$$backgroundColorFocus',
    $$borderColor: '$$borderColorFocus'
  },

  '&:active': {
    $$backgroundColor: '$$backgroundColorActive',
    $$borderColor: '$$borderColorActive'
  },

  '&:disabled, &[disabled], &[aria-disabled=true]': {
    $$backgroundColor: '$$backgroundColorDisabled',
    $$borderColor: '$$borderColorDisabled',
    $$color: '$$colorDisabled'
  },

  variants: {
    shape: {
      ghost: {
        borderRadius: '$2',
        borderStyle: 'solid',
        borderWidth: '$1',
        padding: 'calc($3 + $1 - 2px) calc($4 - 1px)',
        transition:
          'background-color 200ms linear, border-width 0ms linear, padding-bottom 0ms linear, border-color 200ms linear',

        '&:hover:enabled, &:focus:enabled': {
          borderWidth: '$2',
          padding: 'calc($3 + $1 - 3px) calc($4 - 2px)'
        },

        $$backgroundColorNormal: '$$backgroundColorGhostNormal',
        $$backgroundColorHover: '$$backgroundColorGhostHover',
        $$backgroundColorFocus: '$$backgroundColorGhostFocus',
        $$backgroundColorActive: '$$backgroundColorGhostActive',
        $$backgroundColorDisabled: '$$backgroundColorGhostDisabled',
        $$borderColorNormal: '$$borderColorGhostNormal',
        $$borderColorHover: '$$borderColorGhostHover',
        $$borderColorFocus: '$$borderColorGhostFocus',
        $$borderColorActive: '$$borderColorGhostActive',
        $$borderColorDisabled: '$$borderColorGhostDisabled',
        $$colorDisabled: '$$colorGhostDisabled',
        $$colorNormal: '$$colorGhostNormal'
      },
      solid: {
        borderRadius: '$2 $2 0 0',

        '&:hover:enabled, &:focus:enabled': {
          borderBottomWidth: '$2',
          paddingBottom: 'calc($3 - 2px)'
        },

        $$backgroundColorNormal: '$$backgroundColorSolidNormal',
        $$backgroundColorHover: '$$backgroundColorSolidHover',
        $$backgroundColorFocus: '$$backgroundColorSolidFocus',
        $$backgroundColorActive: '$$backgroundColorSolidActive',
        $$backgroundColorDisabled: '$$backgroundColorSolidDisabled',
        $$borderColorNormal: '$$borderColorSolidNormal',
        $$borderColorHover: '$$borderColorSolidHover',
        $$borderColorFocus: '$$borderColorSolidFocus',
        $$borderColorActive: '$$borderColorSolidActive',
        $$borderColorDisabled: '$$borderColorSolidDisabled',
        $$colorDisabled: '$$colorSolidDisabled',
        $$colorNormal: '$$colorSolidNormal'
      },

      standard: {
        borderRadius: '0',

        '&:hover:enabled, &:focus:enabled': {
          borderWidth: '$2',
          paddingBottom: 'calc($3 - 2px)'
        },

        $$backgroundColorNormal: '$$backgroundColorStandardNormal',
        $$backgroundColorHover: '$$backgroundColorStandardHover',
        $$backgroundColorFocus: '$$backgroundColorStandardFocus',
        $$backgroundColorActive: '$$backgroundColorStandardActive',
        $$backgroundColorDisabled: '$$backgroundColorStandardDisabled',
        $$borderColorNormal: '$$borderColorStandardNormal',
        $$borderColorHover: '$$borderColorStandardHover',
        $$borderColorFocus: '$$borderColorStandardFocus',
        $$borderColorActive: '$$borderColorStandardActive',
        $$borderColorDisabled: '$$borderColorStandardDisabled',
        $$colorDisabled: '$$colorStandardDisabled',
        $$colorNormal: '$$colorStandardNormal'
      }
    },

    filled: {
      true: {}
    },

    variant: {
      primary: {
        $$backgroundColorStandardNormal: '$colors-input-primary-standard-background-color-normal',
        $$backgroundColorStandardHover: '$colors-input-primary-standard-background-color-hover',
        $$backgroundColorStandardFocus: '$colors-input-primary-standard-background-color-focus',
        $$backgroundColorStandardActive: '$colors-input-primary-standard-background-color-active',
        $$backgroundColorStandardDisabled:
          '$colors-input-primary-standard-background-color-disabled',
        $$borderColorStandardNormal: '$colors-input-primary-standard-border-color-normal',
        $$borderColorStandardHover: '$colors-input-primary-standard-border-color-hover',
        $$borderColorStandardFocus: '$colors-input-primary-standard-border-color-focus',
        $$borderColorStandardActive: '$colors-input-primary-standard-border-color-active',
        $$borderColorStandardDisabled: '$colors-input-primary-standard-border-color-disabled',
        $$colorStandardDisabled: '$colors-input-primary-standard-value-disabled',
        $$colorStandardNormal: '$colors-input-primary-standard-value-normal',

        $$backgroundColorSolidNormal: '$colors-input-primary-solid-background-color-normal',
        $$backgroundColorSolidHover: '$colors-input-primary-solid-background-color-hover',
        $$backgroundColorSolidFocus: '$colors-input-primary-solid-background-color-focus',
        $$backgroundColorSolidActive: '$colors-input-primary-solid-background-color-active',
        $$backgroundColorSolidDisabled: '$colors-input-primary-solid-background-color-disabled',
        $$borderColorSolidNormal: '$colors-input-primary-solid-border-color-normal',
        $$borderColorSolidHover: '$colors-input-primary-solid-border-color-hover',
        $$borderColorSolidFocus: '$colors-input-primary-solid-border-color-focus',
        $$borderColorSolidActive: '$colors-input-primary-solid-border-color-active',
        $$borderColorSolidDisabled: '$colors-input-primary-solid-border-color-disabled',
        $$colorSolidDisabled: '$colors-input-primary-solid-value-disabled',
        $$colorSolidNormal: '$colors-input-primary-solid-value-normal',

        $$backgroundColorGhostNormal: '$colors-input-primary-ghost-background-color-normal',
        $$backgroundColorGhostHover: '$colors-input-primary-ghost-background-color-hover',
        $$backgroundColorGhostFocus: '$colors-input-primary-ghost-background-color-focus',
        $$backgroundColorGhostActive: '$colors-input-primary-ghost-background-color-active',
        $$backgroundColorGhostDisabled: '$colors-input-primary-ghost-background-color-disabled',
        $$borderColorGhostNormal: '$colors-input-primary-ghost-border-color-normal',
        $$borderColorGhostHover: '$colors-input-primary-ghost-border-color-hover',
        $$borderColorGhostFocus: '$colors-input-primary-ghost-border-color-focus',
        $$borderColorGhostActive: '$colors-input-primary-ghost-border-color-active',
        $$borderColorGhostDisabled: '$colors-input-primary-ghost-border-color-disabled',
        $$colorGhostDisabled: '$colors-input-primary-ghost-value-disabled',
        $$colorGhostNormal: '$colors-input-primary-ghost-value-normal'
      },
      danger: {
        $$backgroundColorStandardNormal: '$colors-input-danger-standard-background-color-normal',
        $$backgroundColorStandardHover: '$colors-input-danger-standard-background-color-hover',
        $$backgroundColorStandardFocus: '$colors-input-danger-standard-background-color-focus',
        $$backgroundColorStandardActive: '$colors-input-danger-standard-background-color-active',
        $$backgroundColorStandardDisabled:
          '$colors-input-danger-standard-background-color-disabled',
        $$borderColorStandardNormal: '$colors-input-danger-standard-border-color-normal',
        $$borderColorStandardHover: '$colors-input-danger-standard-border-color-hover',
        $$borderColorStandardFocus: '$colors-input-danger-standard-border-color-focus',
        $$borderColorStandardActive: '$colors-input-danger-standard-border-color-active',
        $$borderColorStandardDisabled: '$colors-input-danger-standard-border-color-disabled',
        $$colorStandardDisabled: '$colors-input-danger-standard-value-disabled',
        $$colorStandardNormal: '$colors-input-danger-standard-value-normal',

        $$backgroundColorSolidNormal: '$colors-input-danger-solid-background-color-normal',
        $$backgroundColorSolidHover: '$colors-input-danger-solid-background-color-hover',
        $$backgroundColorSolidFocus: '$colors-input-danger-solid-background-color-focus',
        $$backgroundColorSolidActive: '$colors-input-danger-solid-background-color-active',
        $$backgroundColorSolidDisabled: '$colors-input-danger-solid-background-color-disabled',
        $$borderColorSolidNormal: '$colors-input-danger-solid-border-color-normal',
        $$borderColorSolidHover: '$colors-input-danger-solid-border-color-hover',
        $$borderColorSolidFocus: '$colors-input-danger-solid-border-color-focus',
        $$borderColorSolidActive: '$colors-input-danger-solid-border-color-active',
        $$borderColorSolidDisabled: '$colors-input-danger-solid-border-color-disabled',
        $$colorSolidDisabled: '$colors-input-danger-solid-value-disabled',
        $$colorSolidNormal: '$colors-input-danger-solid-value-normal',

        $$backgroundColorGhostNormal: '$colors-input-danger-ghost-background-color-normal',
        $$backgroundColorGhostHover: '$colors-input-danger-ghost-background-color-hover',
        $$backgroundColorGhostFocus: '$colors-input-danger-ghost-background-color-focus',
        $$backgroundColorGhostActive: '$colors-input-danger-ghost-background-color-active',
        $$backgroundColorGhostDisabled: '$colors-input-danger-ghost-background-color-disabled',
        $$borderColorGhostNormal: '$colors-input-danger-ghost-border-color-normal',
        $$borderColorGhostHover: '$colors-input-danger-ghost-border-color-hover',
        $$borderColorGhostFocus: '$colors-input-danger-ghost-border-color-focus',
        $$borderColorGhostActive: '$colors-input-danger-ghost-border-color-active',
        $$borderColorGhostDisabled: '$colors-input-danger-ghost-border-color-disabled',
        $$colorGhostDisabled: '$colors-input-danger-ghost-value-disabled',
        $$colorGhostNormal: '$colors-input-danger-ghost-value-normal'
      }
    }
  },

  defaultVariants: {
    shape: 'standard',
    variant: 'primary',
    filled: false
  }
});

export { Label, Container, StyledInput, GhostLine };
