import { RiLogoutBoxLine } from "react-icons/ri";
import { optionsMenu } from "../../../constants/MenuOptions";
import { MenuOption } from "./MenuOption";
import { AppRoutes } from "../../../constants/AppRoutes";

interface Props {
  isOpen: boolean;
  closeMenu: () => void;
}

export function MenuMobile({ isOpen, closeMenu }: Props) {
  return (
    <div
      className={`fixed top-20 left-0 h-screen w-full overflow-hidden  ${
        isOpen ? "max-h-full" : "max-h-0"
      }`}
    >
      <div
        className={`fixed top-20 left-0 z-10 h-screen w-full bg-light-900/50 overflow-hidden ${
          isOpen ? "max-h-full" : "max-h-0"
        }`}
        onClick={closeMenu}
      />
      <div
        className={`w-full h-fit bg-light-100 dark:bg-dark-100  z-20 relative`}
      >
        {optionsMenu.map((opt) => (
          <MenuOption
            key={opt.link}
            title={opt.text}
            Icon={opt.Icon}
            link={opt.link}
            full
            callback={closeMenu}
          />
        ))}

        <MenuOption
          title="Sair"
          Icon={RiLogoutBoxLine}
          link={AppRoutes.SIGN_OUT}
          full
        />
      </div>
    </div>
  );
}
