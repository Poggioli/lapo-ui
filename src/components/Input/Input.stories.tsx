import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

export default {
  title: 'Componentes/Input',
  component: Input,
  argTypes: {
    shape: {
      options: ['solid', 'ghost', 'standard'],
      control: { type: 'select' },
      defaultValue: 'standard'
    },
    variant: {
      options: ['primary', 'danger'],
      control: { type: 'select' },
      defaultValue: 'primary'
    },
    placeholder: {
      type: 'string',
      defaultValue: 'Ex: nome@gmail.com'
    },
    label: {
      type: 'string',
      defaultValue: 'E-mail'
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ ...args }) => <Input {...args} />;

export const Default = Template.bind({});
