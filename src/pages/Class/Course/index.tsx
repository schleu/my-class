import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { VideoPlayer } from "../../../components/VideoPlayer";
import { AppRoutes } from "../../../constants/AppRoutes";
import { courses, iLesson, iModule } from "../../../moked/courses";

export function CoursePage() {
  const [full, setFull] = useState(false);
  // const [course, setCourse] = useState<iCourse>();
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
    // setCourse(course);

    const module = course?.modules.find((e) => e.slug === moduleSlug);
    setModule(module);

    const lesson = module?.lessons.find((l) => l.slug === classSlug);
    setLesson(lesson);
  }, [courseSlug, moduleSlug, classSlug]);

  return (
    <div className="flex flex-col">
      <div className={`w-full flex transition`}>
        <div className="flex justify-center items-center w-full bg-light-200 relative transition">
          <div className="w-full max-h-[500px] h-full mx-auto rounded-2xl overflow-hidden relative">
            {lesson !== undefined ? (
              <VideoPlayer video_id={Number(lesson.urlVideo || "")} />
            ) : (
              ""
            )}
          </div>

          <div
            className="absolute top-4 right-4 cursor-pointer z-50"
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
          <h1 className="text-3xl font-bold mb-5">{module?.name}</h1>
          {module &&
            module.lessons.map((l) => (
              <Link
                key={l.id}
                to={AppRoutes.CLASS_COURSE.replace(
                  ":courseSlug",
                  courseSlug || ""
                )
                  .replace(":moduleSlug", moduleSlug || "")
                  .replace(":classSlug", l.slug || "")}
              >
                <div
                  key={l.id}
                  className="leading-7 flex items-center gap-2 group"
                >
                  <FaPlay size={14} className="group-hover:text-primary" />
                  {l.title}
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="w-full">
        <h1>{lesson?.title}</h1>
      </div>
    </div>
  );
}
