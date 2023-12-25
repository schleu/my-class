import { FaHome, FaRegUser } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { RiMovieLine } from "react-icons/ri";
import { AppRoutes } from "./AppRoutes";

export const optionsMenu = [
  {
    text: "Dashboard",
    Icon: FaHome,
    link: AppRoutes.CLASS_DASHBOARD,
  },
  {
    text: "Cursos",
    Icon: RiMovieLine,
    link: AppRoutes.CLASS_COURSES,
  },
  {
    text: "Certificados",
    Icon: LiaCertificateSolid,
    link: AppRoutes.CLASS_CERTIFICATE,
  },
  {
    text: "Perfil",
    Icon: FaRegUser,
    link: AppRoutes.CLASS_PROFILE,
  },
  {
    text: "Finanças",
    Icon: FaMoneyCheckDollar,
    link: AppRoutes.CLASS_FINANCES,
  },
];
