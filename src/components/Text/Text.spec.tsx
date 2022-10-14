import { VariantProps } from '@stitches/react';
import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Text } from './Text';

describe('Given a Text component', () => {
  const labelValue = 'any text value';
  let textElement: HTMLElement;
  let rendered: RenderResult;

  const mount = ({ ...props }: VariantProps<typeof Text>) => {
    rendered = render(<Text {...props}>{labelValue}</Text>);
    textElement = rendered.getByText(labelValue);
  };

  describe('Should have no a11y violations', () => {
    afterEach(async () => {
      expect(await axe(textElement)).toHaveNoViolations();
    });

    it("When text variant is 'heading1'", () => {
      mount({ variant: 'heading1' });
    });

    it("When text variant is 'heading2'", () => {
      mount({ variant: 'heading2' });
    });

    it("When text variant is 'heading3'", () => {
      mount({ variant: 'heading3' });
    });

    it("When text variant is 'heading4'", () => {
      mount({ variant: 'heading4' });
    });

    it("When text variant is 'heading5'", () => {
      mount({ variant: 'heading5' });
    });

    it("When text variant is 'heading6'", () => {
      mount({ variant: 'heading6' });
    });

    it("When text variant is 'lead1'", () => {
      mount({ variant: 'lead1' });
    });

    it("When text variant is 'lead2'", () => {
      mount({ variant: 'lead2' });
    });

    it("When text variant is 'body1'", () => {
      mount({ variant: 'body1' });
    });

    it("When text variant is 'body2'", () => {
      mount({ variant: 'body2' });
    });

    it("When text variant is 'auxiliary'", () => {
      mount({ variant: 'auxiliary' });
    });

    it("When text variant is 'caption'", () => {
      mount({ variant: 'caption' });
    });
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      expect(textElement.id).toContain('text-');
    });

    it('With Id passed by props', () => {
      mount({ id: 'textId123' });
      expect(textElement.id).toBe('textId123');
    });
  });
});
