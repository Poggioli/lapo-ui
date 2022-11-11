import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Flex } from './Flex';
import { Box } from '@components/layout/Box';

export default {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: {
    direction: {
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: { type: 'select' }
    },
    wrap: {
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      control: { type: 'select' }
    },
    justify: {
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly'
      ],
      control: { type: 'select' }
    },
    align: {
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      control: { type: 'select' }
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
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = ({ color, ...args }) => (
  <Flex {...args} css={{ height: 200, width: 200, border: '1px solid #000' }}>
    <Box css={{ height: 50, width: 50, backgroundColor: '#f2f2f2' }} />
    <Box css={{ height: 50, width: 50, backgroundColor: '#f8f8f8' }} />
  </Flex>
);

export const Default = Template.bind({});
