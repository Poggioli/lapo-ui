import { Box } from '@layout/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Flex } from './Flex';

export default {
  title: 'Componentes/layout/Flex',
  component: Flex,
  argTypes: {
    flexDirection: { 
        options: ['row' , 'row-reverse' , 'column' , 'column-reverse'],
        control: { type: 'select' }
    },
    flexWrap: { 
        options: ['nowrap', 'wrap', 'wrap-reverse'],
        control: { type: 'select' }
    },
    justifyContent: { 
        options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
        control: { type: 'select' }
    },
    alignItems: { 
        options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
        control: { type: 'select' }
    },
    alignContent: { 
        options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
        control: { type: 'select' }
    },
    ref: {
      table: {
        disable: true,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = ({color, ...args}) => (
    <Flex {...args} css={{ height: 200, width: 200, border: '1px solid #000' }}>
        <Box css={{ height: 50, width: 50, backgroundColor: '#f2f2f2' }} />
        <Box css={{ height: 50, width: 50, backgroundColor: '#f8f8f8' }} />
    </Flex>
);

export const Default = Template.bind({});
