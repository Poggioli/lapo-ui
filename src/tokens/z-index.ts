export const zIndexTokens = (): { [key: string]: string } => {
  const values: string[] = [
    '100',
    '400',
    '510',
    '512',
    '513',
    '514',
    '515',
    '516',
    '517',
    '518',
    '519',
    '520'
  ];

  return values.reduce((acc: { [key: string]: string }, curr: string, index: number) => {
    return {
      ...acc,
      [`${index + 1}`]: `${curr}`
    };
  }, {});
};
