import { ReactNode, useEffect, useState } from "react";
import { AppRoutes } from "../../constants/AppRoutes";
import { UserContext, iAuth, iUser } from "../../context/User";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { UserMoked } from "../../moked/user";
import { getLogin } from "../../services/Login";

interface iData {
  user: iUser;
  auth: iAuth;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const { setLS, getLS, removeLS } = useLocalStorage("AUTH");

  const auth: iData | null = getLS("AUTH");

  const [data, setData] = useState<iData | null>(auth);

  useEffect(() => {
    if (data === null) {
      if (auth !== null) {
        setData(auth);
      } else {
        console.error("User not logged");
        location.href = AppRoutes.SIGN_IN;
      }
    } else {
      setLS("AUTH", data);
    }
  }, [auth, data, setLS]);

  async function makeLogin(email: string, senha: string) {
    console.info("makeLogin", email, senha);
    const res = await getLogin();

    const user: iUser = UserMoked;

    setData({
      user,
      auth: {
        token: res.token,
        refreshToken: res.refresh,
      },
    });
  }

  function logoff() {
    setData(null);
    removeLS("AUTH");
    location.href = AppRoutes.HOME;
  }

  return (
    <UserContext.Provider value={{ ...data, makeLogin, logoff }}>
      {children}
    </UserContext.Provider>
  );
}
