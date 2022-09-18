export const fontFamilyTokens = (): { [key: string]: string } => {
    const prefix: string = 'font-family';
    const values: string[] = ['Nunito', 'Roboto'];

    return values.reduce((acc: { [key: string]: string }, curr: string, index: number) => {
        return {
            ...acc,
            [`${prefix}.${index + 1}`]: `${curr}`
        }
    }, {});
}