import { LapoVariants } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Separator } from './Separator';

describe('Given a <Separator /> component', () => {
  let rendered: RenderResult;

  const mount = ({ ...props }: LapoVariants<typeof Separator>) => {
    rendered = render(<Separator {...props} />);
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      const separator = rendered.container.querySelector('[id^="separator-"]');
      expect(separator).toBeTruthy()
    });

    it('With Id passed by props', () => {
      mount({ id: 'separatorId123' });
      const separator = rendered.container.querySelector('#separatorId123');
      expect(separator).toBeTruthy()
    });
  });
});
