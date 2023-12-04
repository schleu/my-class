import { useCompany } from "../../../hooks/useCompany";

export function Testimony() {
  const { name } = useCompany();

  const data = [
    {
      author: "Cleiber Melo",
      text: "Um 1dos melhores cursos on-line que já fiz. Com certeza valeu muito. Recomendo esse curso, a todos os testers e developers que por ventura desejam conhecer mais do Cypress.”",
    },
    {
      author: "Cleiber Melo",
      text: "Um2 dos melhores cursos on-line que já fiz. Com certeza valeu muito. Recomendo esse curso, a todos os testers e developers que por ventura desejam conhecer mais do Cypress.”",
    },
    {
      author: "Cleiber Melo",
      text: "Um 3dos melhores cursos on-line que já fiz. Com certeza valeu muito. Recomendo esse curso, a todos os testers e developers que por ventura desejam conhecer mais do Cypress.”",
    },
    {
      author: "Cleiber Melo",
      text: "Um dos melhores cursos on-line que já fiz. Com certeza valeu muito. Recomendo esse curso, a todos os testers e developers que por ventura desejam conhecer mais do Cypress.”",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-screen-cut flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold">
          A opinião de quem já <u>aprendeu ReactJS com o {name}</u>
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {data.map((item) => (
            <div
              key={item.text}
              className="max-w-[33%] w-full border border-light-300 rounded-xl px-6 py-4 "
            >
              <p className="text-light-900">{item.text}</p>
              <h3 className="text-light-200 mt-2">
                {item.author} - Aluno {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
