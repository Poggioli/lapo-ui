import { styled } from '@lapo';
import * as Separator from '@radix-ui/react-separator';

const StyledSeparator = styled(Separator.Root, {
  backgroundColor: '$separator-background-color',

  '&[data-orientation=horizontal]': {
    height: 'calc($1 / 2)',
    width: '100%'
  },

  '&[data-orientation=vertical]': {
    height: '100%',
    width: 'calc($1 / 2)'
  }
});

export { StyledSeparator };
