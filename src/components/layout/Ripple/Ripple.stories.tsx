import { Flex } from '@components/layout/Flex';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Ripple } from './Ripple';

export default {
  title: 'Layout/Ripple',
  component: Ripple,
  argTypes: {
    center: {
      control: 'boolean',
      defaultValue: false,
      description:
        'Define se o efeito de Ripple vai partir do ponto de clique ou do centro do componente'
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
} as ComponentMeta<typeof Ripple>;

const Template: ComponentStory<typeof Ripple> = ({ ...args }) => (
  <Ripple {...args}>
    <Flex css={{ height: 200, width: 200, border: '1px solid #000' }} />
  </Ripple>
);

export const Default = Template.bind({});
