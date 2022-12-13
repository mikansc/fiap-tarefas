export const getFromStorage = <T>(key: string): T | undefined => {
  const storage = localStorage.getItem(key);
  if (storage) {
    const data: null = JSON.parse(storage);
    if (data) {
      return data;
    }
  }
};

export const setToStorage = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const clearStorage = () => {
  localStorage.clear();
};
