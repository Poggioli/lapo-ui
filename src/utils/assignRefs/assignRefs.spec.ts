import assignRefs from './assignRefs';

describe('assignRefs', () => {
  it('Should call the ref func with the right value', () => {
    const refFunc = jest.fn();
    const node = 'node';
    const assignRefFn = assignRefs(refFunc);
    assignRefFn(node);
    expect(refFunc).toHaveBeenCalledTimes(1);
    expect(refFunc).toHaveBeenCalledWith(node);
  });

  it('Should set current in ref func when ref is value not function', () => {
    const refFunc: any = {};
    const node = 'node';
    const assignRefFn = assignRefs(refFunc);
    assignRefFn(node);
    expect(refFunc.current).toBe(node);
  });

  it('Should not call the ref and not set the current value when ref is undefined', () => {
    const refFunc: any = undefined;
    const node = 'node';
    const assignRefFn = assignRefs(refFunc);
    assignRefFn(node);
    expect(refFunc).toBe(undefined);
  });
});
