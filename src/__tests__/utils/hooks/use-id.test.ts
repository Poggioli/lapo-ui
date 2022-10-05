import useId from '../../../utils/hooks/use-id';

describe('useId hook', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call getElementById once', () => {
    jest.spyOn(document, 'getElementById').mockReturnValueOnce(null);
    expect(useId()).toEqual(expect.any(String));
    expect(document.getElementById).toHaveBeenCalledTimes(1);
  });

  it('should call getElementById more than once', () => {
    jest.spyOn(document, 'getElementById').mockReturnValueOnce(document.createElement('div'));
    expect(useId()).toEqual(expect.any(String));
    expect(document.getElementById).toHaveBeenCalledTimes(2);
  });

  it('should return value with prefix', () => {
    jest.spyOn(document, 'getElementById').mockReturnValueOnce(null);
    expect(useId('prefix')).toContain('prefix');
  });
});
