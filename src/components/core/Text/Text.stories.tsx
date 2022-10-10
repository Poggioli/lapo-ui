import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from './Text';

export default {
  title: 'Componentes/core/Texto',
  component: Text,
  argTypes: {
    variant: {
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
      control: { type: 'select' },
      defaultValue: 'heading1',
      description: 'Esta variável define qual será o tipo do texto'
    },
    as: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>Valor textual</Text>;

export const Default = Template.bind({});
