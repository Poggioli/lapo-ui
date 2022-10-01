import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

export default {
  title: 'Componentes/core/Radio',
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>;

const radioOptions = [
  {
    label: 'Radio 1',
    value: 'radio-1',
    checked: false
  },
  {
    label: 'Radio 2',
    value: 'radio-2',
    checked: false
  },
  {
    label: 'Radio 3',
    value: 'radio-4',
    checked: false
  }
]

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
          <Radio key={option.value} {...option} />
        ))}
    </RadioGroup>
  )
};

export const Default = Template.bind({});
