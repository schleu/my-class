import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.webp";
import { AppRoutes } from "../../../constants/AppRoutes";
import { useLogin } from "../../../hooks/useLogin";
import { MenuMobile } from "./MenuMobile";

export function MenuBar() {
  const { user } = useLogin();
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => setShowMenu((e) => !e);

  return (
    <div className="w-full h-20 flex justify-center fixed z-50 shadow-xl bg-light-100">
      <div className="max-w-screen-cut w-full h-full flex justify-between items-center px-4 md:px-6">
        <div className="md:hidden" onClick={toggleShowMenu}>
          <GiHamburgerMenu size={24} />
        </div>

        <Link to={AppRoutes.CLASS_DASHBOARD} className="h-full">
          <img src={Logo} className="h-full py-4" />
        </Link>

        <div className="flex items-center">
          <Link
            to={AppRoutes.CLASS_PROFILE}
            className="flex gap-2 items-center"
          >
            <p className="font-bold">{user?.fullName}</p>
            <img
              src={user?.picture}
              alt=""
              className="w-12 h-12 rounded-full border border-primary"
            />
          </Link>
        </div>
      </div>

      <MenuMobile isOpen={showMenu} closeMenu={toggleShowMenu} />
    </div>
  );
}
