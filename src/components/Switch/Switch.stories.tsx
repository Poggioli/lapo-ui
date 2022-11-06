import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Componentes/Switch',
  component: Switch,
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
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({ ...args }) => <Switch {...args} />;

export const Default = Template.bind({});
