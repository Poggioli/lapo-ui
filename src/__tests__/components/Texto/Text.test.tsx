import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import React, { ComponentProps } from 'react';
import { Text } from '../../../components/core/Text';

describe('Given a default Text', () => {
  const label: string = 'Test Text';
  let rendered: RenderResult;

  const renderComponent = ({ ...props }: Partial<ComponentProps<typeof Text>>) => {
    rendered = render(<Text {...props}>{label}</Text>);
  };

  afterEach(async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should have no a11y violations for heading 1', async () => {
    renderComponent({ variant: 'heading1' });
  });

  it('should have no a11y violations for heading 2', async () => {
    renderComponent({ variant: 'heading2' });
  });

  it('should have no a11y violations for heading 3', async () => {
    renderComponent({ variant: 'heading3' });
  });

  it('should have no a11y violations for heading 4', async () => {
    renderComponent({ variant: 'heading4' });
  });

  it('should have no a11y violations for heading 5', async () => {
    renderComponent({ variant: 'heading5' });
  });

  it('should have no a11y violations for heading 6', async () => {
    renderComponent({ variant: 'heading6' });
  });

  it('should have no a11y violations for lead 1', async () => {
    renderComponent({ variant: 'lead1' });
  });

  it('should have no a11y violations for lead 2', async () => {
    renderComponent({ variant: 'lead2' });
  });

  it('should have no a11y violations for body 1', async () => {
    renderComponent({ variant: 'body1' });
  });

  it('should have no a11y violations for body 2', async () => {
    renderComponent({ variant: 'body2' });
  });

  it('should have no a11y violations for auxiliary', async () => {
    renderComponent({ variant: 'auxiliary' });
  });

  it('should have no a11y violations for caption', async () => {
    renderComponent({ variant: 'caption' });
  });
});
