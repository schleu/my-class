/* eslint-disable @typescript-eslint/no-explicit-any */
import { LocalStorageKeys } from "../constants/LocalstorageKeys";

export function useLocalStorage() {
  function getLS(key: LocalStorageKeys) {
    const ls = localStorage.getItem(key);

    if (ls === null) {
      return {};
    }

    return JSON.parse(ls);
  }

  function setLS(key: LocalStorageKeys, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  function removeLS(key: LocalStorageKeys) {
    localStorage.removeItem(key);
  }

  return {
    getLS,
    setLS,
    removeLS,
  };
}
