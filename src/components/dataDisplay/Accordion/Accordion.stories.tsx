import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Accordion, AccordionHeader, AccordionContent, AccordionItem } from './Accordion';

export default {
  title: 'Data display/Accordion',
  component: Accordion,
  argTypes: {
    variant: {
      options: ['shaded', 'bordered', 'unstyled'],
      control: { type: 'select' },
      defaultValue: 'bordered'
    },
    type: {
      options: ['single', 'multiple'],
      control: { type: 'select' },
      defaultValue: 'single'
    },
    collapsible: {
      type: 'boolean',
      defaultValue: false
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
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = ({ ...args }) => (
  <Accordion {...args}>
    <AccordionItem value="item-1">
      <AccordionHeader>Lorem ipsum dolor sit amet.</AccordionHeader>
      <AccordionContent>
        Phasellus eu neque nec risus cursus auctor. Vestibulum blandit est arcu, nec pulvinar est
        semper a. Maecenas ultricies mi ligula, at tincidunt mauris pharetra non. Pellentesque risus
        dui, egestas et volutpat vitae, efficitur in neque. Sed elit leo, pellentesque eget pulvinar
        auctor, viverra interdum nisl. Nunc volutpat facilisis velit, ut dapibus nisl tempor non.
        Mauris eu risus eu libero condimentum dapibus nec in ipsum. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Fusce et consectetur ipsum. Phasellus
        condimentum nulla orci, at blandit velit auctor sit amet. Integer suscipit nibh nibh, non
        ultricies augue vulputate feugiat. Integer iaculis ac felis at ornare. Aliquam erat
        volutpat. Phasellus euismod magna at bibendum dapibus. Aenean non elementum eros. Praesent
        ut felis augue.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionHeader>Maecenas a orci eu sem.</AccordionHeader>
      <AccordionContent>
        Nunc euismod, tortor eu interdum vulputate, justo leo porttitor neque, sed feugiat justo
        lorem sed elit. Ut gravida ligula id euismod molestie. Integer felis diam, auctor quis
        aliquam ac, tempus sit amet mi. Pellentesque vehicula nibh eu pharetra consequat. Duis ac
        lobortis arcu. Ut efficitur sapien tristique dui luctus feugiat eget eget mauris.
        Pellentesque luctus placerat orci, ut lobortis sapien dapibus a.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionHeader>Pellentesque egestas quam metus, in.</AccordionHeader>
      <AccordionContent>
        Nulla non vulputate justo. Curabitur tristique commodo volutpat. Fusce tortor augue,
        ullamcorper sed gravida in, commodo id orci. Sed tempus sapien ac lacus rhoncus malesuada.
        Duis maximus maximus turpis nec suscipit. Proin et efficitur nibh. Nulla malesuada ante at
        pretium pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Cras sodales lorem enim, nec elementum velit gravida eget.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});
