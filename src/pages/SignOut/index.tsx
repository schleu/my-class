import { useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";

export function SignOutPage() {
  const { logoff } = useLogin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => logoff(), []);
  return <></>;
}
