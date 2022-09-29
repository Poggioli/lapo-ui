
const generateRandomId = () => {
    return Math.random().toString(36).slice(2, 10);
}

const useId = (prefix: string = '') => {
    const newPrefix: string = prefix ? `${prefix}-` : '';
    let id = '';

    do {
        id = `${newPrefix}${generateRandomId()}`;
    } while(document.getElementById(id))

    return id;
};

export default useId;