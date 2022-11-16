import { Button } from '@components/core/Button';
import { Flex } from '@layout/Flex';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { FC } from 'react';
import {
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport
} from './Toast';

const TOAST_OPEN_BUTTON: string = 'Open toast';
const TOAST_TITLE: string = 'Donec venenatis leo turpis. Sed.';
const TOAST_DESCRIPTION: string =
  'Donec nibh leo, tristique quis velit sit amet, congue mollis orci. Duis nec dolor efficitur, finibus eros nec, fringilla leo.';
const TOAST_UNDO_BUTTON: string = 'UNDO';
const TOAST_OK_BUTTON: string = 'OK';

const DumbToast: FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <ToastProvider swipeDirection="right">
      <Button
        shape="soft"
        onClick={() => {
          setOpen(false);
          setOpen(true);
        }}
      >
        {TOAST_OPEN_BUTTON}
      </Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <Flex align="center" direction="column">
          <Flex
            direction="column"
            css={{
              marginBottom: '$4'
            }}
          >
            <ToastTitle>{TOAST_TITLE}</ToastTitle>
            <ToastDescription>{TOAST_DESCRIPTION}</ToastDescription>
          </Flex>
          <Flex justify="flex-end" css={{ width: '100%' }}>
            <ToastAction asChild altText="undo action">
              <Button
                shape="soft"
                type="text"
                variant="danger"
                css={{
                  marginRight: '$3'
                }}
              >
                {TOAST_UNDO_BUTTON}
              </Button>
            </ToastAction>
            <ToastClose asChild>
              <Button shape="soft" type="text" variant="success">
                {TOAST_OK_BUTTON}
              </Button>
            </ToastClose>
          </Flex>
        </Flex>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  );
};

describe('Given a <Toast /> component', () => {
  let openToastButton: HTMLElement;
  let rendered: RenderResult;

  const mount = () => {
    rendered = render(<DumbToast />);
    openToastButton = rendered.getByText('Open toast');
  };

  it('should show toast when click in "Open toast" button', () => {
    mount();
    userEvent.click(openToastButton);
    const toastTitle: HTMLElement = rendered.getByText(TOAST_TITLE);
    const toastDescription: HTMLElement = rendered.getByText(TOAST_DESCRIPTION);
    const toastOkButton: HTMLElement = rendered.getByText(TOAST_OK_BUTTON);
    const toastUndoButton: HTMLElement = rendered.getByText(TOAST_UNDO_BUTTON);
    expect(toastTitle).toBeVisible();
    expect(toastDescription).toBeVisible();
    expect(toastOkButton).toBeVisible();
    expect(toastUndoButton).toBeVisible();
  });
});
