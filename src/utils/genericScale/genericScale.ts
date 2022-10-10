export type GenericScale = {
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
  200: string;
  300: string;
};

const SCALE_SIZE: number = 12;

export const specificScaleToGenericScale = (specificScale: any): GenericScale => {
  const specificValues: string[] = Object.values(specificScale);

  if (specificValues.length !== SCALE_SIZE) {
    throw new Error(`You should pass a color scale with ${SCALE_SIZE} values`);
  }

  const genericScale: any = {
    10: '',
    20: '',
    30: '',
    40: '',
    50: '',
    60: '',
    70: '',
    80: '',
    90: '',
    100: '',
    200: '',
    300: ''
  };

  const genericKeys: string[] = Object.keys(genericScale);

  specificValues.forEach((specificValue: string, index: number) => {
    genericScale[genericKeys[index]] = specificValue;
  });

  return genericScale as GenericScale;
};
