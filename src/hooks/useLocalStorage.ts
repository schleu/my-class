/* eslint-disable @typescript-eslint/no-explicit-any */
import { iLocalStorageKeys } from "../constants/LocalstorageKeys";

export function useLocalStorage(keyLS: iLocalStorageKeys) {
  function getLS(key: iLocalStorageKeys = keyLS) {
    const ls = localStorage.getItem(key);

    if (ls === null) {
      return {};
    }

    return JSON.parse(ls);
  }

  function setLS(key: iLocalStorageKeys, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  function removeLS(key: iLocalStorageKeys) {
    localStorage.removeItem(key);
  }

  return {
    getLS,
    setLS,
    removeLS,
  };
}
