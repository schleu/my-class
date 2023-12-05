import { useCompany } from "../../../hooks/useCompany";

export function Testimony() {
  const { name } = useCompany();

  const data = [
    {
      author: "Carolina Santos",
      text: "O curso de Desenvolvimento com ReactJS superou todas as minhas expectativas. Os instrutores demonstraram domínio total da tecnologia, apresentando conceitos de forma clara e prática. A abordagem hands-on proporcionou uma imersão profunda no universo do ReactJS, permitindo-me aplicar imediatamente os conhecimentos em projetos reais. Recomendo esse curso a todos que desejam se destacar no desenvolvimento de aplicações web modernas.",
    },
    {
      author: "Pedro Souza",
      text: "Este curso de ReactJS do básico ao avançado foi exatamente o que eu precisava para aprimorar minhas habilidades de desenvolvimento front-end. As aulas são estruturadas de forma lógica, com uma progressão que facilita a compreensão dos conceitos mais complexos. Os projetos práticos proporcionam uma experiência hands-on valiosa, consolidando o aprendizado. Estou muito satisfeito com o investimento neste curso.",
    },
    {
      author: "Lucas Oliveira",
      text: "O curso 'Mastering ReactJS' foi um divisor de águas na minha jornada como desenvolvedor. Os tópicos avançados abordados, como gerenciamento de estado, roteamento e integração com APIs, elevaram minha proficiência em ReactJS a um nível superior. A equipe de suporte foi ágil e prestativa, garantindo que todas as dúvidas fossem esclarecidas. Recomendo este curso a quem busca se tornar um especialista em ReactJS.",
    },
    {
      author: "Gabriela Lima",
      text: "Como iniciante na programação, escolhi o curso de ReactJS para começar minha jornada no desenvolvimento web. Fiquei impressionada com a forma simples e acessível como os conceitos foram apresentados. Os exercícios práticos foram fundamentais para consolidar meu entendimento. Este curso é ideal para quem está dando os primeiros passos no mundo da programação e deseja aprender ReactJS de maneira eficaz e didática.",
    },
  ];

  const resumedText = (text: string, size = 300) =>
    text.length < size ? text : `${text.slice(0, size)}...`;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-screen-cut flex flex-col items-center gap-10 px-4 md:px-6">
        <h1 className="text-3xl font-bold">
          A opinião de quem já <u>aprendeu ReactJS com o {name}</u>
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center">
          {data.map((item) => (
            <div
              key={item.text}
              className="md:max-w-[33%] w-full border border-light-300 rounded-xl px-6 py-4 "
            >
              <p className="text-light-900">{resumedText(item.text)}</p>
              <h3 className="text-light-200 mt-2">
                {item.author} - Discente {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
