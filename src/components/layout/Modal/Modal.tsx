import { StyledText, Text } from '@components/typograph/Text';
import { ComponentCSSProp, LapoVariants } from '@lapo';
import { Cross2Icon } from '@radix-ui/react-icons';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { useMemo, ReactNode } from 'react';
import {
  IconButton,
  StyledClose,
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledPortal,
  StyledRoot,
  StyledTitle,
  StyledTrigger
} from './styles';

/* -------------------------------------------------------------------------------------------------
 * Modal Close
 * -----------------------------------------------------------------------------------------------*/
type ModalCloseCSSProp = ComponentCSSProp;
type ModalCloseVariants = LapoVariants<typeof StyledClose>;
type ModalCloseProps = ModalCloseCSSProp & ModalCloseVariants;
type ModalCloseComponent = Polymorphic.ForwardRefComponent<typeof StyledClose, ModalCloseProps>;

const ModalClose = React.forwardRef(({ id, children, ...props }, forwardRef) => {
  const customId: string = useMemo(() => id || useId('modal-close'), [id]);

  return (
    <StyledClose id={customId} {...props} ref={forwardRef} asChild>
      {children ? (
        children
      ) : (
        <IconButton aria-label="Fechar">
          <Cross2Icon />
        </IconButton>
      )}
    </StyledClose>
  );
}) as ModalCloseComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Trigger
 * -----------------------------------------------------------------------------------------------*/
type ModalTriggerCSSProp = ComponentCSSProp;
type ModalTriggerVariants = LapoVariants<typeof StyledTrigger>;
type ModalTriggerProps = ModalTriggerCSSProp & ModalTriggerVariants;
type ModalTriggerComponent = Polymorphic.ForwardRefComponent<
  typeof StyledTrigger,
  ModalTriggerProps
>;

const ModalTrigger = React.forwardRef(({ id, children, ...props }, forwardRef) => {
  const customId: string = useMemo(() => id || useId('modal-trigger'), [id]);

  return (
    <StyledTrigger id={customId} {...props} ref={forwardRef} asChild>
      <span>{children}</span>
    </StyledTrigger>
  );
}) as ModalTriggerComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Description
 * -----------------------------------------------------------------------------------------------*/
type ModalDescriptionCSSProp = ComponentCSSProp;
type ModalDescriptionVariants = LapoVariants<typeof StyledText>;
type ModalDescriptionProps = ModalDescriptionCSSProp & ModalDescriptionVariants;
type ModalDescriptionComponent = Polymorphic.ForwardRefComponent<
  typeof StyledDescription,
  ModalDescriptionProps
>;

const ModalDescription = React.forwardRef(({ id, children, color, ...props }, forwardRef) => {
  const customId: string = useMemo(() => id || useId('modal-description'), [id]);

  return (
    <StyledDescription ref={forwardRef} asChild>
      <Text
        {...props}
        as="p"
        id={customId}
        color={color || 'grayLowContrast'}
        css={{
          marginBottom: '$6',
          ...props.css
        }}
      >
        {children}
      </Text>
    </StyledDescription>
  );
}) as ModalDescriptionComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Title
 * -----------------------------------------------------------------------------------------------*/
type ModalTitleCSSProp = ComponentCSSProp;
type ModalTitleVariants = LapoVariants<typeof StyledText>;
type ModalTitleProps = ModalTitleCSSProp & ModalTitleVariants;
type ModalTitleComponent = Polymorphic.ForwardRefComponent<typeof StyledTitle, ModalTitleProps>;

const ModalTitle = React.forwardRef(({ id, children, variant, ...props }, forwardRef) => {
  const customId: string = useMemo(() => id || useId('modal-title'), [id]);

  return (
    <StyledTitle ref={forwardRef} asChild>
      <Text
        {...props}
        as="h1"
        id={customId}
        variant={variant || 'heading3'}
        css={{
          marginBottom: '$4',
          ...props.css
        }}
      >
        {children}
      </Text>
    </StyledTitle>
  );
}) as ModalTitleComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal Content
 * -----------------------------------------------------------------------------------------------*/
type ModalContentCSSProp = ComponentCSSProp;
type ModalContentVariants = LapoVariants<typeof StyledContent>;
type ModalContentProps = ModalContentCSSProp & ModalContentVariants;
type ModalContentComponent = Polymorphic.ForwardRefComponent<
  typeof StyledContent,
  ModalContentProps
>;

const ModalContent = React.forwardRef(({ id, children, ...props }, forwardRef) => {
  const customId: string = useMemo(() => id || useId('modal-content'), [id]);

  return (
    <StyledPortal>
      <StyledOverlay>
        <StyledContent {...props} ref={forwardRef} id={customId}>
          <ModalClose />
          {children}
        </StyledContent>
      </StyledOverlay>
    </StyledPortal>
  );
}) as ModalContentComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Modal
 * -----------------------------------------------------------------------------------------------*/

type ModalCSSProp = ComponentCSSProp;
type ModalVariants = LapoVariants<typeof StyledRoot>;
type ModalProps = ModalCSSProp & ModalVariants & { id?: string };

type ModalComponent = Polymorphic.ForwardRefComponent<typeof StyledRoot, ModalProps>;

const Modal = React.forwardRef(({ id, children, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('modal-root'), [id]);

  return (
    <StyledRoot {...props} id={customId} ref={forwardedRef}>
      {children}
    </StyledRoot>
  );
}) as ModalComponent;

export { Modal, ModalContent, ModalTitle, ModalDescription, ModalTrigger, ModalClose };

/* -----------------------------------------------------------------------------------------------*/
