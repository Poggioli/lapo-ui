import { Text } from '@components/typograph/Text';
import { ComponentCSSProp, LapoVariants } from '@lapo';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { useMemo } from 'react';
import {
  StyledContainer,
  StyledContent,
  StyledGroup,
  StyledIcon,
  StyledItem,
  StyledItemIndicator,
  StyledItemText,
  StyledLabel,
  StyledPortal,
  StyledScrollDownButton,
  StyledScrollUpButton,
  StyledSeparator,
  StyledTrigger,
  StyledValue,
  StyledViewport
} from './styles';

const DropdownGroup = StyledGroup;
const DropdownSeparator = StyledSeparator;
const DropdownValue = StyledValue;

/* -------------------------------------------------------------------------------------------------
 * Dropdown Trigger
 * -----------------------------------------------------------------------------------------------*/
type DropdownIconCSSProp = ComponentCSSProp;
type DropdownIconVariants = LapoVariants<typeof StyledTrigger>;
type DropdownIconProps = DropdownIconCSSProp & DropdownIconVariants;

type DropdownIconComponent = Polymorphic.ForwardRefComponent<
  typeof StyledTrigger,
  DropdownIconProps
>;

const DropdownIcon = React.forwardRef(({ ...props }, forwardedRef) => {
  const customId: string = useMemo(() => useId('dropdown-icon'), []);
  return (
    <StyledIcon
      {...props}
      id={customId}
      ref={forwardedRef}
      asChild
      css={{
        minHeight: '$5',
        minWidth: '$5'
      }}
    >
      <ChevronDownIcon />
    </StyledIcon>
  );
}) as DropdownIconComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Dropdown Trigger
 * -----------------------------------------------------------------------------------------------*/
type DropdownTriggerCSSProp = ComponentCSSProp;
type DropdownTriggerVariants = LapoVariants<typeof StyledTrigger>;
type DropdownTriggerProps = DropdownTriggerCSSProp & DropdownTriggerVariants & { id?: string };

type DropdownTriggerComponent = Polymorphic.ForwardRefComponent<
  typeof StyledTrigger,
  DropdownTriggerProps
>;

const DropdownTrigger = React.forwardRef(({ id, children, type, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('dropdown-trigger'), [id]);
  return (
    <StyledTrigger
      {...props}
      id={customId}
      ref={forwardedRef}
      role="combobox"
      aria-label="combobox"
    >
      {children}
      <DropdownIcon />
    </StyledTrigger>
  );
}) as DropdownTriggerComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Dropdown Scroll Down Button
 * -----------------------------------------------------------------------------------------------*/
type DropdownScrollUpButtonCSSProp = ComponentCSSProp;
type DropdownScrollUpButtonVariants = LapoVariants<typeof StyledScrollUpButton>;
type DropdownScrollUpButtonProps = DropdownScrollUpButtonCSSProp & DropdownScrollUpButtonVariants;

type DropdownScrollUpButtonComponent = Polymorphic.ForwardRefComponent<
  typeof StyledScrollUpButton,
  DropdownScrollUpButtonProps
>;

const DropdownScrollUpButton = React.forwardRef(({ ...props }, forwardedRef) => {
  const id: string = useMemo(() => useId('dropdown-scroll-up-button'), []);
  return (
    <StyledScrollUpButton {...props} id={id} ref={forwardedRef}>
      <ChevronUpIcon />
    </StyledScrollUpButton>
  );
}) as DropdownScrollUpButtonComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Dropdown Scroll Down Button
 * -----------------------------------------------------------------------------------------------*/
type DropdownScrollDownButtonCSSProp = ComponentCSSProp;
type DropdownScrollDownButtonVariants = LapoVariants<typeof StyledScrollDownButton>;
type DropdownScrollDownButtonProps = DropdownScrollDownButtonCSSProp &
  DropdownScrollDownButtonVariants;

type DropdownScrollDownButtonComponent = Polymorphic.ForwardRefComponent<
  typeof StyledScrollDownButton,
  DropdownScrollDownButtonProps
>;

const DropdownScrollDownButton = React.forwardRef(({ ...props }, forwardedRef) => {
  const id: string = useMemo(() => useId('dropdown-scroll-down-button'), []);
  return (
    <StyledScrollDownButton {...props} id={id} ref={forwardedRef}>
      <ChevronDownIcon />
    </StyledScrollDownButton>
  );
}) as DropdownScrollDownButtonComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Dropdown Group Label
 * -----------------------------------------------------------------------------------------------*/
type DropdownGroupLabelCSSProp = ComponentCSSProp;
type DropdownGroupLabelVariants = LapoVariants<typeof StyledLabel>;
type DropdownGroupLabelProps = DropdownGroupLabelCSSProp &
  DropdownGroupLabelVariants & { id?: string };

