import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { VideoPlayer } from "../../../../components/VideoPlayer";
import { AppRoutes } from "../../../../constants/AppRoutes";
import { courses, iCourse, iLesson, iModule } from "../../../../moked/courses";

export function CoursePage() {
  const [full, setFull] = useState(false);
  const [course, setCourse] = useState<iCourse>();
  const [module, setModule] = useState<iModule>();
  const [lesson, setLesson] = useState<iLesson>();
  const { courseSlug, moduleSlug, classSlug } = useParams();

  const navigate = useNavigate();

  if (
    courseSlug === undefined ||
    moduleSlug === undefined ||
    classSlug === undefined
  )
    navigate(-1);

  useEffect(() => {
    const course = courses.find((e) => e.slug === courseSlug);
    if (course === undefined) navigate(-1);
    setCourse(course);

    const module = course?.modules.find((e) => e.slug === moduleSlug);
    if (module === undefined) navigate(-1);
    setModule(module);

    const lesson = module?.lessons.find((l) => l.slug === classSlug);
    if (lesson === undefined) navigate(-1);
    setLesson(lesson);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseSlug, moduleSlug, classSlug]);

  return (
    <div className="flex flex-col">
      <div className={`w-full h-[500px] flex transition`}>
        <div className="w-full h-full flex justify-center items-center bg-light-200 relative transition">
          <div className="w-full max-h-[500px] h-full mx-auto rounded-2xl overflow-hidden relative">
            {lesson !== undefined ? (
              <VideoPlayer video_id={Number(lesson.urlVideo || "")} />
            ) : (
              ""
            )}
          </div>

          <div
            className="absolute top-4 right-4 cursor-pointer z-50 hover:text-white transition bg-light-200 rounded"
            onClick={() => setFull((e) => !e)}
          >
            {full ? <MdFullscreen size={24} /> : <MdFullscreenExit size={24} />}
          </div>
        </div>

        <div
          className={`transition ${
            full ? "w-0 overflow-hidden " : "w-96 pl-5"
          }`}
        >
          {course?.modules.map((m) => (
            <Module key={m.id} module={m} />
          ))}
          {/* {module ? <Module module={module} /> : <></>} */}
        </div>
      </div>
      <div className="w-full">
        <h1>
          {course?.name} / {module?.name} / {lesson?.title}
        </h1>

        <h2 className="text-xl font-bold">Descrição:</h2>
        <p>{module?.description}</p>

        <h2 className="text-xl font-bold">Sobre o curso:</h2>
        <p>{course?.description}</p>
      </div>
    </div>
  );
}

function Module({ module }: { module: iModule }) {
  const [hide, setHide] = useState(false);
  const { courseSlug } = useParams();

  return (
    <div className=" overflow-hidden relative h-fit">
      <h1
        className="text-3xl font-bold relative mb-5 cursor-pointer bg-red-300 z-10"
        onClick={() => setHide((e) => !e)}
      >
        {module?.name}
      </h1>
      <div
        className={`transition relative overflow-hidden h-full z-0 bg-green-400 ${
          hide ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {module.lessons.map((l) => (
          <Link
            key={l.id}
            to={AppRoutes.CLASS_COURSE.replace(":courseSlug", courseSlug || "")
              .replace(":moduleSlug", module.slug || "")
              .replace(":classSlug", l.slug || "")}
          >
            <div key={l.id} className="leading-7 flex items-center gap-2 group">
              <FaPlay size={14} className="group-hover:text-primary" />
              {l.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
