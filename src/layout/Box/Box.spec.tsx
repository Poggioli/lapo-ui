import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { Box } from './Box';

describe('Given a box', () => {
  it('should render a div', () => {
    const rendered: RenderResult = render(<Box />);
    expect(rendered.container).toBeTruthy();
    expect(rendered.container.querySelector('div')).toBeVisible();
  })
})
