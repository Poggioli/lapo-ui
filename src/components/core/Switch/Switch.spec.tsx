import { LapoVariants } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Switch } from './Switch';

describe('Given a <Switch /> component', () => {
  const labelValue = 'any Switch value';
  let element: HTMLElement;
  let rendered: RenderResult;

  const mount = ({ ...props }: LapoVariants<typeof Switch>) => {
    rendered = render(<Switch {...props}>{labelValue}</Switch>);
    element = rendered.getByText(labelValue);
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      const switcher = rendered.container.querySelector('[id^="switch-"]');
      expect(switcher).toBeTruthy();
    });

    it('With Id passed by props', () => {
      mount({ id: 'switchId123' });
      const switcher = rendered.container.querySelector('#switchId123');
      expect(switcher).toBeTruthy();
    });
  });
});
