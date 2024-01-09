/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaPlay } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { MdChevronRight } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { AppRoutes } from "../../../../constants/AppRoutes";
import { iModule } from "../../../../types";

interface Props {
  module: iModule;
  hide: boolean;
  handleMenu: (e: any) => void;
}

export function MenuModule({ module, hide, handleMenu }: Props) {
  const { courseSlug, lessonSlug } = useParams();

  return (
    <div className="h-fit">
      <div
        className="w-full flex justify-between items-center cursor-pointer border-light-200 border-2 py-2 px-4 rounded-md"
        onClick={handleMenu}
      >
        <div className="flex flex-col ">
          <h1 className="flex justify-between items-center text-base font-bold relative">
            {module?.name}
          </h1>
          <div className="text-xs text-light-900">
            <p className="text-light-200">{module.lessons.length} aulas</p>
          </div>
        </div>
        <MdChevronRight
          size={32}
          className={`${hide ? "rotate-90" : "-rotate-90"}`}
        />
      </div>

      <div
        className={`relative overflow-hidden h-full pl-4 ${
          hide ? "max-h-0" : "max-h-full"
        }`}
      >
        {module.lessons.map((l) => (
          <Link
            key={l.id}
            to={AppRoutes.CLASS_COURSE.replace(":courseSlug", courseSlug || "")
              .replace(":moduleSlug", module.slug || "")
              .replace(":lessonSlug", l.slug || "")}
          >
            <div
              key={l.id}
              className="leading-7 flex items-center gap-2 border-b border-transparent hover:border-primary "
            >
              {lessonSlug === l.slug ? (
                <FaPlay
                  size={14}
                  className={`${
                    lessonSlug === l.slug ? "text-success" : "text-light-900"
                  } `}
                />
              ) : (
                <BiCameraMovie size={16} />
              )}
              {l.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
