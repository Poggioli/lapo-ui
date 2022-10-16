import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Radiobutton } from './Radiobutton';
import { RadioGroup } from './styles';

export default {
  title: 'Componentes/components/Radiobutton',
  component: Radiobutton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'select' },
      defaultValue: 'primary'
    },
    disabled: {
      type: 'boolean',
      defaultValue: false
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
} as ComponentMeta<typeof Radiobutton>;

const Template: ComponentStory<typeof Radiobutton> = ({ ...args }) => {
  const [radioSelected, setRadioSelected] = useState('');

  const radioOptions = [
    {
      label: 'Banana',
      value: 'banana'
    },
    {
      value: 'apple',
      label: 'Apple'
    },
    {
      value: 'tomato',
      label: 'Tomato'
    }
  ];

  const handleOnValueChange = (value: string) => {
    setRadioSelected(value);
  };

  return (
    <RadioGroup onValueChange={handleOnValueChange}>
      {radioOptions.map((option) => (
        <Radiobutton
          {...args}
          key={option.value}
          value={option.value}
          checked={option.value === radioSelected}
        >
          {option.label}
        </Radiobutton>
      ))}
    </RadioGroup>
  );
};

export const Default = Template.bind({});
