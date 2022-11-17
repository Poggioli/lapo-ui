import { Button } from '@components/core/Button';
import { Text } from '@components/typograph/Text';
import { Flex } from '@layout/Flex';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
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
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = () => (
  <Tooltip content="Pellentesque dignissim aliquet ullamcorper. Vivamus.">
    <Button>Tooltip</Button>
  </Tooltip>
);

const Custom: ComponentStory<typeof Tooltip> = () => (
  <Tooltip
    content={
      <Flex gap="$3" align="center">
        <QuestionMarkCircledIcon />
        <Text>Pellentesque dignissim aliquet ullamcorper. Vivamus.</Text>
      </Flex>
    }
  >
    <Button>Tooltip</Button>
  </Tooltip>
);

export const Default = Template.bind({});
export const CustomContent = Custom.bind({});
