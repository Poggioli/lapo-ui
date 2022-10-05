import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React, { ComponentProps } from 'react';
import { Radio, RadioGroup } from '../../../components/core/Radio';

describe('Given a default Radio', () => {
  let rendered: RenderResult;
  let radio1: HTMLElement;
  let radio2: HTMLElement;
  let radio3: HTMLElement;
  const radioOptions: any[] = [
    {
      label: 'Radio 1',
      value: 'radio-1'
    },
    {
      label: 'Radio 2',
      value: 'radio-2'
    },
    {
      label: 'Radio 3',
      value: 'radio-4'
    }
  ];

  const renderComponent = ({ ...props }: Partial<ComponentProps<typeof RadioGroup>>) => {
    rendered = render(
      <RadioGroup {...props}>
        {radioOptions.map((option) => (
          <Radio key={option.value} {...option} />
        ))}
      </RadioGroup>
    );
    radio1 = rendered.getByLabelText(radioOptions[0].label);
    radio2 = rendered.getByLabelText(radioOptions[1].label);
    radio3 = rendered.getByLabelText(radioOptions[2].label);
  };

  it('should have no a11y violations', async () => {
    renderComponent({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should call onValueChange when user check the Radio', () => {
    const onValueChange = jest.fn();
    renderComponent({ onValueChange });
    userEvent.click(radio1);
    expect(onValueChange).toHaveBeenCalledTimes(1);
  });

  it('When user check the Radio should show check icon', () => {
    renderComponent({});
    userEvent.click(radio1);
    expect(radio1).toHaveAttribute('aria-checked', 'true');
    expect(radio1).toHaveAttribute('data-state', 'checked');
  });
});
