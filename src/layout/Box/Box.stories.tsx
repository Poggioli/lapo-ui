import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Box } from './Box';

export default {
  title: 'Componentes/layout/Box',
  component: Box,
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: ['red', 'green'],
        defaultValue: 'red'
      }
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
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = ({ color, ...args }) => (
  <Box {...args} css={{ backgroundColor: color || 'red', height: 100, width: 100 }} />
);

export const Default = Template.bind({});
