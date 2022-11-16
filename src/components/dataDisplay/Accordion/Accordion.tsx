import { ComponentCSSProp, LapoVariants } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import {
  StyledAccordion,
  StyledAccordionItem,
  StyledAccordionItemContent,
  StyledAccordionItemHeader,
  StyledAccordionItemTrigger,
  StyledChevron,
  StyledAccordionItemContentBox
} from './styles';

/* -------------------------------------------------------------------------------------------------
 * Accordion Header
 * -----------------------------------------------------------------------------------------------*/
type AccordionHeaderCSSProp = ComponentCSSProp;
type AccordionHeaderVariants = LapoVariants<typeof StyledAccordionItemContent>;
type AccordionHeaderProps = AccordionHeaderCSSProp & AccordionHeaderVariants;

type AccordionHeaderComponent = Polymorphic.ForwardRefComponent<
  typeof StyledAccordionItemContent,
  AccordionHeaderProps
>;
const AccordionHeader = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledAccordionItemHeader {...props} ref={forwardedRef}>
    <StyledAccordionItemTrigger>
      {children}
      <StyledChevron aria-hidden />
    </StyledAccordionItemTrigger>
  </StyledAccordionItemHeader>
)) as AccordionHeaderComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Accordion Content
 * -----------------------------------------------------------------------------------------------*/
type AccordionContentCSSProp = ComponentCSSProp;
type AccordionContentVariants = LapoVariants<typeof StyledAccordionItemContent>;
type AccordionContentProps = AccordionContentCSSProp & AccordionContentVariants;

type AccordionContentComponent = Polymorphic.ForwardRefComponent<
  typeof StyledAccordionItemContent,
  AccordionContentProps
>;
const AccordionContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledAccordionItemContent {...props} ref={forwardedRef}>
    <StyledAccordionItemContentBox>{children}</StyledAccordionItemContentBox>
  </StyledAccordionItemContent>
)) as AccordionContentComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Accordion Item
 * -----------------------------------------------------------------------------------------------*/
type AccordionItemCSSProp = ComponentCSSProp;
type AccordionItemVariants = LapoVariants<typeof StyledAccordionItem>;
type AccordionItemProps = AccordionItemCSSProp & AccordionItemVariants;

type AccordionItemComponent = Polymorphic.ForwardRefComponent<
  typeof StyledAccordionItem,
  AccordionItemProps
>;
const AccordionItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  const [accordionHeader, setAccordionHeader] = useState<ReactNode>(null);
  const [accordionContent, setAccordionContent] = useState<ReactNode>(null);

  useEffect(() => {
    if (!Array.isArray(children)) {
      throw new Error('AccordionItem should be used with AccordionHeader and AccordionContent');
    }

    const header: ReactNode[] = children.filter((child: any) => child.type === AccordionHeader);
    const content: ReactNode[] = children.filter((child: any) => child.type === AccordionContent);

    if (header.length !== 1 || content.length !== 1) {
      throw new Error('AccordionItem should be used with AccordionHeader and AccordionContent');
    }

    setAccordionHeader(header[0]);
    setAccordionContent(content[0]);
  }, []);

  return (
    <StyledAccordionItem {...props} ref={forwardedRef}>
      {accordionHeader}
      {accordionContent}
    </StyledAccordionItem>
  );
}) as AccordionItemComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Accordion
 * -----------------------------------------------------------------------------------------------*/

type AccordionCSSProp = ComponentCSSProp;
type AccordionVariants = LapoVariants<typeof StyledAccordion>;
type AccordionProps = AccordionCSSProp & AccordionVariants;

type AccordionComponent = Polymorphic.ForwardRefComponent<typeof StyledAccordion, AccordionProps>;

const Accordion = React.forwardRef(({ id, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('accordion'), [id]);

  return <StyledAccordion {...props} id={customId} ref={forwardedRef} />;
}) as AccordionComponent;

export { Accordion, AccordionHeader, AccordionContent, AccordionItem };

/* -----------------------------------------------------------------------------------------------*/
