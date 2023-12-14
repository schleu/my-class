import { useState } from "react";
import { iCourse, iLesson, iModule } from "../../../../moked/courses";
import { LateralModules } from "./LateralModules";

interface Props {
  course: iCourse;
  module: iModule;
  lesson: iLesson;
}

export function MenuLesson({ course, lesson, module }: Props) {
  enum Menus {
    DESCRITION = "Descrição",
    CLASS = "Aulas",
  }
  type Menu = keyof typeof Menus;

  const menusKeys: Menu[] = Object.keys(Menus) as Menu[];

  const [actual, setActual] = useState<Menu>("DESCRITION");

  function handleActual(m: Menu) {
    setActual(m);
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <ul className="w-full flex justify-start">
        {menusKeys.map((item) => (
          <li
            key={item}
            className={`w-full h-10 font-bold border-2 flex items-center justify-center transition cursor-pointer ${
              actual === item
                ? "border-primary shadow-xl"
                : " border-transparent"
            }`}
            onClick={() => handleActual(item)}
          >
            {Menus[item]}
          </li>
        ))}
      </ul>

      <div className="w-full min-h-[300px] flex flex-nowrap overflow-hidden ">
        <div
          className={`w-full h-full  flex-col gap-4 transition  ${
            actual === "DESCRITION" ? "animate-slideIn flex" : "hidden"
          } `}
        >
          <h1 className="font-bold text-primary">
            {course?.name} / {module?.name} / {lesson?.title}
          </h1>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Descrição:</h2>
            <p>{module?.description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Sobre o curso:</h2>
            <p>{course?.description}</p>
          </div>
        </div>

        <div
          className={`w-full h-full  flex-1 flex-col gap-4 transition  ${
            actual === "CLASS" ? "animate-slideIn flex" : "hidden"
          } `}
        >
          <LateralModules course={course} full={false} />
        </div>
      </div>
    </div>
  );
}
