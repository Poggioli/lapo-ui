import { render, RenderResult } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { axe } from "jest-axe";
import React, { ComponentProps } from "react";
import { Checkbox } from "../../../components/Checkbox";

describe('Given a default Checkbox', () => {
    const label: string = "Test Checkbox";
    let rendered: RenderResult;
    let checkbox: HTMLElement;

    const renderComponent = ({ ...props }: Partial<ComponentProps<typeof Checkbox>>) => {
        rendered = render(<Checkbox {...props} label={label} />);
        checkbox = rendered.getByLabelText(label)
    }

    it('should have no a11y violations', async () => {
        renderComponent({});
        expect(await axe(rendered.container)).toHaveNoViolations();
    });

    it('should call onCheckedChange when user check the checkbox', () => {
        const onCheckedChange = jest.fn();
        renderComponent({ onCheckedChange });
        userEvent.click(checkbox);
        expect(onCheckedChange).toHaveBeenCalledTimes(1);
    });

    describe('When user check the checkbox', () => {

        beforeEach(() => {
            renderComponent({});
            userEvent.click(checkbox);
        })

        it('should show check icon', () => {
            const checkboxChecked: HTMLElement = rendered.getByRole('checkbox');
            expect(checkboxChecked).toHaveAttribute('aria-checked', 'true')
            expect(checkboxChecked).toHaveAttribute('data-state', 'checked')
        });

        it('and click in the same checlbox, should not show the icon', () => {
            userEvent.click(checkbox);
            const checkboxChecked: HTMLElement = rendered.getByRole('checkbox');
            expect(checkboxChecked).toHaveAttribute('aria-checked', 'false')
            expect(checkboxChecked).toHaveAttribute('data-state', 'unchecked')
        });
    });

    it('should show indeterminate icon', () => {
        renderComponent({ checked: 'indeterminate' });
        const checkboxChecked: HTMLElement = rendered.getByRole('checkbox');
        expect(checkboxChecked).toHaveAttribute('aria-checked', 'mixed')
        expect(checkboxChecked).toHaveAttribute('data-state', 'indeterminate')
    });
});