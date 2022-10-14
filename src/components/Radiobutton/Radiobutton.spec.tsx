import { VariantProps } from '@stitches/react';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React, { FC, useState } from 'react';
import { Radiobutton } from './Radiobutton';
import { RadioGroup } from './styles';

const RadioButtonGroup: FC = ({ ...props }) => {

  const [radioSelected, setRadioSelected] = useState('');

  const radioOptions = [
    {
      label: 'Banana',
      value: 'banana'
    },
    {
      value: 'apple',
      label: 'Apple'
    },
    {
      value: 'tomato',
      label: 'Tomato'
    }
  ];

  const handleOnValueChange = (value: string) => {
    setRadioSelected(value);
  };

  return (
    <RadioGroup onValueChange={handleOnValueChange}>
      {radioOptions.map((option) => (
        <Radiobutton { ...props } key={option.value} value={option.value} checked={option.value === radioSelected}>
          {option.label}
        </Radiobutton>
      ))}
    </RadioGroup>
  );
}

describe('Given a <Radiobutton /> component', () => {
  const labelValue1 = 'Banana';
  const labelValue2 = 'Apple';
  let element1: HTMLElement;
  let element2: HTMLElement;
  let rendered: RenderResult;

  const mount = ({ ...props }: VariantProps<typeof Radiobutton>) => {
    rendered = render(<RadioButtonGroup {...props} />);
    element1 = rendered.getByLabelText(`Radiobutton ${labelValue1}`);
    element2 = rendered.getByLabelText(`Radiobutton ${labelValue2}`);
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
      mount({ id: 'radiobuttonId123' });
      expect(element1.id).toBe('radiobuttonId123');
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
