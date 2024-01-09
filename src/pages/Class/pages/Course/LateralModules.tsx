import { useState } from "react";
import { MenuModule } from "./MenuModule";
import { iCourse } from "../../../../types";

interface Props {
  full?: boolean;
  course: iCourse;
}

export function LateralModules({ full = false, course }: Props) {
  const [menu, setMenu] = useState("");

  function handleMenu(m: string) {
    setMenu(m === menu ? "" : m);
  }
  return (
    <div
      className={`flex flex-col gap-4 ${
        full ? "w-0 overflow-hidden " : "w-full md:w-96"
      }`}
    >
      {course?.modules.map((m) => (
        <MenuModule
          key={m.id}
          module={m}
          hide={m.slug !== menu}
          handleMenu={() => handleMenu(m.slug)}
        />
      ))}
    </div>
  );
}
