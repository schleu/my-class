import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.webp";
import { Button } from "../../../components/Button";
import { AppRoutes } from "../../../constants/AppRoutes";
import { useLogin } from "../../../hooks/useLogin";

export function MenuBar() {
  const { user } = useLogin();
  return (
    <div className="w-full h-20 flex justify-center fixed z-50 shadow-xl bg-light-100 font-Poppins ">
      <div className="max-w-screen-cut w-full h-full   flex justify-between items-center px-4 md:px-6">
        <Link to={AppRoutes.CLASS_DASHBOARD} className="h-full ">
          <img src={Logo} className="h-full py-4" />
        </Link>

        <div className="flex items-center gap-4">
          <Link to={AppRoutes.CLASS_PROFILE} className="flex items-center">
            <Button variant="outlined">{user?.fullName}</Button>
            <img
              src={user?.picture}
              alt=""
              className="w-12 h-12 rounded-full border border-primary"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
