import { format } from "date-fns";
import { useCompany } from "../../hooks/useCompany";
import { generateRandomDate } from "../../moked/helpers";
import { Section } from "../../components/Section";
import { Footer } from "../Home/components/Footer";
import { Header } from "../Home/components/Header";

export function PrivacyPolicyPage() {
  const { name } = useCompany();

  const updatedAt = generateRandomDate();

  return (
    <>
      <Header />
      <div className="max-w-screen-cut mx-auto pt-20">
        <Section title="Política de privacidade">
          <div className="flex flex-col gap-2 text-lg">
            <p>
              Nossa Política de Privacidade explica como coletamos, usamos e
              protegemos suas informações pessoais ao utilizar {name}. Ao usar
              nosso serviço, você concorda com a coleta e uso de informações de
              acordo com esta política.
            </p>

            <ul>
              <li className="flex flex-col text-lg">
                <h2 className="font-bold text-xl">1. Informações Coletadas</h2>
                Podemos coletar informações pessoais, como nome, endereço de
                e-mail, dados de localização e informações de uso do serviço.
              </li>
              <li className="flex flex-col text-lg">
                <h2 className="font-bold text-xl">2. Uso das Informações</h2>
                Utilizamos suas informações para fornecer, manter e melhorar{" "}
                {name}. Elas podem ser utilizadas também para enviar
                notificações relevantes e personalizar sua experiência.
              </li>
              <li className="flex flex-col text-lg">
                <h2 className="font-bold text-xl">
                  3. Compartilhamento de Informações
                </h2>
                Não compartilhamos suas informações pessoais com terceiros,
                exceto quando necessário para operar o serviço ou quando exigido
                por lei.
              </li>
              <li className="flex flex-col text-lg">
                <h2 className="font-bold text-xl">4. Segurança</h2>
                Adotamos medidas de segurança para proteger suas informações
                contra acesso não autorizado ou alteração, mas lembre-se que
                nenhum método de transmissão pela internet ou armazenamento
                eletrônico é 100% seguro.
              </li>
              <li className="flex flex-col text-lg">
                <h2 className="font-bold text-xl">5. Alterações na Política</h2>
                Podemos atualizar nossa Política de Privacidade periodicamente.
                Publicaremos as alterações nesta página e, se forem
                significativas, enviaremos um aviso por e-mail.
              </li>
            </ul>

            <p>
              Ao continuar a utilizar {name}, você concorda com esta Política de
              Privacidade.
            </p>

            <p>
              Para qualquer dúvida sobre nossos termos ou política de
              privacidade, entre em contato conosco.
            </p>

            <p>Atualizado em: {format(updatedAt, "dd/mm/yyyy")}</p>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}
