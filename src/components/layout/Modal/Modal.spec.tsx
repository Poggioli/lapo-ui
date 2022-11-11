import { LapoVariants } from '@lapo';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { Button } from '@components/core/Button';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalTrigger,
  ModalClose
} from './Modal';

describe('Given a <Modal /> component', () => {
  const triggerModal = 'Open modal';
  const titleModal = 'Any title modal';
  const contentModal = 'Any content modal';
  const closeModal = 'Close';
  let triggerButton: HTMLElement;
  let rendered: RenderResult;

  const mount = ({ buttonCloseId, triggerId, descriptionId, titleId, contentId, modalId }: any) => {
    rendered = render(
      <Modal id={modalId}>
        <ModalTrigger id={triggerId}>
          <Button>{triggerModal}</Button>
        </ModalTrigger>
        <ModalContent id={contentId}>
          <ModalTitle id={titleId}>{titleModal}</ModalTitle>
          <ModalDescription id={descriptionId}>{contentModal}</ModalDescription>
          <ModalClose id={buttonCloseId}>
            <Button shape="soft" type="ghost" variant="danger">
              {closeModal}
            </Button>
          </ModalClose>
        </ModalContent>
      </Modal>
    );
    triggerButton = rendered.getByText(triggerModal);
    userEvent.click(triggerButton);
  };

  it('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should have title, content and icon to close', () => {
    mount({});
    const title = rendered.getByText(titleModal);
    const content = rendered.getByText(contentModal);
    const closeButton = rendered.getByText(closeModal);
    const close = rendered.getByLabelText('Fechar');

    expect(title).toBeVisible();
    expect(content).toBeVisible();
    expect(close).toBeVisible();
    expect(closeButton).toBeVisible();
  });

  describe('Should have id', () => {
    it('With prefix when no Id is provided', () => {
      mount({});
      expect(rendered.container).toBeTruthy();
    });

    it('With Id passed by props', () => {
      mount({
        buttonCloseId: 'buttonCloseId',
        triggerId: 'triggerId',
        descriptionId: 'descriptionId',
        titleId: 'titleId',
        contentId: 'contentId',
        modalId: 'modalId'
      });
      expect(rendered.container).toBeTruthy();
    });
  });
});
