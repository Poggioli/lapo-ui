import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Slider } from './Slider';

export default {
  title: 'Componentes/Slider',
  component: Slider,
  argTypes: {
    min: {
      type: 'number',
      defaultValue: 0
    },
    max: {
      type: 'number',
      defaultValue: 100
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal'
    },
    step: {
      type: 'number',
      defaultValue: 1
    },
    minStepsBetweenThumbs: {
      type: 'number',
      defaultValue: 10
    },
    showRange: {
      type: 'boolean',
      defaultValue: false
    },
    inverted: {
      type: 'boolean',
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
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = ({ ...args }) => <Slider {...args} />;

export const Default = Template.bind({});
