import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '@components/typograph/Text';
import React from 'react';
import { Container } from './Container';

export default {
  title: 'layout/Container',
  component: Container,
  argTypes: {
    centerContent: {
      type: 'boolean',
      defaultValue: false
    },
    size: {
      options: ['small', 'medium', 'large', 'extraLarge'],
      control: { type: 'select' },
      defaultValue: 'large'
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
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = ({ ...args }) => (
  <Container {...args} css={{ border: '1px solid #000', padding: '$6' }}>
    <Text color="primaryHighContrast" variant="heading1">
      Lapo UI
    </Text>
  </Container>
);

export const Default = Template.bind({});
