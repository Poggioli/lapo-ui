import { styled } from '@lapo';
import { Box } from '@components/layout/Box';

const StyledCard = styled(Box, {
  backgroundColor: '$card-background-color-normal',
  borderColor: '$card-border-color-normal',
  borderStyle: 'solid',
  transition: 'border-color 200ms linear, background-color 200ms linear',

  variants: {
    variant: {
      standard: {
        borderWidth: '$1'
      },

      interactive: {
        borderWidth: '$1',

        '&:hover': {
          backgroundColor: '$card-background-color-hover',
          borderColor: '$card-border-color-hover'
        }
      }
    },

    borderFormat: {
      none: {
        borderRadius: 0
      },

      medium: {
        borderRadius: '$2'
      },

      soft: {
        borderRadius: '$3'
      }
    },

    isPadded: {
      true: {
        padding: '$4',

        '@medium': {
          padding: '$6'
        }
      }
    }
  },

  defaultVariants: {
    variant: 'standard',
    borderFormat: 'soft',
    isPadded: 'true'
  }
});

export { StyledCard };
