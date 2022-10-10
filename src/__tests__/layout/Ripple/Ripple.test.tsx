import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React, { ComponentProps } from 'react';
import { act } from 'react-dom/test-utils';
import { Ripple } from '../../../components/layout/Ripple';

describe('Given a Ripple', () => {
  const label: string = 'Test Ripple';
  let rendered: RenderResult;

  const renderComponent = async ({ ...props }: ComponentProps<typeof Ripple>) => {
    await act(async () => {
      rendered = render(<Ripple {...props}>{label}</Ripple>);
    });
  };

  it('should have no a11y violations', async () => {
    renderComponent({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should render span ripple in center', async () => {
    renderComponent({ center: true });
    const button = rendered.getByText(label);
    userEvent.click(button);
    const spanRipple = rendered.container.querySelector('span');
    expect(spanRipple).toBeVisible();
  });

  it('should render span ripple where user click', async () => {
    renderComponent({});
    const button = rendered.getByText(label);
    userEvent.click(button);
    const spanRipple = rendered.container.querySelector('span');
    expect(spanRipple).toBeVisible();
  });

  it('should render span ripple where user click', async () => {
    jest.useFakeTimers();
    renderComponent({});
    const button = rendered.getByText(label);
    userEvent.click(button);
    let spanRipple: null | HTMLElement = rendered.container.querySelector('span');
    expect(spanRipple).toBeVisible();
    jest.runAllTimers();
    spanRipple = rendered.queryByRole('span');
    expect(spanRipple).toBeNull();
  });
});
