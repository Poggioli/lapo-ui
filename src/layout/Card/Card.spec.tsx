import { LapoVariants } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Card } from './Card';

describe('Given a <Card /> component', () => {
  const labelValue = 'any Card value';
  let element: HTMLElement;
  let rendered: RenderResult;

  const mount = ({ ...props }: LapoVariants<typeof Card>) => {
    rendered = render(<Card {...props}>{labelValue}</Card>);
    element = rendered.getByText(labelValue);
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      expect(element.id).toContain('card-');
    });

    it('With Id passed by props', () => {
      mount({ id: 'cardId123' });
      expect(element.id).toBe('cardId123');
    });
  });
});
