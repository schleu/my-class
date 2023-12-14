import { gerarNumeroAleatorio } from "../helpers/gerarNumeroAleatorio";
import { iCourse } from "../types";

export const coursesMoked: iCourse[] = [
  {
    id: "90d200a5-47fa-4a16-821f-e749e1cc11f4",
    name: "ReactJs",
    slug: "react-js",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [
      {
        id: "6712da5f-2576-4c8a-a18d-194249149d11",
        courseId: "90d200a5-47fa-4a16-821f-e749e1cc11f4",
        name: "Nível 1",
        slug: "nivel-1",
        description:
          "Duis et velit aliqua commodo duis velit aliquip officia cillum consequat aute ipsum eu cupidatat. Sit deserunt adipisicing eu minim pariatur ullamco proident et do elit. Do mollit nisi exercitation exercitation ipsum do ipsum ex ea. In fugiat sit excepteur eu occaecat laboris cillum qui et in aliqua irure et occaecat.",
        lessons: [
          {
            id: "f3d84b0f-6667-4025-afdf-e00edd7e5d78",
            moduleId: "6712da5f-2576-4c8a-a18d-194249149d11",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "HTML - Fundamentos",
            slug: "html-fundamentos",
          },
          {
            id: "ffde2093-88b7-4862-9075-0e210c681bce",
            moduleId: "6712da5f-2576-4c8a-a18d-194249149d11",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Conceitos SPA",
            slug: "conceitos-spa",
          },
          {
            id: "f9d7b968-8fc2-479c-b93a-a9f00ab35520",
            moduleId: "6712da5f-2576-4c8a-a18d-194249149d11",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React - Componentes",
            slug: "react-componentes",
          },
          {
            id: "9ca6a5ae-9ca3-43d1-aeda-4e083eb4a27c",
            moduleId: "6712da5f-2576-4c8a-a18d-194249149d11",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "CSS - Fundamentos",
            slug: "css-fundamentos",
          },
          {
            id: "5d6bf6ec-3f10-4140-a31e-98a0a562c04b",
            moduleId: "6712da5f-2576-4c8a-a18d-194249149d11",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "JavaScript - Fundamentos",
            slug: "javascript-fundamentos",
          },
          {
            id: "bce1ea7f-7cb4-4e97-99f4-68b957dded94",
            moduleId: "6712da5f-2576-4c8a-a18d-194249149d11",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React - Props",
            slug: "react-props",
          },
          {
            id: "a11686ef-6c78-4c03-bb93-b6e8a8b78d04",
            moduleId: "6712da5f-2576-4c8a-a18d-194249149d11",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - State",
            slug: "react-hooks-state",
          },
          {
            id: "c0133abe-7b1d-4df8-9ac1-67f97f0038a9",
            moduleId: "6712da5f-2576-4c8a-a18d-194249149d11",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Criando uma aplicação React",
            slug: "criando-uma-aplicação-react",
          },
          {
            id: "7a4e4e26-0053-4aff-ac9b-d76965831e7e",
            moduleId: "6712da5f-2576-4c8a-a18d-194249149d11",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "DOM - Fundamentos",
            slug: "dom-fundamentos",
          },
          {
            id: "81eff934-1f8a-414d-a1a2-51546d2007fa",
            moduleId: "6712da5f-2576-4c8a-a18d-194249149d11",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - Effect",
            slug: "react-hooks-effect",
          },
        ],
      },
      {
        id: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
        courseId: "90d200a5-47fa-4a16-821f-e749e1cc11f4",
        name: "Nível 2",
        slug: "nivel-2",
        description: `Aute eiusmod labore ea mollit esse reprehenderit aute dolor. Consequat reprehenderit aliquip officia commodo eiusmod dolor ad sit. Sint velit ullamco non laborum officia culpa sint laborum proident dolor. Consectetur nisi fugiat sunt do occaecat exercitation.
Ullamco velit labore ex mollit consequat amet anim occaecat id exercitation veniam tempor irure nostrud. Do dolore tempor enim sint deserunt anim laboris adipisicing id aute. Eiusmod fugiat magna enim laborum veniam ullamco laborum magna incididunt commodo in elit irure.`,
        lessons: [
          {
            id: "0a455c18-d54d-4c9c-9c09-86a85dfbdb4e",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - Memo",
            slug: "react-hooks-memo",
          },
          {
            id: "8cf2457e-9ec4-4a82-9954-8662379018e6",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Developer Tools",
            slug: "react-developer-tools",
          },
          {
            id: "46eb006c-55dc-4707-a265-516e04a52a05",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - Callback",
            slug: "react-hooks-callback",
          },
          {
            id: "2f73a4ac-fcfd-42ab-9623-e698980e9b11",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - Ref",
            slug: "react-hooks-ref",
          },
          {
            id: "bec6bc8d-19bc-49bd-add6-7c5d58ed3b56",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React - Bibliotecas de Design System",
            slug: "react-bibliotecas-de-design-system",
          },
          {
            id: "178af896-b50a-40ec-bfac-aa028c26222c",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Versionamento Semântico para Front-end",
            slug: "versionamento-semântico-para-frontend",
          },
          {
            id: "2f461a8c-b069-4959-bbe8-4f50f7017e88",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "CSS-in-JS",
            slug: "cssinjs",
          },
          {
            id: "a183d2f7-6bfa-4b46-a240-961be3f60450",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Styled Components",
            slug: "styled-components",
          },
          {
            id: "ec0a90f3-4252-4684-9f8c-4054c779f2e8",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React - Roteamento web",
            slug: "react-roteamento-web",
          },
          {
            id: "dddf14a6-fdab-4186-ad49-80cfabdfe977",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React - Gerenciamento de Estados",
            slug: "react-gerenciamento-de-estados",
          },
          {
            id: "e634a928-220a-458f-a619-49d6cc42a13b",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "TypeScript - Fundamentos",
            slug: "typescript-fundamentos",
          },
          {
            id: "232b5dff-1f7c-4f0c-b69d-65429d6c8d54",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Testing Library",
            slug: "react-testing-library",
          },
          {
            id: "c5df7a0c-6448-4707-b08e-789235e4d0ad",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Jest",
            slug: "jest",
          },
          {
            id: "2bb0ddeb-9253-4982-acae-7f8bb682ff07",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Cypress",
            slug: "cypress",
          },
          {
            id: "11590a27-4cb7-40a7-8840-a225fc260d55",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "JavaScript - Callbacks e Promises",
            slug: "javascript-callbacks-e-promises",
          },
          {
            id: "de323f61-4661-46b3-83a7-925759aa44a9",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "JavaScript - Manipulação de Erros",
            slug: "javascript-manipulação-de-erros",
          },
          {
            id: "6733cc57-0fcc-4c67-9f1e-af83f0b8771c",
            moduleId: "afa4b1dd-2005-496b-b74b-f116cdab38a9",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Babel - Fundamentos",
            slug: "babel-fundamentos",
          },
        ],
      },
      {
        id: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
        courseId: "90d200a5-47fa-4a16-821f-e749e1cc11f4",
        name: "Nível 3",
        slug: "nivel-3",
        lessons: [
          {
            id: "35db8d97-9257-4c04-8fe9-1260080373fd",
            moduleId: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Lottie",
            slug: "lottie",
          },
          {
            id: "c558bdee-a063-4d7f-bc41-cfb835b6c199",
            moduleId: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Framer Motion",
            slug: "framer-motion",
          },
          {
            id: "57c0bc19-c586-4519-a6b1-ea4e6067a8da",
            moduleId: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Service Workers",
            slug: "service-workers",
          },
          {
            id: "1503564a-29cc-4612-b5d3-805cfc3954b3",
            moduleId: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "React Hooks - Form",
            slug: "react-hooks-form",
          },
          {
            id: "c523a179-6947-4453-aad2-6f16e797f057",
            moduleId: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Lodash",
            slug: "lodash",
          },
          {
            id: "c946156c-cda3-450b-8adf-3e0ef4c4b8a0",
            moduleId: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "GraphQL",
            slug: "graphql",
          },
          {
            id: "882abddd-ade7-4e2e-8257-89a6c12f06b5",
            moduleId: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Apollo Client",
            slug: "apollo-client",
          },
          {
            id: "87f6f5f3-14b8-42d5-919c-8e034f971e50",
            moduleId: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "Redux Saga",
            slug: "redux-saga",
          },
          {
            id: "a11f30c3-5eb6-42b8-a0df-684ab796c020",
            moduleId: "d32b4ef9-e1e6-4c90-b5eb-372441abbaaf",
            urlVideo: "893558308",
            thumb:
              "https://i.vimeocdn.com/video/1760787989-51dfc912c65b6ad6e824955c8f42a233e181a47224ccf3d0186dc6355bc6bbc1-d?mw=80&q=85",
            title: "NextJS - Fundamentos",
            slug: "nextjs-fundamentos",
          },
        ],
      },
    ],
  },
  {
    id: "3f2a67bb-3fa7-488b-80b9-1e186df1c4e4",
    name: "NodeJs",
    slug: "node-js",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [
      {
        id: "a4affde1-8765-4f4b-bbb9-ebae6835d736",
        courseId: "3f2a67bb-3fa7-488b-80b9-1e186df1c4e4",
        name: "criando sua primeira biblioteca",
        slug: "criando-sua-primeira-biblioteca",
        lessons: [
          {
            id: "b39630fa-137d-4e71-b80c-d7e3cf651ee4",
            moduleId: "a4affde1-8765-4f4b-bbb9-ebae6835d736",
            urlVideo: "893558308",
            thumb: "https://picsum.photos/300/200/?blur",
            title: "Criando um projeto em Node.js",
            slug: "criando-um-projeto-em-nodejs",
          },
        ],
      },
    ],
  },
  {
    id: "871c241f-8543-49a5-be5b-b5f773ad316c",
    name: "React Native",
    slug: "react-native",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [
      {
        id: "5a056512-5440-4944-a65e-2ee82bfe452b",
        name: "Conceito",
        slug: "conceito",
        courseId: "871c241f-8543-49a5-be5b-b5f773ad316c",
        lessons: [
          {
            id: "b39630fa-137d-4e71-b80c-d7e3cf651ee4",
            moduleId: "a4affde1-8765-4f4b-bbb9-ebae6835d736",
            urlVideo: "893558308",
            thumb: "https://picsum.photos/300/200/?blur",
            title: "Criando um projeto",
            slug: "criando-um-projeto",
          },
        ],
      },
    ],
  },
  {
    id: "2a01a0bf-bda0-4f3b-a10b-6349fbb02b90",
    name: "Python",
    slug: "python",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [
      {
        id: "5a056512-5440-4944-a65e-2ee82bfe452b",
        name: "Conceito",
        slug: "conceito",
        courseId: "871c241f-8543-49a5-be5b-b5f773ad316c",
        lessons: [
          {
            id: "b39630fa-137d-4e71-b80c-d7e3cf651ee4",
            moduleId: "a4affde1-8765-4f4b-bbb9-ebae6835d736",
            urlVideo: "893558308",
            thumb: "https://picsum.photos/300/200/?blur",
            title: "Criando um projeto",
            slug: "criando-um-projeto",
          },
        ],
      },
    ],
  },
  {
    id: "d7765e5e-77b9-4b81-971a-1a1f37309ad4",
    name: "Javascript",
    slug: "javascript",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [
      {
        id: "5a056512-5440-4944-a65e-2ee82bfe452b",
        name: "Conceito",
        slug: "conceito",
        courseId: "871c241f-8543-49a5-be5b-b5f773ad316c",
        lessons: [
          {
            id: "b39630fa-137d-4e71-b80c-d7e3cf651ee4",
            moduleId: "a4affde1-8765-4f4b-bbb9-ebae6835d736",
            urlVideo: "893558308",
            thumb: "https://picsum.photos/300/200/?blur",
            title: "Criando um projeto",
            slug: "criando-um-projeto",
          },
        ],
      },
    ],
  },
  {
    id: "27b2b49e-4dee-4648-8c72-0f3c2bbfbb7a",
    name: "HTML 5",
    slug: "html-5",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [
      {
        id: "d025a0db-2318-40e3-a60d-3d35bf179264",
        name: "Conceito",
        slug: "conceito",
        courseId: "871c241f-8543-49a5-be5b-b5f773ad316c",
        lessons: [
          {
            id: "b39630fa-137d-4e71-b80c-d7e3cf651ee4",
            moduleId: "a4affde1-8765-4f4b-bbb9-ebae6835d736",
            urlVideo: "893558308",
            thumb: "https://picsum.photos/300/200/?blur",
            title: "Criando um projeto",
            slug: "criando-um-projeto",
          },
        ],
      },
    ],
  },
  {
    id: "61cae943-f102-4ec3-b3c3-89942279afa3",
    name: "CSS 3",
    slug: "css-5",
    description:
      "Esse adipisicing eu proident anim magna irure ut eu nisi aliqua et Lorem.",
    thumbnail: "https://picsum.photos/300/200/?blur",
    modules: [
      {
        id: "d025a0db-2318-40e3-a60d-3d35bf179264",
        name: "Conceito",
        slug: "conceito",
        courseId: "871c241f-8543-49a5-be5b-b5f773ad316c",
        lessons: [
          {
            id: "b39630fa-137d-4e71-b80c-d7e3cf651ee4",
            moduleId: "a4affde1-8765-4f4b-bbb9-ebae6835d736",
            urlVideo: "893558308",
            thumb: "https://picsum.photos/300/200/?blur",
            title: "Criando um projeto",
            slug: "criando-um-projeto",
          },
        ],
      },
    ],
  },
];

export const ratingCourseMoked = coursesMoked.map((e) => ({
  id: "",
  courseId: e.id,
  ratings: Array(gerarNumeroAleatorio(99))
    .fill("")
    .map(() => gerarNumeroAleatorio(5)),
}));

export interface iMyCourse extends iCourse {
  progress: number;
}

export const myCoursesMoked: iMyCourse[] = [
  {
    ...coursesMoked[0],
    progress: Math.round(Math.random() * 99),
  },
  {
    ...coursesMoked[1],
    progress: Math.round(Math.random() * 99),
  },
  {
    ...coursesMoked[coursesMoked.length - 4],
    progress: 0,
  },
  {
    ...coursesMoked[coursesMoked.length - 3],
    progress: 94,
  },
  {
    ...coursesMoked[coursesMoked.length - 2],
    progress: 95,
  },
  {
    ...coursesMoked[coursesMoked.length - 1],
    progress: 100,
  },
];

export const courseStatisticMoked = {
  total: myCoursesMoked.length,
  progress:
    myCoursesMoked.reduce((acc, cur) => (acc += cur.progress), 0) /
    myCoursesMoked.length,
  courses: myCoursesMoked.map((data) => ({
    name: data.name,
    progress: data.progress,
  })),
};
