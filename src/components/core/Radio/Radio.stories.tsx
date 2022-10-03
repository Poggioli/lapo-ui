import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

interface RadioOptions {
  label: string,
  value: string,
  checked?: boolean,
  disabled?: boolean,
  invalid?: boolean
}

const radioOptions: RadioOptions[] = [
  {
    label: 'Radio 1',
    value: 'radio-1',
  },
  {
    label: 'Radio 2',
    value: 'radio-2',
  },
  {
    label: 'Radio 3',
    value: 'radio-4',
  }
];

export default {
  title: 'Componentes/core/Radio',
  component: Radio,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Esta variável define se o radio está habilitado ou não'
    },
    invalid: {
      control: 'boolean',
      defaultValue: false,
      description: 'Esta variável define se o radio está inválido ou não'
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {

  const [options, setOptions] = useState(radioOptions);

  const handleOnValueChange = (selectedValue: string) => {
    setOptions(options.map((option) => ({
      ...option,
      checked: option.value === selectedValue
    })))
  }

  return (
    <RadioGroup onValueChange={handleOnValueChange}>
        {options.map(option => (
          <Radio key={option.value} {...option} {...args} />
        ))}
    </RadioGroup>
  )
};

export const Default = Template.bind({});
