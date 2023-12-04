import Logo from "../../../assets/logo.webp";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../contants/AppRoutes";

export function Header() {
  return (
    <div className="w-full h-20 flex justify-center fixed z-50 shadow-xl bg-light-100">
      <div className="max-w-screen-cut w-full h-full   flex justify-between items-center px-4 md:px-6">
        <Link to={AppRoutes.HOME} className="h-full ">
          <img src={Logo} className="h-full py-4" />
        </Link>

        <div className="flex gap-4">
          <Button variant="outlined">Entrar</Button>
          <Button>Criar Conta</Button>
        </div>
      </div>
    </div>
  );
}
