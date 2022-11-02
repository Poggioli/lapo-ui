import { ComponentCSSProp, LapoVariants } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import assignRefs from '@utils/assignRefs/assignRefs';
import useId from '@utils/hooks/useId';
import React, { FocusEvent, useCallback, useMemo, useRef, useState } from 'react';
import { Container, GhostLine, Label, StyledInput } from './styles';

/* -------------------------------------------------------------------------------------------------
 * Input
 * -----------------------------------------------------------------------------------------------*/

type InputCSSProp = ComponentCSSProp;
type InputVariants = LapoVariants<typeof StyledInput>;
export type InputProps = InputCSSProp & InputVariants & { label: string };

type InputComponent = Polymorphic.ForwardRefComponent<typeof StyledInput, InputProps>;

const Input = React.forwardRef(
  ({ id, placeholder, label, value, shape, variant, onFocus, onBlur, ...props }, forwardedRef) => {
    const customId: string = useMemo(() => id || useId('input'), [id]);
    const [ownPlaceholder, setOwnPlaceholder] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const labelRef = useRef<HTMLLabelElement | null>(null);

    const ownOnFocus = useCallback((event: FocusEvent<HTMLInputElement, Element>): void => {
      onFocus && onFocus(event);
      setTimeout(() => {
        setOwnPlaceholder(placeholder);
      }, 150);
    }, []);

    const ownOnBlur = useCallback((event: FocusEvent<HTMLInputElement, Element>): void => {
      onBlur && onBlur(event);
      setOwnPlaceholder('');
    }, []);

    return (
      <Container shape={shape} variant={variant}>
        <StyledInput
          {...props}
          shape={shape}
          variant={variant}
          value={value}
          onFocus={ownOnFocus}
          onBlur={ownOnBlur}
          placeholder={ownPlaceholder}
          id={customId}
          ref={assignRefs(inputRef, forwardedRef)}
        />
        <Label
          as="label"
          ref={labelRef}
          htmlFor={customId}
          isFocused={document.activeElement === inputRef.current}
          isFilled={!!inputRef.current?.value.length}
        >
          {label}
        </Label>
        <GhostLine
          isFilled={!!inputRef.current?.value.length}
          shape={shape}
          css={{
            width: `${labelRef.current?.clientWidth + 6}px`
          }}
        />
      </Container>
    );
  }
) as InputComponent;

export { Input };

/* -----------------------------------------------------------------------------------------------*/
