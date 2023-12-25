import {
  FaCertificate,
  FaHeart,
  FaPencilAlt,
  FaPlayCircle,
} from "react-icons/fa";

export function Details() {
  const data = [
    {
      icon: <FaPlayCircle size={60} />,
      title: "Direto ao Ponto",
      description:
        "Aprenda ReactJS na prática e esteja pronto para os desafios do dia a dia",
    },
    {
      icon: <FaPencilAlt size={60} />,
      title: "Estudo & Prática",
      description:
        "Entenda os conceitos, veja os exemplos e se desafie criando projetos na prática",
    },
    {
      icon: <FaPlayCircle size={60} />,
      title: "React e mais",
      description:
        "Aprenda sobre spa, api, integração contínua com tecnologias atuais",
    },
    {
      icon: <FaPlayCircle size={60} />,
      title: "Material de apoio",
      description:
        "Comece aqui e vá além com os materiais de apoio que indicamos ao longo dos cursos",
    },
    {
      icon: <FaCertificate size={60} />,
      title: "Certificado",
      description:
        "Conclua cursos e receba um certificado de conclusão para poder guardar ou compartilhar",
    },
    {
      icon: <FaHeart size={60} />,
      title: "Comunidade",
      description:
        "Aprenda, compartilhe experiências e faça conexões com a comunidade de alunos",
    },
  ];

  return (
    <div className="w-full flex justify-center slideInLeft">
      <div className="w-full max-w-screen-cut flex flex-wrap justify-center gap-10 py-10 px-4 md:px-6">
        {data.map((item) => (
          <div
            key={item.title}
            className="max-w-[350px] flex items-center flex-col gap-5 text-center transition hover:-translate-y-5"
          >
            <span className="w-20 text-primary brightness-75">{item.icon}</span>
            <h1 className="font-bold text-xl">{item.title}</h1>
            <p className="text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
