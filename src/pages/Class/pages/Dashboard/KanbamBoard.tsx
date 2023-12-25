/* eslint-disable @typescript-eslint/no-explicit-any */
import { format } from "date-fns";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Input";
import { useGenerate } from "../../../../moked/helpers";
import { DraggableCol } from "./DraggableCol";
import { DraggableItem } from "./DraggableItem";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

interface iTask {
  [key: string]: {
    id: string;
    title: string;
    description?: string;
    createdAt: Date;
  }[];
}

export function KanbamBoard() {
  const { getLS } = useLocalStorage("AUTH");

  const d = getLS();
  console.log(d);
  const [tasks, setTask] = useState<iTask>({
    wip: [],
    complete: [],
    waiting: [],
  });

  const tKeys = Object.keys(tasks);

  const [modalCreate, setModalCreate] = useState(false);
  const [modalCol, setModalCol] = useState(false);

  useEffect(() => {
    setTask({
      "a fazer": [
        {
          id: "edc76f41-6021-4c27-9ec2-c1acb7a7f4ee",
          title: "Aliqua",
          description:
            "Cillum ea ut Lorem duis labore ullamco sunt adipisicing duis. In do officia incididunt pariatur fugiat aute culpa commodo irure enim pariatur laborum. Elit aliqua labore consequat proident sint pariatur cillum. Nulla culpa et eu eiusmod sit laboris.",
          createdAt: useGenerate.randomDate(),
        },
        {
          id: "04191786-3bcb-49e0-98ea-23c38bd47529",
          title: "veniam",
          createdAt: useGenerate.randomDate(),
        },
        {
          id: "a38ec41b-1e08-443c-bbd0-15e45952b5c2",
          title: "qui et et",
          createdAt: useGenerate.randomDate(),
        },
      ],
      fazendo: [],
      completo: [],
    });
  }, []);

  function changeTask(id: string, col: string) {
    setTask((tasks) => {
      let task: any = {};
      let newTasks = { ...tasks };
      tKeys.forEach((tKey) => {
        const t = tasks[tKey].filter((item) => item.id === id);

        const nt = tasks[tKey].filter((item) => item.id !== id);

        newTasks = { ...newTasks, [tKey]: nt };

        if (t.length) task = t;
      });

      newTasks[col].push(...task);

      return newTasks;
    });
  }

  function createTask(e: any) {
    setTask((tasks) => {
      const nts = { ...tasks };

      nts[tKeys[0]].push(e);

      return nts;
    });

    setModalCreate(false);
  }

  function createCol(e: any) {
    console.log(e);
    setTask((tasks) => ({ ...tasks, [e.title]: [] }));

    setModalCol(false);
  }

  function summarize(text: string, n = 50) {
    return text.length < n ? text : text.slice(0, n) + "...";
  }

  return (
    <div className="w-fit h-screen">
      <div className="flex gap-10 justify-end">
        <Button onClick={() => setModalCol((e) => !e)}>Criar coluna</Button>
        <Button onClick={() => setModalCreate((e) => !e)}>Criar task</Button>
      </div>

      <div className="flex gap-2 min-h-96 h-full p-2">
        {Object.keys(tasks).map((tKey) => (
          <DraggableCol key={tKey} id={tKey} title={tKey} callBack={changeTask}>
            {tasks[tKey].map((item) => (
              <DraggableItem key={item.id} id={item.id}>
                <div className="w-full h-full flex flex-col gap-10 py-2 px-4 max-w-xs">
                  <p className="text-xl capitalize font-bold">{item.title}</p>

                  <p className="h-20 text-sm">
                    {item.description ? (
                      summarize(item.description)
                    ) : (
                      <small>sem descrição</small>
                    )}
                  </p>

                  <p className="text-xs">{format(item.createdAt, "dd MMM")}</p>
                </div>
              </DraggableItem>
            ))}
          </DraggableCol>
        ))}
      </div>

      <CreateTaskModal
        visible={modalCreate}
        onFinish={createTask}
        onClose={() => setModalCreate(false)}
      />

      <CreateColModal
        visible={modalCol}
        onFinish={createCol}
        onClose={() => setModalCol(false)}
      />
    </div>
  );
}

function Modal({
  visible,
  onClose,
  children,
}: {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-screen ${
        visible ? "block" : "hidden"
      }`}
    >
      <div
        className="w-full h-screen bg-black/30 cursor-sw-resize"
        onClick={onClose}
      />
      <div
        className={`w-[600px] h-[400px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-light-100 shadow-2xl rounded-xl overflow-hidden  `}
      >
        {children}
      </div>
    </div>
  );
}

function CreateTaskModal({
  visible,
  onFinish,
  onClose,
}: {
  visible: boolean;
  onFinish: (e: any) => void;
  onClose: () => void;
}) {
  const initialValues = { title: "", description: "" };
  const formik = useFormik({ initialValues, onSubmit });

  function onSubmit(e: any) {
    onFinish({
      id: useGenerate.UUID(),
      ...e,
      createdAt: useGenerate.randomDate(),
    });
    formik.resetForm();
  }
  return (
    <Modal onClose={onClose} visible={visible}>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full h-full py-10 px-6 relative"
      >
        <button
          className="absolute right-6 top-4 rounded-full border w-8 h-8 flex justify-center items-center font-bold cursor-pointer z-10"
          onClick={onClose}
        >
          X
        </button>

        <Text
          label="Título"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />

        <Text
          label="Descrição"
          name="description"
          value={formik.values.title}
          onChange={formik.handleChange}
        />

        <div className="mt-auto">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </Modal>
  );
}

function CreateColModal({
  visible,
  onFinish,
  onClose,
}: {
  visible: boolean;
  onFinish: (e: any) => void;
  onClose: () => void;
}) {
  const initialValues = { title: "" };
  const formik = useFormik({ initialValues, onSubmit });

  function onSubmit(e: any) {
    onFinish({
      id: useGenerate.UUID(),
      ...e,
      createdAt: useGenerate.randomDate(),
    });
    formik.resetForm();
  }

  return (
    <Modal onClose={onClose} visible={visible}>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full h-full py-10 px-6 relative "
      >
        <button
          className="absolute right-6 top-4 rounded-full border w-8 h-8 flex justify-center items-center font-bold cursor-pointer z-10"
          onClick={onClose}
        >
          X
        </button>

        <Text
          label="Título"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <div className="mt-auto">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </Modal>
  );
}
