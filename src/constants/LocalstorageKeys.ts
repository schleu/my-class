const companyName: string = import.meta.env.VITE_APP_COMPANY || "";
const version = APP_VERSION;
const prefix = `${companyName}_${version}`;

export const LocalStorageKeys = {
  AUTH: `${prefix}_AUTH`,
  CONFIG: `${prefix}_CONFIG`,
};

export type iLocalStorageKeys = keyof typeof LocalStorageKeys;
