import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React, { FocusEvent } from 'react';
import { act } from 'react-dom/test-utils';
import { Input } from './Input';

describe('Given a <Input /> component', () => {
  const labelValue = 'E-mail';
  let element: HTMLElement;
  let rendered: RenderResult;

  type InputTest = {
    id?: string;
    placeholder?: string;
    label?: string;
    onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
  };

  const mount = ({ id, placeholder, label = labelValue, onFocus, onBlur }: InputTest) => {
    rendered = render(
      <Input id={id} placeholder={placeholder} label={label} onFocus={onFocus} onBlur={onBlur} />
    );
    element = rendered.getByRole('textbox');
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      expect(element.id).toContain('input-');
    });

    it('With Id passed by props', () => {
      mount({ id: 'inputId123' });
      expect(element.id).toBe('inputId123');
    });
  });

  describe('Placeholder', () => {
    it('Should show the placeholder when user focus in input', async () => {
      jest.useFakeTimers();
      const placeholder = 'Ex: example@email.com';
      mount({ placeholder: placeholder });
      userEvent.click(element);
      act(() => {
        jest.advanceTimersByTime(150);
      });
      const elementByPlaceholder = rendered.getByPlaceholderText(placeholder);
      expect(elementByPlaceholder).toBeVisible();
    });

    it('Should hide the placeholder when user blur the input', () => {
      jest.useFakeTimers();
      const placeholder = 'Ex: example@email.com';
      mount({ placeholder: placeholder });
      userEvent.click(element);
      act(() => {
        jest.advanceTimersByTime(150);
      });
      userEvent.click(document.body);
      const elementByPlaceholder = rendered.queryByPlaceholderText(placeholder);
      expect(elementByPlaceholder).toBeNull();
    });
  });

  describe('onFocus', () => {
    it('Should call onFocus when it`s not undefined', () => {
      jest.useFakeTimers();
      const onFocus = jest.fn();
      mount({ onFocus });
      userEvent.click(element);
      act(() => {
        jest.advanceTimersByTime(150);
      });
      expect(onFocus).toHaveBeenCalled();
    });
  });

  describe('onBlur', () => {
    it('Should call onBlur when it`s not undefined', () => {
      jest.useFakeTimers();
      const onBlur = jest.fn();
      mount({ onBlur });
      userEvent.click(element);
      act(() => {
        jest.advanceTimersByTime(150);
      });
      userEvent.click(document.body);
      expect(onBlur).toHaveBeenCalled();
    });
  });
});
