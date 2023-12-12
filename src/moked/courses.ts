export interface iLesson {
  id: string;
  thumb: string;
  title: string;
}

export interface iModule {
  id: string;
  name: string;
  lessons: iLesson[];
}

export interface iCourse {
  id: string;
  name: string;
  description: string;
  thumbnail?: string;
  modules: iModule[];
}

export const courses: iCourse[] = [
  {
    id: "90d200a5-47fa-4a16-821f-e749e1cc11f4",
    name: "ReactJs",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [
      {
        id: "6712da5f-2576-4c8a-a18d-194249149d11",
        name: "Nivel 1",
        lessons: [
          {
            id: "f3d84b0f-6667-4025-afdf-e00edd7e5d78",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "HTML - Fundamentos",
          },
          {
            id: "ffde2093-88b7-4862-9075-0e210c681bce",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Conceitos SPA",
          },
          {
            id: "f9d7b968-8fc2-479c-b93a-a9f00ab35520",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React - Componentes",
          },
          {
            id: "9ca6a5ae-9ca3-43d1-aeda-4e083eb4a27c",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "CSS - Fundamentos",
          },
          {
            id: "5d6bf6ec-3f10-4140-a31e-98a0a562c04b",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "JavaScript - Fundamentos",
          },
          {
            id: "bce1ea7f-7cb4-4e97-99f4-68b957dded94",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React - Props",
          },
          {
            id: "a11686ef-6c78-4c03-bb93-b6e8a8b78d04",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - State",
          },
          {
            id: "c0133abe-7b1d-4df8-9ac1-67f97f0038a9",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Criando uma aplicação React",
          },
          {
            id: "7a4e4e26-0053-4aff-ac9b-d76965831e7e",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "DOM - Fundamentos",
          },
          {
            id: "81eff934-1f8a-414d-a1a2-51546d2007fa",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - Effect",
          },
        ],
      },
      {
        id: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
        name: "Nivel 2",
        lessons: [
          {
            id: "0a455c18-d54d-4c9c-9c09-86a85dfbdb4e",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - Memo",
          },
          {
            id: "8cf2457e-9ec4-4a82-9954-8662379018e6",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Developer Tools",
          },
          {
            id: "46eb006c-55dc-4707-a265-516e04a52a05",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - Callback",
          },
          {
            id: "2f73a4ac-fcfd-42ab-9623-e698980e9b11",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - Ref",
          },
          {
            id: "bec6bc8d-19bc-49bd-add6-7c5d58ed3b56",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React - Bibliotecas de Design System",
          },
          {
            id: "178af896-b50a-40ec-bfac-aa028c26222c",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Versionamento Semântico para Front-end",
          },
          {
            id: "2f461a8c-b069-4959-bbe8-4f50f7017e88",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "CSS-in-JS",
          },
          {
            id: "a183d2f7-6bfa-4b46-a240-961be3f60450",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Styled Components",
          },
          {
            id: "ec0a90f3-4252-4684-9f8c-4054c779f2e8",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React - Roteamento web",
          },
          {
            id: "dddf14a6-fdab-4186-ad49-80cfabdfe977",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React - Gerenciamento de Estados",
          },
          {
            id: "e634a928-220a-458f-a619-49d6cc42a13b",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "TypeScript - Fundamentos",
          },
          {
            id: "232b5dff-1f7c-4f0c-b69d-65429d6c8d54",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Testing Library",
          },
          {
            id: "c5df7a0c-6448-4707-b08e-789235e4d0ad",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Jest",
          },
          {
            id: "2bb0ddeb-9253-4982-acae-7f8bb682ff07",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Cypress",
          },
          {
            id: "11590a27-4cb7-40a7-8840-a225fc260d55",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "JavaScript - Callbacks e Promises",
          },
          {
            id: "de323f61-4661-46b3-83a7-925759aa44a9",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "JavaScript - Manipulação de Erros",
          },
          {
            id: "6733cc57-0fcc-4c67-9f1e-af83f0b8771c",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Babel - Fundamentos",
          },
        ],
      },
      {
        id: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
        name: "Nivel 3",
        lessons: [
          {
            id: "35db8d97-9257-4c04-8fe9-1260080373fd",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Lottie",
          },
          {
            id: "c558bdee-a063-4d7f-bc41-cfb835b6c199",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Framer Motion",
          },
          {
            id: "57c0bc19-c586-4519-a6b1-ea4e6067a8da",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Service Workers",
          },
          {
            id: "1503564a-29cc-4612-b5d3-805cfc3954b3",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - Form",
          },
          {
            id: "c523a179-6947-4453-aad2-6f16e797f057",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Lodash",
          },
          {
            id: "c946156c-cda3-450b-8adf-3e0ef4c4b8a0",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "GraphQL",
          },
          {
            id: "882abddd-ade7-4e2e-8257-89a6c12f06b5",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Apollo Client",
          },
          {
            id: "87f6f5f3-14b8-42d5-919c-8e034f971e50",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Redux Saga",
          },
          {
            id: "a11f30c3-5eb6-42b8-a0df-684ab796c020",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "NextJS - Fundamentos",
          },
        ],
      },
    ],
  },
  {
    id: "3f2a67bb-3fa7-488b-80b9-1e186df1c4e4",
    name: "NodeJs",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [],
  },
  {
    id: "871c241f-8543-49a5-be5b-b5f773ad316c",
    name: "React Native",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [],
  },
  {
    id: "2a01a0bf-bda0-4f3b-a10b-6349fbb02b90",
    name: "Python",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [],
  },
];

interface iMyCourse extends iCourse {
  progress: number;
}

export const myCourses: iMyCourse[] = [
  {
    id: "90d200a5-47fa-4a16-821f-e749e1cc11f4",
    name: "ReactJs",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    progress: 30,
    modules: [],
  },
  {
    id: "2a01a0bf-bda0-4f3b-a10b-6349fbb02b90",
    name: "NodeJs",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    progress: 0,
    modules: [],
  },
];

export const courseStatistic = {
  total: myCourses.length,
  progress:
    myCourses.reduce((acc, cur) => (acc += cur.progress), 0) / myCourses.length,
  courses: myCourses.map((data) => ({
    name: data.name,
    progress: data.progress,
  })),
};
