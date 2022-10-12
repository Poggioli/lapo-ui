import { VariantProps } from '@stitches/react';
import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Button } from './Button';

describe('Given a Button component', () => {
  const labelValue = 'any Button value';
  let element: HTMLElement;
  let rendered: RenderResult;

  const mount = ({ ...props }: VariantProps<typeof Button>) => {
    rendered = render(<Button {...props}>{labelValue}</Button>);
    element = rendered.getByText(labelValue);
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      expect(element.id).toContain('button-');
    });

    it('With Id passed by props', () => {
      mount({ id: 'buttonId123' });
      expect(element.id).toBe('buttonId123');
    });
  });
});
