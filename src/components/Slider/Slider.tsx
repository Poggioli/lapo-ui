import { ComponentCSSProp, LapoVariants } from '@lapo';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import useId from '@utils/hooks/useId';
import React, { useCallback, useMemo, useState } from 'react';
import {
  Container,
  RangeValue,
  StyledRange,
  StyledRoot,
  StyledThumb,
  StyledTrack,
  StyledValue
} from './styles';

/* -------------------------------------------------------------------------------------------------
 * Slider
 * -----------------------------------------------------------------------------------------------*/

type SliderCSSProp = ComponentCSSProp;
type SliderVariants = LapoVariants<typeof StyledRoot>;
type SliderProps = SliderCSSProp &
  SliderVariants & {
    showRange?: boolean;
  };

type SliderComponent = Polymorphic.ForwardRefComponent<typeof StyledRoot, SliderProps>;

const Slider = React.forwardRef(
  (
    {
      id,
      showRange,
      min,
      max,
      inverted,
      defaultValue,
      orientation,
      value,
      disabled,
      onValueChange,
      ...props
    },
    forwardedRef
  ) => {
    const ownId: string = useMemo(() => id || useId('slider'), [id]);
    const ownDefaultValue: number[] = defaultValue || value || [0];
    const ownMin: number = min || 0;
    const ownMax: number = max || 100;
    const [ownValue, setownValue] = useState<number[]>(value || ownDefaultValue);

    const ownOnValueChange = useCallback((value: number[]) => {
      onValueChange && onValueChange(value);
      setownValue(value);
    }, []);

    return (
      <Container orientation={orientation}>
        {showRange ? (
          <RangeValue
            role="range"
            aria-label={`${inverted ? ownMax : ownMin}`}
            variant="body1"
            disabled={disabled}
          >
            {inverted ? ownMax : ownMin}
          </RangeValue>
        ) : null}
        <StyledRoot
          {...props}
          id={ownId}
          ref={forwardedRef}
          disabled={disabled}
          inverted={inverted}
          min={ownMin}
          max={ownMax}
          orientation={orientation}
          defaultValue={ownDefaultValue}
          onValueChange={ownOnValueChange}
        >
          <StyledTrack>
            <StyledRange />
          </StyledTrack>
          {ownDefaultValue.map((_, index) => (
            <StyledThumb key={index} aria-label={`Slider ${index}`}>
              <StyledValue variant="body2">{ownValue[index]}</StyledValue>
            </StyledThumb>
          ))}
        </StyledRoot>
        {showRange ? (
          <RangeValue
            role="range"
            aria-label={`${inverted ? ownMin : ownMax}`}
            variant="body1"
            disabled={disabled}
          >
            {inverted ? ownMin : ownMax}
          </RangeValue>
        ) : null}
      </Container>
    );
  }
) as SliderComponent;

export { Slider };

/* -----------------------------------------------------------------------------------------------*/
