import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from './Text';

export default {
  title: 'Componentes/components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: [
        'heading1',
        'heading2',
        'heading3',
        'heading4',
        'heading5',
        'heading6',
        'lead1',
        'lead2',
        'body1',
        'body2',
        'auxiliary',
        'caption'
      ],
      description: 'Define qual será o estilo da fonte utilizada.'
    },
    color: {
      control: {
        type: 'select'
      },
      options: [
        'primaryLowContrast',
        'primaryHighContrast',
        'grayLowContrast',
        'grayHighContrast',
        'grayColoredLowContrast',
        'grayColoredHighContrast'
      ],
      description: 'Define qual será a cor da fonte utilizada.'
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
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ ...args }) => <Text {...args}>Valor Textual</Text>;

export const Default = Template.bind({});
