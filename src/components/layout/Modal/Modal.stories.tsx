import { Button } from '@components/core/Button';
import { Checkbox } from '@components/core/Checkbox';
import { Input } from '@components/core/Input';
import { LapoProvider } from '@components/core/LapoProvider';
import { Radiobutton, RadioGroup } from '@components/core/Radiobutton';
import { Slider } from '@components/core/Slider';
import { Switch } from '@components/core/Switch';
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
} from '@components/core/Dropdown';
import { Text } from '@components/typograph/Text';
import { blueLightTheme } from '@lapo';
import { Flex } from '@layout/Flex';
import { Box } from '@layout/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC, PropsWithChildren, useCallback, useState } from 'react';
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalTrigger
} from './Modal';

const CustomModal: FC<PropsWithChildren> = ({ children }) => {
  const [radioSelected, setRadioSelected] = useState('');

  const handleRadioButtonChange = useCallback((value: string) => {
    setRadioSelected(value);
  }, []);

  return (
    <Modal>
      <ModalTrigger>{children}</ModalTrigger>
      <ModalContent>
        <ModalTitle>Custom modal</ModalTitle>
        <Flex direction="column" gap="$6">
          <Flex
            css={{
              width: '60%',
              gap: '$6',
              flexDirection: 'column',

              '@small': {
                width: '100%',
                flexDirection: 'row'
              }
            }}
          >
            <Input
              css={{ flex: 1 }}
              label="First name"
              placeholder="Ex: Joshep"
              shape="standard"
              variant="primary"
            />
            <Input
              css={{ flex: 1 }}
              label="Last name"
              placeholder="Ex: Climber"
              shape="standard"
              variant="primary"
            />
          </Flex>
          <Flex
            css={{
              width: '100%',
              gap: '$6',
              flexDirection: 'column'
            }}
          >
            <Flex direction="column" css={{ width: '100%' }}>
              <Text>What is your gender?</Text>
              <RadioGroup
                onValueChange={handleRadioButtonChange}
                css={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  columnGap: '$4',
                  rowGap: '$1'
                }}
              >
                <Box css={{ minWidth: '$13' }}>
                  <Radiobutton checked={radioSelected === 'male'} value="male">
                    Male
                  </Radiobutton>
                </Box>
                <Box css={{ minWidth: '$13' }}>
                  <Radiobutton checked={radioSelected === 'female'} value="female">
                    Female
                  </Radiobutton>
                </Box>
                <Box css={{ minWidth: '$13' }}>
                  <Radiobutton checked={radioSelected === 'other'} value="other">
                    Other
                  </Radiobutton>
                </Box>
              </RadioGroup>
            </Flex>
            <Flex direction="column" css={{ width: '100%' }}>
              <Text>Select the pets you own</Text>
              <Flex wrap="wrap" css={{ columnGap: '$4', rowGap: '$1' }}>
                <Box css={{ minWidth: '$13' }}>
                  <Checkbox value="bird">Bird</Checkbox>
                </Box>
                <Box css={{ minWidth: '$13' }}>
                  <Checkbox value="dog">Dog</Checkbox>
                </Box>
                <Box css={{ minWidth: '$13' }}>
                  <Checkbox value="cat">Cat</Checkbox>
                </Box>
                <Box css={{ minWidth: '$13' }}>
                  <Checkbox value="lizard">Lizard</Checkbox>
                </Box>
                <Box css={{ minWidth: '$13' }}>
                  <Checkbox value="turtle">Turtle</Checkbox>
                </Box>
                <Box css={{ minWidth: '$13' }}>
                  <Checkbox value="Rabbit">Rabbit</Checkbox>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            css={{
              width: '100%',
              gap: '$6',
              flexDirection: 'column',

              '@small': {
                width: '100%',
                flexDirection: 'row'
              }
            }}
          >
            <Flex direction="column" css={{ width: '100%', flex: 1 }}>
              <Text css={{ marginBottom: '$3' }}>What is your occupation?</Text>
              <Box>
                <Dropdown>
                  <DropdownTrigger>
                    <DropdownValue placeholder="Select" />
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownGroup>
                      <DropdownItem value="civil-engineer">
                        <DropdownSelectedIndicator />
                        <DropdownText>Civil engineer</DropdownText>
                      </DropdownItem>
                      <DropdownItem value="mechanical-engineer">
                        <DropdownSelectedIndicator />
                        <DropdownText>Mechanical Engineer</DropdownText>
                      </DropdownItem>
                      <DropdownItem value="software-developer">
                        <DropdownSelectedIndicator />
                        <DropdownText>Software developer</DropdownText>
                      </DropdownItem>
                      <DropdownItem value="social-scientist">
                        <DropdownSelectedIndicator />
                        <DropdownText>Social scientist</DropdownText>
                      </DropdownItem>
                      <DropdownItem value="chemical">
                        <DropdownSelectedIndicator />
                        <DropdownText>Chemical</DropdownText>
                      </DropdownItem>
                    </DropdownGroup>
                  </DropdownContent>
                </Dropdown>
              </Box>
            </Flex>
            <Flex direction="column" css={{ width: '100%', flex: 1 }}>
              <Text>What is your salary range?</Text>
              <Slider min={1000} max={30000} step={500} defaultValue={[0, 30000]} showRange />
            </Flex>
          </Flex>
          <Flex direction="column" css={{ width: '100%', marginTop: '$6' }}>
            <Text>I would like to receive promotions and marketing emails</Text>
            <Switch defaultChecked />
          </Flex>
          <Flex justify="flex-end" css={{ width: '100%', gap: '$10' }}>
            <ModalClose>
              <Button shape="soft" type="text" variant="danger">
                Cancel
              </Button>
            </ModalClose>
            <ModalClose>
              <Button shape="soft" type="solid" variant="success">
                Save
              </Button>
            </ModalClose>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

const SimpleModal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Modal>
      <ModalTrigger>{children}</ModalTrigger>
      <ModalContent>
        <ModalTitle>Simple modal</ModalTitle>
        <ModalDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec lectus ut turpis congue
          mattis vitae nec nibh. Duis pretium velit eget diam semper, id auctor dui congue. In at
          vestibulum odio. Maecenas imperdiet sodales leo, eu hendrerit ligula tempus at. Aenean at
          justo nec diam pretium interdum sed quis diam. Vivamus rutrum nulla sed facilisis
          vulputate. Fusce consequat turpis ante, non tincidunt lacus feugiat ornare.
        </ModalDescription>
        <ModalClose>
          <Button shape="soft" type="ghost" variant="danger">
            Close
          </Button>
        </ModalClose>
      </ModalContent>
    </Modal>
  );
};

