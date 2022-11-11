import { Text } from '@components/typograph/Text';
import { Flex } from '@components/layout/Flex';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

export default {
  title: 'Layout/Card',
  component: Card,
  argTypes: {
    isPadded: {
      type: 'boolean',
      defaultValue: true
    },
    variant: {
      options: ['standard', 'interactive'],
      control: { type: 'select' },
      defaultValue: 'standard'
    },
    borderFormat: {
      options: ['none', 'medium', 'soft'],
      control: { type: 'select' },
      defaultValue: 'medium'
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
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ ...args }) => (
  <Card {...args}>
    <Flex direction="column">
      <Text as="h1" variant="heading4" css={{ marginBottom: '$4' }}>
        This is a card component
      </Text>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a risus enim. Sed egestas
        augue et scelerisque dapibus. Suspendisse condimentum, libero in dictum euismod, ipsum neque
        feugiat erat, pharetra condimentum massa dolor vel velit. Fusce luctus dignissim tellus ut
        semper. Praesent suscipit faucibus dui, et tempus est sagittis non. Curabitur tristique nec
        magna sit amet convallis. Nam et ultrices magna. Curabitur et pellentesque odio. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Fusce a mi mattis, tempus felis sit amet,
        ultrices leo. Etiam eu ligula molestie, imperdiet quam non, faucibus orci.
      </Text>
    </Flex>
  </Card>
);

export const Default = Template.bind({});
