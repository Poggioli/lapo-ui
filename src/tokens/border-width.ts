export const borderWidthTokens = (): { [key: string]: string } => {
    const baseValue: number = 4;
    const unity: string = 'px';
    const values: number[] = [.25, .5, 1];

    return values.reduce((acc: { [key: string]: string }, curr: number, index: number) => {
        return {
            ...acc,
            [`${index + 1}`]: `${curr * baseValue}${unity}`
        }
    }, {});
}