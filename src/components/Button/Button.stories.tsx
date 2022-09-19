import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Componentes/Botão',
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'text'],
      control: { type: 'select' },
      defaultValue: 'filled',
      description: 'Esta variável define qual será o tipo do botão'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Esta variável define se o botão está habilitado ou não'
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Botão</Button>;

export const Default = Template.bind({});
