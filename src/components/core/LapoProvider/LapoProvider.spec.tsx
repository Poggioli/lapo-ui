import { blueDarkTheme, createTheme } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { LapoProvider } from './LapoProvider';

describe('Given a <LapoProvider /> component', () => {
  const labelValue = 'Lapo provider';
  let rendered: RenderResult;

  const mount = (theme: ReturnType<typeof createTheme>) => {
    rendered = render(
      <LapoProvider theme={theme}>
        <h1>{labelValue}</h1>
      </LapoProvider>
    );
  };

  it('should add class name to html tag', () => {
    mount(blueDarkTheme);
    const container = document.querySelector(`.${blueDarkTheme.className}`);
    expect(container).toBeTruthy();
  });
});
