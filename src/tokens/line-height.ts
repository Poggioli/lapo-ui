export const lineHeightTokens = (): { [key: string]: string } => {
    const baseValue: number = 100;
    const prefix: string = 'line-height';
    const unity: string = '%';
    const sizes: number[] = [1.2, 1.5];

    return sizes.reduce((acc: { [key: string]: string }, curr: number, index: number) => {
        return {
            ...acc,
            [`${prefix}.${index + 1}`]: `${curr * baseValue}${unity}`
        }
    }, {});
}