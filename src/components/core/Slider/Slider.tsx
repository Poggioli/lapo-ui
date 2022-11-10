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
    const [ownValue, setOwnValue] = useState<number[]>(value || ownDefaultValue);

    const ownOnValueChange = useCallback((value: number[]) => {
      onValueChange && onValueChange(value);
      setOwnValue(value);
    }, []);

    return (
      <Container orientation={orientation}>
        {showRange ? (
          <RangeValue
            role="range"
            aria-label={`${inverted ? max : min}`}
            variant="body1"
            disabled={disabled}
          >
            {inverted ? max : min}
          </RangeValue>
        ) : null}
        <StyledRoot
          {...props}
          id={ownId}
          ref={forwardedRef}
          disabled={disabled}
          inverted={inverted}
          min={min}
          max={max}
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
            aria-label={`${inverted ? min : max}`}
            variant="body1"
            disabled={disabled}
          >
            {inverted ? min : max}
          </RangeValue>
        ) : null}
      </Container>
    );
  }
) as SliderComponent;

Slider.defaultProps = {
  showRange: false,
  disabled: false,
  inverted: false,
  min: 0,
  max: 100,
  orientation: 'horizontal'
};

export { Slider };

/* -----------------------------------------------------------------------------------------------*/
