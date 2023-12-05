import { ReactNode, useState, useEffect } from "react";
import { UserContext } from "../../context/User";
import { getLogin } from "../../services/Login";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LocalStorageKeys } from "../../constants/LocalstorageKeys";

export function UserProvider({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState({
    user: {
      name: "",
    },
    auth: {
      token: "",
      refreshToken: "",
    },
  });

  const { setLS } = useLocalStorage();

  useEffect(() => {
    setLS(LocalStorageKeys.AUTH, data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  async function makeLogin(email: string, senha: string) {
    console.log(email, senha);
    const res = await getLogin();

    const user = {
      name: "Jonh Doe",
    };

    setData({
      user,
      auth: {
        token: res.token,
        refreshToken: res.refresh,
      },
    });
  }

  return (
    <UserContext.Provider value={{ ...data, makeLogin }}>
      {children}
    </UserContext.Provider>
  );
}
