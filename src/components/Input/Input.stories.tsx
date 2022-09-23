import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

export default {
  title: 'Componentes/Input',
  component: Input,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Digite um valor qualquer',
      description: 'Esta variável define o valor da label do input'
    },
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
    placeholder: {
      control: 'text',
      defaultValue: '',
      description: 'Esta variável define o placeholder que irá aparecer quando o campo for focado e estiver vazio'
    },
    required: {
      control: 'boolean',
      defaultValue: false,
      description: 'Esta variável define se o input é obrigatório ou não'
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
