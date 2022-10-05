export const letterSpaceTokens = (): { [key: string]: string } => {
  const baseValue: number = 10;
  const unity: string = '%';
  const sizes: number[] = [-0.5, -0.25, 0, 0.25, 0.5, 1];

  return sizes.reduce((acc: { [key: string]: string }, curr: number, index: number) => {
    return {
      ...acc,
      [`${index + 1}`]: `${curr * baseValue}${unity}`
    };
  }, {});
};
