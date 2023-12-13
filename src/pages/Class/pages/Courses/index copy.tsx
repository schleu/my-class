import { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../constants/AppRoutes";
import { FaPlay } from "react-icons/fa";
import { iLesson, iModule, courses, iCourse } from "../../../../moked/courses";
import { Title } from "../../../../components/Title";

export function CoursesPage() {
  function Lesson({ data }: { data: iLesson }) {
    return (
      <Link to={AppRoutes.CLASS_COURSE.replace(":id", data.id)}>
        <div key={data.id} className="leading-7 flex items-center gap-2 group">
          <FaPlay size={14} className="group-hover:text-primary" />
          {data.title}
        </div>
      </Link>
    );
  }

  function Module({ data }: { data: iModule }) {
    const [hide, setHide] = useState(false);

    return (
      <div className="flex flex-col gap-2">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => setHide((e) => !e)}
        >
          {data.name}
        </h1>

        <div
          className={`flex flex-col gap-2 transition-all ease-in-out duration-700 origin-top h-fit ${
            hide ? "scale-y-0 overflow-hidden" : "scale-y-100"
          }`}
        >
          {data.lessons.map((l) => (
            <Lesson key={l.id} data={l} />
          ))}
        </div>
      </div>
    );
  }

  function Course({ data }: { data: iCourse }) {
    return (
      <div key={data.id} className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
        <div className="flex gap-10">
          {data.modules.map((m) => (
            <Module key={m.id} data={m} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4">
      <Title text="Meus cursos" />
      <div className="pt-3 flex flex-col gap-4">
        {courses.map((course) => (
          <Course data={course} />
        ))}
      </div>
    </div>
  );
}
