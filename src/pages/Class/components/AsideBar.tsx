import { FaChevronLeft } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

import { AppRoutes } from "../../../constants/AppRoutes";
import { MenuOption } from "./MenuOption";
import { optionsMenu } from "../../../constants/MenuOptions";

interface Props {
  hide?: boolean;
  toogleHide?: () => void;
}

export function AsideBar({ hide, toogleHide }: Props) {
  return (
    <div
      className={`hidden md:flex fixed top-0 z-40 pt-24 transition max-h-screen h-full bg-light-100 shadow-xl  flex-col font-Poppins  ${
        hide ? "w-20" : "w-52"
      }`}
    >
      <div
        className={`cursor-pointer flex py-2 ${
          hide ? "justify-center" : "justify-end px-4"
        }`}
        onClick={toogleHide}
      >
        <FaChevronLeft
          size={18}
          className={`transition ${hide ? "" : "rotate-180"}`}
        />
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
        title="Sair"
        Icon={RiLogoutBoxLine}
        link={AppRoutes.LOGOFF}
        full={!hide}
      />
    </div>
  );
}
