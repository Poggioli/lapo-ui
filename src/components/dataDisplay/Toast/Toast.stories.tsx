import { Button } from '@components/core/Button';
import { Flex } from '@layout/Flex';
import { ToastClose } from '@radix-ui/react-toast';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import {
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport
} from './Toast';

export default {
  title: 'Data display/Toast',
  argTypes: {
    ref: {
      table: {
        disable: true
      }
    },
    css: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    }
  }
};

const Template: ComponentStory<any> = ({ ...args }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <ToastProvider swipeDirection="right">
      <Button
        shape="soft"
        type="ghost"
        onClick={() => {
          setOpen(false);
          setOpen(true);
        }}
      >
        Open toast
      </Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <Flex align="center" direction="column">
          <Flex
            direction="column"
            css={{
              marginBottom: '$4'
            }}
          >
            <ToastTitle>Donec venenatis leo turpis. Sed.</ToastTitle>
            <ToastDescription>
              Donec nibh leo, tristique quis velit sit amet, congue mollis orci. Duis nec dolor
              efficitur, finibus eros nec, fringilla leo.
            </ToastDescription>
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
                Undo
              </Button>
            </ToastAction>
            <ToastClose asChild>
              <Button shape="soft" type="text" variant="success">
                OK
              </Button>
            </ToastClose>
          </Flex>
        </Flex>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  );
};

export const Default = Template.bind({});