type DropdownGroupLabelComponent = Polymorphic.ForwardRefComponent<
  typeof StyledLabel,
  DropdownGroupLabelProps
>;

const DropdownGroupLabel = React.forwardRef(({ id, children, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('dropdown-group-label'), [id]);
  return (
    <StyledLabel {...props} id={customId} ref={forwardedRef} asChild>
      <Text variant="auxiliary" color="grayColoredLowContrast">
        {children}
      </Text>
    </StyledLabel>
  );
}) as DropdownGroupLabelComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Dropdown Selected Indicator
 * -----------------------------------------------------------------------------------------------*/
type DropdownSelectedIndicatorCSSProp = ComponentCSSProp;
type DropdownSelectedIndicatorVariants = LapoVariants<typeof StyledItemIndicator>;
type DropdownSelectedIndicatorProps = DropdownSelectedIndicatorCSSProp &
  DropdownSelectedIndicatorVariants & { id?: string };

type DropdownSelectedIndicatorComponent = Polymorphic.ForwardRefComponent<
  typeof StyledItemIndicator,
  DropdownSelectedIndicatorProps
>;

const DropdownSelectedIndicator = React.forwardRef(({ id, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('dropdown-selected-indicator'), [id]);
  return (
    <StyledItemIndicator {...props} id={customId} ref={forwardedRef}>
      <CheckIcon />
    </StyledItemIndicator>
  );
}) as DropdownSelectedIndicatorComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Dropdown Text
 * -----------------------------------------------------------------------------------------------*/
type DropdownTextCSSProp = ComponentCSSProp;
type DropdownTextVariants = LapoVariants<typeof StyledItemText>;
type DropdownTextProps = DropdownTextCSSProp & DropdownTextVariants & { id?: string };

type DropdownTextComponent = Polymorphic.ForwardRefComponent<
  typeof StyledItemText,
  DropdownTextProps
>;

const DropdownText = React.forwardRef(({ id, children, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('dropdown-text'), [id]);
  return (
    <StyledItemText {...props} id={customId} ref={forwardedRef} asChild>
      <Text variant="body2">{children}</Text>
    </StyledItemText>
  );
}) as DropdownTextComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Dropdown Item
 * -----------------------------------------------------------------------------------------------*/
type DropdownItemCSSProp = ComponentCSSProp;
type DropdownItemVariants = LapoVariants<typeof StyledItem>;
type DropdownItemProps = DropdownItemCSSProp & DropdownItemVariants & { id?: string };

type DropdownItemComponent = Polymorphic.ForwardRefComponent<typeof StyledItem, DropdownItemProps>;

const DropdownItem = React.forwardRef(({ id, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('dropdown-item'), [id]);
  return <StyledItem {...props} id={customId} ref={forwardedRef} role="option" />;
}) as DropdownItemComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Dropdown Content
 * -----------------------------------------------------------------------------------------------*/
type DropdownContentCSSProp = ComponentCSSProp;
type DropdownContentVariants = LapoVariants<typeof StyledContent>;
type DropdownContentProps = DropdownContentCSSProp & DropdownContentVariants & { id?: string };

type DropdownContentComponent = Polymorphic.ForwardRefComponent<
  typeof StyledContent,
  DropdownContentProps
>;

const DropdownContent = React.forwardRef(({ id, children, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('dropdown-content'), [id]);
  return (
    <StyledPortal>
      <StyledContent {...props} id={customId} ref={forwardedRef}>
        <DropdownScrollUpButton />
        <StyledViewport>{children}</StyledViewport>
        <DropdownScrollDownButton />
      </StyledContent>
    </StyledPortal>
  );
}) as DropdownContentComponent;
/* -----------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
 * Dropdown
 * -----------------------------------------------------------------------------------------------*/

type DropdownCSSProp = ComponentCSSProp;
type DropdownVariants = LapoVariants<typeof StyledContainer>;
type DropdownProps = DropdownCSSProp & DropdownVariants & { id?: string };

type DropdownComponent = Polymorphic.ForwardRefComponent<typeof StyledContainer, DropdownProps>;

const Dropdown = React.forwardRef(({ id, children, ...props }, forwardedRef) => {
  const customId: string = useMemo(() => id || useId('dropdown-root'), [id]);

  return (
    <StyledContainer {...props} id={customId} ref={forwardedRef}>
      {children}
    </StyledContainer>
  );
}) as DropdownComponent;
/* -----------------------------------------------------------------------------------------------*/

export {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownText,
  DropdownSelectedIndicator,
  DropdownGroupLabel,
  DropdownGroup,
  DropdownSeparator,
  DropdownTrigger,
  DropdownValue
};
