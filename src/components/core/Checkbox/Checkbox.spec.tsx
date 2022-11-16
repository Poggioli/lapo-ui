import { VariantProps } from '@stitches/react';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import { Checkbox } from './Checkbox';

describe('Given a <Checkbox /> component', () => {
  const labelValue = 'any Checkbox value';
  let element: HTMLElement;
  let rendered: RenderResult;

  const mount = ({ ...props }: VariantProps<typeof Checkbox>) => {
    rendered = render(<Checkbox {...props} aria-label='Checkbox'>{labelValue}</Checkbox>);
    element = rendered.getByRole('checkbox');
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      expect(element.id).toContain('checkbox-');
    });

    it('With Id passed by props', () => {
      mount({ id: 'checkboxId123' });
      expect(element.id).toBe('checkboxId123');
    });
  });

  describe('Given a checked value', () => {
    it('when pass checked as false, should set data-state to "unchecked"', () => {
      mount({ checked: false });
      expect(element).toHaveAttribute('data-state', 'unchecked');
    });

    it('when pass checked as true, should set data-state to "checked"', () => {
      mount({ checked: true });
      expect(element).toHaveAttribute('data-state', 'checked');
    });

    it('when pass checked as indeterminate, should set data-state to "indeterminate"', () => {
      mount({ checked: 'indeterminate' });
      expect(element).toHaveAttribute('data-state', 'indeterminate');
    });
  });
});
