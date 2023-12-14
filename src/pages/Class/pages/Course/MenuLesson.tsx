import { useEffect, useState } from "react";
import { iCourse, iLesson, iModule } from "../../../../types";
import { LateralModules } from "./LateralModules";
import { Rating } from "./Rating";

interface Props {
  course: iCourse;
  module: iModule;
  lesson: iLesson;
  full: boolean;
}

export function MenuLesson({ course, module, full = false }: Props) {
  enum Menus {
    CLASS = "Aulas",
    DESCRITION = "Descrição",
    RATING = "Avaliações",
  }
  type Menu = keyof typeof Menus;

  const menusKeys: Menu[] = Object.keys(Menus) as Menu[];

  const [actual, setActual] = useState<Menu>("RATING");

  useEffect(() => {
    if (!full) {
      setActual("RATING");
    }
  }, [full]);

  function handleActual(m: Menu) {
    setActual(m);
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <ul className="w-full flex justify-start">
        {menusKeys.map((item) => (
          <li
            key={item}
            className={`w-full h-10 font-bold border-2 items-center justify-center transition cursor-pointer ${
              !full && item === "CLASS" ? "flex md:hidden" : "flex"
            }
            ${
              actual === item
                ? "border-primary shadow-xl flex"
                : "border-transparent"
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
          className={`w-full h-full  flex-1 flex-col gap-4 transition ${
            full ? "flex" : "flex md:hidden"
          }  ${actual === "CLASS" ? "animate-slideIn flex" : "hidden"} `}
        >
          <LateralModules course={course} full={false} />
        </div>

        <div
          className={`w-full h-full  flex-1 flex-col gap-4 transition ${
            actual === "RATING" ? "animate-slideIn flex" : "hidden"
          } `}
        >
          <Rating />
        </div>
      </div>
    </div>
  );
}
