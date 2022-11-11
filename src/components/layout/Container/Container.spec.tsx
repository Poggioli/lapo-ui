import { LapoVariants } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Container } from './Container';

describe('Given a <Container /> component', () => {
  const labelValue = 'any Container value';
  let element: HTMLElement;
  let rendered: RenderResult;

  const mount = ({ ...props }: LapoVariants<typeof Container>) => {
    rendered = render(<Container {...props}>{labelValue}</Container>);
    element = rendered.getByText(labelValue);
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      expect(element.id).toContain('container-');
    });

    it('With Id passed by props', () => {
      mount({ id: 'containerId123' });
      expect(element.id).toBe('containerId123');
    });
  });
});
