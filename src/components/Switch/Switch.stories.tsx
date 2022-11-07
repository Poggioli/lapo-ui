import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Componentes/Switch',
  component: Switch,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'select' },
      defaultValue: 'primary'
    },
    disabled: {
      type: 'boolean',
      defaultValue: false
    },
    inverted: {
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
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({ ...args }) => (
  <Switch {...args}>Dark mode</Switch>
);

export const Default = Template.bind({});
