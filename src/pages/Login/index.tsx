import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Text } from "../../components/Input";
import { Password } from "../../components/Input/password";
import { AppRoutes } from "../../constants/AppRoutes";
import { useCompany } from "../../hooks/useCompany";
import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";

export function LoginPage() {
  const { logoUrl } = useCompany();
  const { makeLogin } = useLogin();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function onSubmit() {
    setLoading(true);
    makeLogin("", "");

    setTimeout(() => {
      setLoading(false);

      setTimeout(() => {
        navigate(AppRoutes.CLASS_DASHBOARD);
      }, 500);
    }, 3000);
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <Link to={AppRoutes.HOME} className="mb-10 md:mb-20">
        <img src={logoUrl} alt="" className="w-[300px]" />
      </Link>

      <div
        className="
            max-w-[500px] max-h-[300px] h-screen w-full 
            flex flex-col justify-center items-center 
            rounded-xl py-6 px-10 shadow-2xl
            gap-8 bg-light-100
        "
      >
        <Text
          label="Email"
          placeholder="Insira seu email"
          value={"jonhdoe@myclass.com"}
        />

        <Password label="Senha" placeholder="Insira sua senha" value={123456} />

        <Button className="w-full" isLoading={loading} onClick={onSubmit}>
          Entrar
        </Button>
      </div>
    </div>
  );
}
