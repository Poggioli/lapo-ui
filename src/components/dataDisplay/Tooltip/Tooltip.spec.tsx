import { Text } from '@components/typograph/Text';
import { LapoVariants } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import { Tooltip } from './Tooltip';

describe(`Given a <Tooltip /> component`, () => {
  const labelValue = 'Tooltip';
  const tooltipValue = 'Tooltip content';
  let element: HTMLElement;
  let rendered: RenderResult;

  const mount = () => {
    rendered = render(
      <Tooltip content={tooltipValue}>
        <Text>{labelValue}</Text>
      </Tooltip>
    );
    element = rendered.getByText(labelValue);
  };

  it('should have no a11y violations', async () => {
    mount();
    userEvent.hover(element);
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});
