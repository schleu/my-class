import { Section } from "../../components/Section";
import { useCompany } from "../../hooks/useCompany";
import { Footer } from "../Home/components/Footer";
import { Header } from "../Home/components/Header";

export function TermsOfUsePage() {
  const { name } = useCompany();

  return (
    <>
      <Header />
      <div className="max-w-screen-cut mx-auto pt-20">
        <Section title="Termos de Uso">
          <div className="flex flex-col gap-2 text-lg">
            <p>Bem-vindo aos Termos de Uso do {name}!</p>

            <p>
              Ao acessar ou usar {name}, você concorda em cumprir estes termos.
              Por favor, leia-os atentamente antes de prosseguir.
            </p>

            <ul>
              <li className="flex flex-col text-lg">
                <h2 className="font-bold text-xl">1. Uso do Serviço</h2>
                Você concorda em utilizar {name} de acordo com suas finalidades
                e funcionalidades. Não utilize de forma inadequada, ilegal ou
                que possa causar danos a outros usuários ou ao serviço.
              </li>
              <li className="flex flex-col text-lg">
                <h2 className="font-bold text-xl">2. Conteúdo do Usuário</h2>
                Você é responsável pelo conteúdo que compartilha em {name}.
                Garanta que o conteúdo não viole direitos autorais, leis de
                privacidade ou seja ofensivo.
              </li>

              <li className="flex flex-col text-lg">
                <h2 className="font-bold text-xl">3. Privacidade</h2>
                {name} respeita sua privacidade. Consulte nossa Política de
                Privacidade para entender como coletamos, usamos e protegemos
                suas informações.
              </li>
              <li className="flex flex-col text-lg">
                <h2 className="font-bold text-xl">4. Alterações nos Termos</h2>
                Podemos atualizar estes termos ocasionalmente. Informaremos
                sobre alterações significativas. O uso contínuo do serviço após
                mudanças significa sua aceitação dos novos termos.
              </li>
              <li className="flex flex-col text-lg">
                <h2 className="font-bold text-xl">5. Encerramento de Conta</h2>
                Reservamo-nos o direito de encerrar contas que violem estes
                termos ou que possam prejudicar a segurança ou integridade do
                serviço.
              </li>
            </ul>

            <p>
              Estes são termos gerais. Leia nossa Política de Privacidade para
              mais detalhes sobre como suas informações são tratadas.
            </p>

            <p>Obrigado por usar {name}!</p>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}
