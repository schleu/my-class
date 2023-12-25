import { ReactNode } from "react";

import { FaGithub, FaLink, FaLinkedinIn, FaSitemap } from "react-icons/fa";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useCompany } from "../../../hooks/useCompany";
import { AppRoutes } from "../../../constants/AppRoutes";

export function Footer() {
  const { name, logoUrl } = useCompany();

  return (
    <footer className="w-full flex justify-center border-light-200/50 border-t mt-auto slideInDown">
      <div className="w-full max-w-screen-cut flex flex-col px-4 md:px-6">
        <div className="w-full flex flex-wrap  justify-between pt-20 pb-10">
          <div className="order-1 md:order-0">
            <div className="max-w-[200px]">
              <img src={logoUrl} alt="" className="w-full" />
            </div>
            <p className="border-b border-light-200/40">
              @{format(new Date(), "yyyy")} - {name}. Todos Direitos Reservados
            </p>
          </div>

          <div className="flex order-0 md:order-1 gap-10 -translate-y-5 flex-wrap">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-primary">Conteúdo</h1>
              <Item>
                <FaLink size={16} /> item 01
              </Item>
              <Item>
                <FaLink size={16} /> item 02
              </Item>
              <Item>
                <FaLink size={16} /> item 03
              </Item>
              <Item link={AppRoutes.TERMS_OF_USE}>
                <FaLink size={16} /> Termos de uso
              </Item>
              <Item link={AppRoutes.POLICY_PRIVACY}>
                <FaLink size={16} /> Política de privacidade
              </Item>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-primary">Comunidade</h1>
              <Item>
                <FaLink size={16} /> item 01
              </Item>
              <Item>
                <FaLink size={16} /> item 02
              </Item>
              <Item>
                <FaLink size={16} /> item 03
              </Item>
              <Item>
                <FaLink size={16} /> item 04
              </Item>
              <Item>
                <FaLink size={16} /> item 05
              </Item>
            </div>
          </div>
        </div>
        <div className="w-full flex  gap-4 py-4 border-light-200/20 border-t">
          Desenvolvido por Danilo Schleu
          <Link
            to="https://portfolio-danilo-schleu.netlify.app/"
            title="Portfólio"
          >
            <FaSitemap size={18} />
          </Link>
          <Link to="https://github.com/schleu" title="Github">
            <FaGithub size={18} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/danilo-schleu/"
            title="Linkedin"
          >
            <FaLinkedinIn size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function Item({
  link = "#",
  children,
}: {
  link?: string;
  children: ReactNode;
}) {
  return (
    <Link to={link}>
      <li className="flex items-center gap-2 hover:text-primary">{children}</li>
    </Link>
  );
}
