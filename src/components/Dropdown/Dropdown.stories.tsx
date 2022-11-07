import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {
  Dropdown,
  DropdownContent,
  DropdownGroup,
  DropdownGroupLabel,
  DropdownItem,
  DropdownSelectedIndicator,
  DropdownSeparator,
  DropdownText,
  DropdownTrigger,
  DropdownValue
} from './Dropdown';

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
  argTypes: {
    shape: {
      options: ['solid', 'ghost', 'standard'],
      control: { type: 'select' },
      defaultValue: 'solid'
    },
    variant: {
      options: ['primary', 'danger'],
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
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof DropdownTrigger> = ({ ...args }) => {
  return (
    <Dropdown>
      <DropdownTrigger {...args}>
        <DropdownValue placeholder="Selecione um animal" />
      </DropdownTrigger>
      <DropdownContent>
        <DropdownGroup>
          <DropdownGroupLabel>Aves</DropdownGroupLabel>
          <DropdownItem value="calopsita" disabled={true}>
            <DropdownSelectedIndicator />
            <DropdownText>Calopsita</DropdownText>
          </DropdownItem>
          <DropdownItem value="periquito-australiano">
            <DropdownSelectedIndicator />
            <DropdownText>Periquito Australiano</DropdownText>
          </DropdownItem>
          <DropdownItem value="cacatua">
            <DropdownSelectedIndicator />
            <DropdownText>Cacatua</DropdownText>
          </DropdownItem>
          <DropdownItem value="papagaio-do-congo">
            <DropdownSelectedIndicator />
            <DropdownText>Papagaio do Congo</DropdownText>
          </DropdownItem>
          <DropdownItem value="papagaio-verdadeiro">
            <DropdownSelectedIndicator />
            <DropdownText>Papagaio Verdadeiro</DropdownText>
          </DropdownItem>
        </DropdownGroup>
        <DropdownSeparator />
        <DropdownGroup>
          <DropdownGroupLabel>Cachorros</DropdownGroupLabel>
          <DropdownItem value="poodle">
            <DropdownSelectedIndicator />
            <DropdownText>Poodle</DropdownText>
          </DropdownItem>
          <DropdownItem value="pastor-alemao">
            <DropdownSelectedIndicator />
            <DropdownText>Pastor Alemão</DropdownText>
          </DropdownItem>
          <DropdownItem value="pitbull">
            <DropdownSelectedIndicator />
            <DropdownText>Pitbull</DropdownText>
          </DropdownItem>
        </DropdownGroup>
      </DropdownContent>
    </Dropdown>
  );
};

export const Default = Template.bind({});
