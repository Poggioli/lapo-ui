import { LapoVariants } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React, { FC, useState } from 'react';
import { Slider } from './Slider';

describe('Given a <Slider /> component', () => {
  let rendered: RenderResult;

  const mount = ({ ...props }: LapoVariants<typeof Slider>) => {
    rendered = render(<Slider {...props} />);
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('value and defaultValue', () => {
    it('should set defaultValue when pass a defaultValue', () => {
      mount({
        defaultValue: [50]
      });

      const slider = rendered.getByRole('slider');
      expect(slider).toHaveAttribute('aria-valuenow', '50');
    });

    it('should set defaultValue when pass a value', () => {
      mount({
        value: [50, 80]
      });

      const slider = rendered.getAllByRole('slider');
      expect(slider[0]).toHaveAttribute('aria-valuenow', '50');
      expect(slider[1]).toHaveAttribute('aria-valuenow', '80');
    });

    it('should set defaultValue as [0] when dont pass any defaultValue and any value', () => {
      mount({});

      const slider = rendered.getByRole('slider');
      expect(slider).toHaveAttribute('aria-valuenow', '0');
    });
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      const slider = rendered.container.querySelector('[id^="slider-"]');
      expect(slider).toBeVisible();
    });

    it('With Id passed by props', () => {
      mount({ id: 'sliderId123' });
      const slider = rendered.container.querySelector('#sliderId123');
      expect(slider).toBeVisible();
    });
  });

  describe('when pass value to showRange', () => {
    it('should show if its true', () => {
      const minValue = 1000;
      const maxValue = 5000;
      mount({
        showRange: true,
        min: minValue,
        max: maxValue
      });

      const minValueLabel = rendered.getByRole('range', {
        name: `${minValue}`
      });
      const maxValueLabel = rendered.getByRole('range', {
        name: `${maxValue}`
      });

      expect(minValueLabel).toBeVisible();
      expect(maxValueLabel).toBeVisible();
    });

    it('should not show if its false', () => {
      mount({});

      const minValueLabel = rendered.queryByRole('range');
      const maxValueLabel = rendered.queryByRole('range');

      expect(minValueLabel).not.toBeInTheDocument();
      expect(maxValueLabel).not.toBeInTheDocument();
    });
  });

  it('should invert range label if inverted value is true', () => {
    mount({
      inverted: true,
      id: 'sliderId123'
    });

    expect(rendered).toMatchSnapshot();
  });

  // ToDo try to test the onValueChange
  xit('should call onValueChange when it`s not undefined', () => {
    const onValueChangeMock = jest.fn();
    mount({
      onValueChange: onValueChangeMock,
      id: 'sliderId123'
    });

    const slider = rendered.container.querySelector('#sliderId123');
    userEvent.click(slider);

    expect(onValueChangeMock).toHaveBeenCalled();
  });
});
