import { useContext } from "react";
import { UserContext } from "../context/User";

export function useLogin() {
  const context = useContext(UserContext);

  return context;
}
