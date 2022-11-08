import { fireEvent, render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
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

describe('Given a <Dropdown /> component', () => {
  let rendered: RenderResult;
  type DropdownIds = {
    icon?: string;
    trigger?: string;
    groupLabel?: string;
    selectIndicator?: string;
    selectItem?: string;
    selectItemText?: string;
    content?: string;
    root?: string;
  };

  const mount = ({
    trigger,
    groupLabel,
    selectIndicator,
    selectItem,
    selectItemText,
    content,
    root
  }: DropdownIds) => {
    rendered = render(
      <Dropdown id={root}>
        <DropdownTrigger id={trigger}>
          <DropdownValue placeholder="Selecect an animal" />
        </DropdownTrigger>
        <DropdownContent id={content}>
          <DropdownGroup>
            <DropdownGroupLabel id={groupLabel}>Birds</DropdownGroupLabel>
            <DropdownItem value="cockatiel" disabled={true}>
              <DropdownSelectedIndicator />
              <DropdownText>Cockatiel</DropdownText>
            </DropdownItem>
            <DropdownItem id={`${selectItem}-2`} value="budgerigar">
              <DropdownSelectedIndicator id={`${selectIndicator}-2`} />
              <DropdownText id={`${selectItemText}-2`}>Budgerigar</DropdownText>
            </DropdownItem>
            <DropdownItem id={`${selectItem}-3`} value="cockatoo">
              <DropdownSelectedIndicator id={`${selectIndicator}-3`} />
              <DropdownText id={`${selectItemText}-3`}>Cockatoo</DropdownText>
            </DropdownItem>
            <DropdownItem id={`${selectItem}-3`} value="gray-parrot">
              <DropdownSelectedIndicator id={`${selectIndicator}-3`} />
              <DropdownText id={`${selectItemText}-3`}>Gray parrot</DropdownText>
            </DropdownItem>
            <DropdownItem id={`${selectItem}-4`} value="blue-parrot">
              <DropdownSelectedIndicator id={`${selectIndicator}-4`} />
              <DropdownText id={`${selectItemText}-4`}>Blue parrot</DropdownText>
            </DropdownItem>
          </DropdownGroup>
          <DropdownSeparator />
        </DropdownContent>
      </Dropdown>
    );
  };

  it('should render', () => {
    mount({});
    expect(rendered).toBeTruthy();
  });

  xit('should have no a11y violations', async () => {
    mount({});
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});
