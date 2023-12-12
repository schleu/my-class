import { createContext } from "react";

export interface iLocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
}

export interface iUser {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  picture?: string;
  location?: iLocation;
}

export interface iAuth {
  token: string;
  refreshToken: string;
}

interface Props {
  user?: iUser;
  auth?: iAuth;
  makeLogin: (email: string, senha: string) => void;
  logoff: () => void;
}

export const UserContext = createContext<Props>({
  user: {
    id: "",
    fullName: "",
    firstName: "",
    lastName: "",
    picture: "",
    email: "",
    phone: "",
  },
  auth: {
    token: "",
    refreshToken: "",
  },
  makeLogin: () => {},
  logoff: () => {},
});
