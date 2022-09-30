import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Radio, RadioGroup } from './Radio';

export default {
  title: 'Componentes/core/Radio',
  component: Radio,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Radio',
      description: 'Esta variável define o valor da label do radio'
    }
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
    <RadioGroup>
        <Radio {...args} />
        <Radio {...args} />
    </RadioGroup>
);

export const Default = Template.bind({});