const TextModal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Modal>
      <ModalTrigger>{children}</ModalTrigger>
      <ModalContent>
        <ModalTitle>Tall modal</ModalTitle>
        <ModalDescription>
          {Array(10)
            .fill(
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec lectus ut turpis congue
          mattis vitae nec nibh. Duis pretium velit eget diam semper, id auctor dui congue. In at
          vestibulum odio. Maecenas imperdiet sodales leo, eu hendrerit ligula tempus at. Aenean at
          justo nec diam pretium interdum sed quis diam. Vivamus rutrum nulla sed facilisis
          vulputate. Fusce consequat turpis ante, non tincidunt lacus feugiat ornare.`
            )
            .join('')}
        </ModalDescription>
      </ModalContent>
    </Modal>
  );
};

export default {
  title: 'Layout/Modal',
  component: Modal,
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
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<any> = ({ ...args }) => (
  <LapoProvider theme={blueLightTheme}>
    <Flex justify="space-evenly">
      <SimpleModal>
        <Button>Simple</Button>
      </SimpleModal>
      <CustomModal>
        <Button>Custom</Button>
      </CustomModal>
      <TextModal>
        <Button>Tall modal</Button>
      </TextModal>
    </Flex>
  </LapoProvider>
);

export const Default = Template.bind({});
