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
    rendered = render(<Checkbox {...props}>{labelValue}</Checkbox>);
    element = rendered.getByLabelText(`Checkbox ${labelValue}`);
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

  describe('Given a onCheckedChange function', () => {
    describe('When user check the component', () => {
      const onCheckedChange = jest.fn();

      beforeEach(() => {
        mount({ onCheckedChange });
        userEvent.click(element);
      });

      it('should call "onCheckedChange" with the right value', () => {
        expect(onCheckedChange).toHaveBeenCalledTimes(1);
        expect(onCheckedChange).toHaveBeenCalledWith(true);
      });

      it('should set data-state to "checked"', () => {
        expect(element).toHaveAttribute('data-state', 'checked');
      });

      it('when user uncheck, should set data-state to "unchecked"', () => {
        userEvent.click(element);
        expect(element).toHaveAttribute('data-state', 'unchecked');
      });
    });
  });

  describe('Not given a onCheckedChange function', () => {
    describe('When user check the component', () => {
      beforeEach(() => {
        mount({});
        userEvent.click(element);
      });

      it('should set data-state to "checked"', () => {
        expect(element).toHaveAttribute('data-state', 'checked');
      });

      it('when user uncheck, should set data-state to "unchecked"', () => {
        userEvent.click(element);
        expect(element).toHaveAttribute('data-state', 'unchecked');
      });
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
