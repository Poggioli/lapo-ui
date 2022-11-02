import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Componentes/Checkbox',
  component: Checkbox,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'select' },
      defaultValue: 'primary'
    },
    checked: {
      options: [true, false, 'indeterminate'],
      control: { type: 'select' },
      defaultValue: false
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
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ ...args }) => (
  <Checkbox {...args}>Checkbox value</Checkbox>
);

export const Default = Template.bind({});
