import { LapoVariants } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React, { FC, useState } from 'react';
import { Radiobutton } from './Radiobutton';
import { RadioGroup } from './styles';

const RadioButtonGroup: FC<any> = ({ useCustomId, ...props }) => {

  const radioOptions = [
    {
      label: 'Banana',
      value: 'banana',
      id: useCustomId ? 'radio-1' : undefined
    },
    {
      value: 'apple',
      label: 'Apple',
      id: useCustomId ? 'radio-2' : undefined
    },
    {
      value: 'tomato',
      label: 'Tomato',
      id: useCustomId ? 'radio-3' : undefined
    }
  ];

  return (
    <RadioGroup>
      {radioOptions.map((option) => (
        <Radiobutton
          key={option.value}
          value={option.value}
          aria-label={option.label}
          id={option.id}
        >
          {option.label}
        </Radiobutton>
      ))}
    </RadioGroup>
  );
};

describe('Given a <Radiobutton /> component', () => {
  const labelValue1 = 'Banana';
  const labelValue2 = 'Apple';
  let element1: HTMLElement;
  let element2: HTMLElement;
  let rendered: RenderResult;

  const mount = ({ ...props }: any) => {
    rendered = render(<RadioButtonGroup { ...props } />);
    element1 = rendered.getByLabelText(labelValue1);
    element2 = rendered.getByLabelText(labelValue2);
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      expect(element1.id).toContain('radiobutton-');
    });

    it('With Id passed by props', () => {
      mount({ useCustomId: true });
      expect(element1.id).toBe('radio-1');
    });
  });

  describe('When user check the component', () => {
    beforeEach(() => {
      mount({});
      userEvent.click(element1);
    });

    it('should set data-state to "checked"', () => {
      expect(element1).toHaveAttribute('data-state', 'checked');
    });

    it('when user uncheck, should set data-state to "unchecked"', () => {
      userEvent.click(element2);
      expect(element1).toHaveAttribute('data-state', 'unchecked');
      expect(element2).toHaveAttribute('data-state', 'checked');
    });
  });
});
