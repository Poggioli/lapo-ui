import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Componentes/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Esta variável define se o checkbox está habilitado ou não'
    },
    invalid: {
      control: 'boolean',
      defaultValue: false,
      description: 'Esta variável define se o checkbox está inválido ou não'
    },
    label: {
      control: 'text',
      defaultValue: 'Checkbox',
      description: 'Esta variável define o valor da label do checkbox'
    }
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
