import { FaChevronLeft } from "react-icons/fa";
import { RiLogoutBoxLine, RiMoonLine, RiSunLine } from "react-icons/ri";

import { AppRoutes } from "../../../constants/AppRoutes";
import { optionsMenu } from "../../../constants/MenuOptions";

import { useTheme } from "../../../provider/ThemeProvider";
import { MenuOption } from "./MenuOption";

interface Props {
  hide?: boolean;
  toogleHide?: () => void;
}

export function AsideBar({ hide, toogleHide }: Props) {
  const { theme, toogleTheme } = useTheme();
  return (
    <div
      className={`hidden md:flex fixed top-0 z-40 pt-24 max-h-screen h-full bg-light-100 dark:bg-dark-100 shadow-xl flex-col text-light-800 dark:text-dark-800 ${
        hide ? "w-20" : "w-52"
      }`}
    >
      <div
        className={`cursor-pointer flex py-2 ${
          hide ? "justify-center" : "justify-end px-4"
        }`}
        onClick={toogleHide}
      >
        <FaChevronLeft size={18} className={`${hide ? "" : "rotate-180"}`} />
      </div>

      {optionsMenu.map((opt) => (
        <MenuOption
          key={opt.link}
          title={opt.text}
          Icon={opt.Icon}
          link={opt.link}
          full={!hide}
        />
      ))}

      <div className="flex-1" />
      <MenuOption
        title={theme === "light" ? "Dark mode" : "Light mode"}
        Icon={theme === "light" ? RiMoonLine : RiSunLine}
        full={!hide}
        callback={toogleTheme}
      />
      <MenuOption
        title="Sair"
        Icon={RiLogoutBoxLine}
        link={AppRoutes.SIGN_OUT}
        full={!hide}
      />
    </div>
  );
}
