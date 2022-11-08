import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Separator } from './Separator';

export default {
  title: 'Layout/Separator',
  component: Separator,
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
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = ({ ...args }) => <Separator {...args} />;

export const Default = Template.bind({});
