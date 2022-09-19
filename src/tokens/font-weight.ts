export const fontWeightTokens = (): { [key: string]: string } => {
    const values: string[] = ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold'];

    return values.reduce((acc: { [key: string]: string }, curr: string, index: number) => {
        return {
            ...acc,
            [`${index + 1}`]: `${curr}`
        }
    }, {});
}