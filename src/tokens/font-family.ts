export const fontFamilyTokens = (): { [key: string]: string } => {
  const values: string[] = ['Nunito', 'Roboto'];

  return values.reduce((acc: { [key: string]: string }, curr: string, index: number) => {
    return {
      ...acc,
      [`${index + 1}`]: `${curr}`
    };
  }, {});
};
