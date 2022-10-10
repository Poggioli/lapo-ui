import { LapoVariants } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { Flex } from './Flex';

describe('Given a flex', () => {
  let rendered: RenderResult;
  let flexComponent: HTMLElement;

  const mount = ({ ...props }: LapoVariants<typeof Flex>) => {
    rendered = render(<Flex {...props} />);
    flexComponent = rendered.container;
  };

  it('should render a div', () => {
    mount({});
    expect(flexComponent).toBeVisible();
  });

  it('should render a div with custom variants', () => {
    mount({
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'flex-end'
    });
    expect(flexComponent).toBeTruthy();
  });

  it('should render a div with default properties', () => {
    mount({});
    expect(flexComponent).toBeTruthy();
  });
});
