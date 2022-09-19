export const sizeTokens = (): { [key: string]: string } => {
    const baseValue: number = 4;
    const unity: string = 'px';
    const sizes: number[] = [.5, 1, 2, 4, 5, 6, 8, 10, 12, 16, 18, 24, 32];

    return sizes.reduce((acc: { [key: string]: string }, curr: number, index: number) => {
        return {
            ...acc,
            [`${index + 1}`]: `${curr * baseValue}${unity}`
        }
    }, {});
}