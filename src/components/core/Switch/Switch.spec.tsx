import { LapoVariants } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Switch } from './Switch';

describe('Given a <Switch /> component', () => {
  let rendered: RenderResult;

  const mount = ({ ...props }: LapoVariants<typeof Switch>, label?: string) => {
    rendered = render(<Switch {...props}>{label}</Switch>);
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should render text', () => {
    mount({}, 'swicth element');
    const element = rendered.getByText('swicth element');
    expect(element).toBeVisible();
  });

  it('should not render label', () => {
    mount({});
    const element = rendered.queryByRole('label');
    expect(element).not.toBeInTheDocument();
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
