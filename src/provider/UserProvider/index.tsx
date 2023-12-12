import { ReactNode, useEffect, useState } from "react";
import { LocalStorageKeys } from "../../constants/LocalstorageKeys";
import { UserContext, iAuth, iUser } from "../../context/User";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getLogin } from "../../services/Login";
import { AppRoutes } from "../../constants/AppRoutes";
import { UserMoked } from "../../moked/user";

interface iData {
  user: iUser;
  auth: iAuth;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const { setLS, getLS, removeLS } = useLocalStorage();

  const auth: iData | null = getLS(LocalStorageKeys.AUTH);

  const [data, setData] = useState<iData | null>(auth);

  useEffect(() => {
    if (data === null) {
      if (auth !== null) {
        setData(auth);
      } else {
        console.error("User not logged");
        // location.href = AppRoutes.HOME;
      }
    } else {
      setLS(LocalStorageKeys.AUTH, data);
    }
  }, [auth, data, setLS]);

  async function makeLogin(email: string, senha: string) {
    console.log("makeLogin", email, senha);
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
    removeLS(LocalStorageKeys.AUTH);
    location.href = AppRoutes.HOME;
  }

  return (
    <UserContext.Provider value={{ ...data, makeLogin, logoff }}>
      {children}
    </UserContext.Provider>
  );
}
