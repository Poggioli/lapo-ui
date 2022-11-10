import { GenericScale, specificScaleToGenericScale } from './genericScale';

describe('Generic scale', () => {
  it("should throw an error when scale don't have 12 items", () => {
    const specificScale: any = {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11'
    };

    expect(() => specificScaleToGenericScale(specificScale)).toThrow(
      'You should pass a color scale with 12 values'
    );
  });

  it('should return the specific scale converted to generic scale', () => {
    const specificScale: any = {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12'
    };

    const expectedGenericScale: GenericScale = {
      10: '1',
      20: '2',
      30: '3',
      40: '4',
      50: '5',
      60: '6',
      70: '7',
      80: '8',
      90: '9',
      100: '10',
      200: '11',
      300: '12'
    };

    const genericScale: GenericScale = specificScaleToGenericScale(specificScale);

    expect(genericScale).toStrictEqual(expectedGenericScale);
  });

  it('should return the specific scale converted to generic scale with prefix', () => {
    const specificScale: any = {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12'
    };

    const expectedGenericScale: GenericScale = {
      'prefix-10': '1',
      'prefix-20': '2',
      'prefix-30': '3',
      'prefix-40': '4',
      'prefix-50': '5',
      'prefix-60': '6',
      'prefix-70': '7',
      'prefix-80': '8',
      'prefix-90': '9',
      'prefix-100': '10',
      'prefix-200': '11',
      'prefix-300': '12'
    };

    const genericScale: GenericScale = specificScaleToGenericScale(specificScale, 'prefix');

    expect(genericScale).toStrictEqual(expectedGenericScale);
  });
});
