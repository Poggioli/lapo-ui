import { v4 as uuid } from 'uuid';

const useId = (prefix: string = '') => {
    const newPrefix: string = prefix ? `${prefix}-` : '';
    let id = `${newPrefix}${uuid().slice(0, 8)}`;

    while(document.getElementById(id)) {
        id = `${newPrefix}${uuid().slice(0, 8)}`;
    }

    return id;
};

export default useId;