export const letterSpaceTokens = (): { [key: string]: string } => {
    const baseValue: number = 10;
    const prefix: string = 'letter-space';
    const unity: string = '%';
    const sizes: number[] = [-.5, -.25, 0, .25, .5, 1];

    return sizes.reduce((acc: { [key: string]: string }, curr: number, index: number) => {
        return {
            ...acc,
            [`${prefix}.${index + 1}`]: `${curr * baseValue}${unity}`
        }
    }, {});
}