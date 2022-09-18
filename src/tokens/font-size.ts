export const fontSizeTokens = (): { [key: string]: string } => {
    const baseValue: number = 16;
    const prefix: string = 'font-size';
    const unity: string = 'px';
    const values: number[] = [.625, .75, .875, 1, 1.125, 1.5, 2, 2.5, 3, 4];

    return values.reduce((acc: { [key: string]: string }, curr: number, index: number) => {
        return {
            ...acc,
            [`${prefix}.${index + 1}`]: `${curr * baseValue}${unity}`
        }
    }, {});
}