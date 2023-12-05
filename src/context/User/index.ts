import { createContext } from "react";

interface iUser {
  name: string;
}

interface iAuth {
  token: string;
  refreshToken: string;
}

interface Props {
  user: iUser;
  auth: iAuth;
  makeLogin: (email: string, senha: string) => void;
}

export const UserContext = createContext<Props>({
  user: {
    name: "",
  },
  auth: {
    token: "",
    refreshToken: "",
  },
  makeLogin: () => {},
});
