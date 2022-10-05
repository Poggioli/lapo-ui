export const fontSizeTokens = (): { [key: string]: string } => {
  const baseValue: number = 16;
  const unity: string = 'px';
  const values: number[] = [0.625, 0.75, 0.875, 1, 1.125, 1.5, 2, 2.5, 3, 4];

  return values.reduce((acc: { [key: string]: string }, curr: number, index: number) => {
    return {
      ...acc,
      [`${index + 1}`]: `${curr * baseValue}${unity}`
    };
  }, {});
};
