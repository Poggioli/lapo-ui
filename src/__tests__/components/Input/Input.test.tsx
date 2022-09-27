import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React, { ComponentProps } from "react";
import { Input } from "../../../components/Input/Input";

describe('Given a default Input', () => {
    const label: string = "Test Input";
    let rendered: RenderResult;
    let input: HTMLElement;

    const renderComponent = ({ ...props }: Partial<ComponentProps<typeof Input>>) => {
        rendered = render(<Input {...props} label={label} />);
        input = rendered.queryByLabelText(label) as HTMLElement;
    }

    it('should have no a11y violations', async () => {
        renderComponent({});
        expect(await axe(rendered.container)).toHaveNoViolations();
    });

    it('should call onFocus when it\'s defined and user focus on Input', () => {
        const onFocusFn = jest.fn();
        renderComponent({ onFocus: onFocusFn });
        input.focus();
        expect(onFocusFn).toHaveBeenCalledTimes(1);
    });

    it('should call onBlur when it\'s defined and user blur on Input', () => {
        const onBlurFn = jest.fn();
        renderComponent({ onBlur: onBlurFn });
        input.focus();
        input.blur();
        expect(onBlurFn).toHaveBeenCalledTimes(1);
    });

    it('should call onChange when it\'s defined and user change value', () => {
        const userType: string = 'test onchange';
        const onChangeFn = jest.fn();
        renderComponent({ onChange: onChangeFn });
        userEvent.type(input, userType);
        expect(onChangeFn).toHaveBeenCalledTimes(userType.length);
    });

    it('should has the value when user insert value', () => {
        const userType: string = 'test onchange';
        renderComponent({});
        userEvent.type(input, userType);
        input.blur();
        const inputWithValue = rendered.getByDisplayValue(userType);
        expect(inputWithValue).toBeVisible()
    });

    it('should not have the placeholder when input it\'s not focused', () => {
        const placeholder: string = 'Placeholder test';
        renderComponent({ placeholder });
        expect(rendered.queryByPlaceholderText(placeholder)).toBeNull()
    });

    it('should have the placeholder when input it\'s focused and empty', () => {
        const placeholder: string = 'Placeholder test';
        renderComponent({ placeholder });
        input.focus();
        expect(rendered.queryByPlaceholderText(placeholder)).toBeVisible()
    });

    it('should have * sign in label when field is required', () => {
        renderComponent({ required: true });
        const requiredInput = rendered.getByLabelText("*Test Input");
        expect(requiredInput).toBeVisible();
    });

    it('should not have * sign in label when field is not required', () => {
        renderComponent({ required: false });
        const input = rendered.getByLabelText(label);
        expect(input).toBeVisible();
    });

    it('should return a text when call toString of component', () => {
        expect(Input.toString()).toBe('.c-DHeqy')
    });
});