import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

export default {
  title: 'Componentes/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Esta variável define se o input está habilitado ou não'
    },
    invalid: {
      control: 'boolean',
      defaultValue: false,
      description: 'Esta variável define se o input está inválido ou não'
    },
    required: {
      control: 'boolean',
      defaultValue: false,
      description: 'Esta variável define se o input é obrigatório ou não'
    },
    label: {
      control: 'text',
      defaultValue: 'Digite um valor qualquer',
      description: 'Esta variável define o valor da label do input'
    },
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'select' },
      defaultValue: 'filled',
      description: 'Esta variável define qual será o tipo do input'
    },
    placeholder: {
      control: 'text',
      defaultValue: '',
      description: 'Esta variável define o placeholder que irá aparecer quando o campo for focado e estiver vazio'
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const Default = Template.bind({});
