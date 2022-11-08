import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['solid', 'ghost', 'text'],
      control: { type: 'select' },
      defaultValue: 'solid'
    },
    shape: {
      options: ['flat', 'rounded', 'soft'],
      control: { type: 'select' },
      defaultValue: 'rounded'
    },
    variant: {
      options: ['primary', 'secondary', 'danger', 'success'],
      control: { type: 'select' },
      defaultValue: 'primary'
    },
    disabled: {
      type: 'boolean',
      defaultValue: false
    },
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...args }) => <Button {...args}>Botão</Button>;

export const Default = Template.bind({});
