const generateRandomId = () => {
  return Math.random().toString(36).slice(2, 10);
};

const useId = (prefix: string = '') => {
  const formattedPrefix: string = prefix ? `${prefix}-` : '';
  let id = '';

  do {
    id = `${formattedPrefix}${generateRandomId()}`;
  } while (document.getElementById(id));

  return id;
};

export default useId;
