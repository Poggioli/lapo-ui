export const borderRadiusTokens = (): { [key: string]: string } => {
    const baseValue: number = 4;
    const unity: string = 'px';
    const values: number[] = [1, 2, 4, 100];

    return values.reduce((acc: { [key: string]: string }, curr: number, index: number) => {
        return {
            ...acc,
            [`${index + 1}`]: `${curr * baseValue}${unity}`
        }
    }, {});
}