import Logo from "../../../assets/logo.webp";
import { Button } from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../constants/AppRoutes";

export function Header() {
  const navigate = useNavigate();

  function redirect(link: AppRoutes) {
    navigate(link);
  }

  return (
    <div className="w-full h-20 flex justify-center fixed z-50 shadow-xl bg-light-100 bounceInDown">
      <div className="max-w-screen-cut w-full h-full   flex justify-between items-center px-4 md:px-6">
        <Link to={AppRoutes.HOME} className="h-full ">
          <img src={Logo} className="h-full py-4" />
        </Link>

        <div className="flex gap-4">
          <Button
            variant="outlined"
            onClick={() => redirect(AppRoutes.SIGN_IN)}
          >
            Entrar
          </Button>

          <Button onClick={() => redirect(AppRoutes.SIGN_UP)}>
            Criar Conta
          </Button>
        </div>
      </div>
    </div>
  );
}
