import useId from './useId';

describe('Given a document', () => {

  it('should return a id without prefix', () => {
    const id: string = useId();
    expect(id).not.toContain('-');
  });

  it('should return a id with prefix', () => {
    const id: string = useId('prefix');
    expect(id).toContain('prefix-');
  });

  it('should generate new id when id already exists in document', () => {
    const getElementByIdFn = jest.fn()
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false);

    Object.defineProperty(global.document, 'getElementById', { value: getElementByIdFn });

    const id: string = useId('prefix');

    expect(getElementByIdFn).toHaveBeenCalledTimes(2);
  });

});
