export const fontWeightTokens = (): { [key: string]: string } => {
    const prefix: string = 'font-weight';
    const values: string[] = ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold'];

    return values.reduce((acc: { [key: string]: string }, curr: string, index: number) => {
        return {
            ...acc,
            [`${prefix}.${index + 1}`]: `${curr}`
        }
    }, {});
}