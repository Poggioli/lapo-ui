import { Text } from '@components/typograph/Text';
import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from './Accordion';

describe('Given a <Accordion /> component', () => {
  const contenValue = 'any contenValue value';
  const titleValue = 'any titleValue value';
  let triggerElement: HTMLElement;
  let rendered: RenderResult;

  const mount = (props: any) => {
    rendered = render(
      <Accordion id={props.rootId}>
        <AccordionItem value="accordion-item-1">
          <AccordionHeader>{titleValue}</AccordionHeader>
          <AccordionContent>{contenValue}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    triggerElement = rendered.getByText(titleValue);
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      const slider = rendered.container.querySelector('[id^="accordion-"]');
      expect(slider).toBeVisible();
    });

    it('With Id passed by props', () => {
      mount({
        rootId: 'accordionId123'
      });
      const slider = rendered.container.querySelector('#accordionId123');
      expect(slider).toBeVisible();
    });
  });

  describe('AccordionItem', () => {
    it("should throw an error when children props it's not an array", () => {
      expect(() =>
        render(
          <Accordion>
            <AccordionItem value="item-1">Teste</AccordionItem>
          </Accordion>
        )
      ).toThrowError('AccordionItem should be used with AccordionHeader and AccordionContent');
    });

    it('should throw an error when children props does not have an AccordionHeader', () => {
      expect(() =>
        render(
          <Accordion>
            <AccordionItem value="item-1">
              <Text>Header</Text>
              <AccordionContent>{contenValue}</AccordionContent>
            </AccordionItem>
          </Accordion>
        )
      ).toThrowError('AccordionItem should be used with AccordionHeader and AccordionContent');
    });

    it('should throw an error when children props does not have an AccordionContent', () => {
      expect(() =>
        render(
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionHeader>{titleValue}</AccordionHeader>
              <Text>Content</Text>
            </AccordionItem>
          </Accordion>
        )
      ).toThrowError('AccordionItem should be used with AccordionHeader and AccordionContent');
    });
  });
});
