import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import React, { ComponentProps } from 'react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../../components/core/Button';

describe('Given a default Button', () => {
  const label: string = 'Test Button';
  let rendered: RenderResult;

  const renderComponent = ({ ...props }: Partial<ComponentProps<typeof Button>>) => {
    rendered = render(<Button {...props}>{label}</Button>);
  };

  it('should have no a11y violations', async () => {
    renderComponent({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should return a text when call toString of component', () => {
    expect(Button.toString()).toBe('.c-kfWHpn');
  });

  it('should render span ripple where user click', async () => {
    renderComponent({});
    const button = rendered.getByText(label);
    userEvent.click(button);
    const spanRipple = rendered.container.querySelector('span');
    expect(spanRipple).toBeVisible();
  });
});
