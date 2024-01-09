import { useEffect, useState } from "react";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Section } from "../../../../components/Section";
import { VideoPlayer } from "../../../../components/VideoPlayer";
import { iCourse, iLesson, iModule } from "../../../../types";
import { coursesMoked } from "../../../../moked/courses";
import { LateralModules } from "./LateralModules";
import { MenuLesson } from "./MenuLesson";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

export function CoursePage() {
  const { setLS, getLS } = useLocalStorage("CONFIG");
  const { courseFullScreen } = getLS("CONFIG");

  const [fullScreen, setFullScreen] = useState<boolean>(
    courseFullScreen || false
  );
  const [course, setCourse] = useState<iCourse>();
  const [module, setModule] = useState<iModule>();
  const [lesson, setLesson] = useState<iLesson>();
  const { courseSlug, moduleSlug, lessonSlug } = useParams();
  const navigate = useNavigate();

  if (
    courseSlug === undefined ||
    moduleSlug === undefined ||
    lessonSlug === undefined
  ) {
    navigate(-1);
  }

  useEffect(() => {
    const course = coursesMoked.find((e) => e.slug === courseSlug);
    if (course === undefined) navigate(-1);
    setCourse(course);

    const module = course?.modules.find((e) => e.slug === moduleSlug);
    // if (module === undefined) navigate(-1);
    setModule(module);

    const lesson = module?.lessons.find((l) => l.slug === lessonSlug);
    // if (lesson === undefined) navigate(-1);
    setLesson(lesson);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseSlug, moduleSlug, lessonSlug]);

  function handleFull() {
    setFullScreen((e) => !e);
    setLS("CONFIG", { courseFullScreen: !fullScreen });
  }

  return (
    <Section title={`${course?.name}`}>
      <div className="flex gap-4">
        <div className={`w-full flex flex-col gap-4`}>
          <div className="w-full max-h-[240px] md:max-h-[600px] h-screen flex justify-center items-center bg-light-200/20 rounded-2xl relative">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              {lesson !== undefined ? (
                <VideoPlayer video_id={Number(lesson.urlVideo || "")} />
              ) : (
                ""
              )}
            </div>

            <div
              className={`absolute top-4 right-4 cursor-pointer z-50 hover:text-white ${
                fullScreen ? "bg-light-200/20" : ""
              } rounded hidden md:flex`}
              onClick={handleFull}
            >
              {fullScreen ? (
                <MdFullscreen size={24} />
              ) : (
                <MdFullscreenExit size={24} />
              )}
            </div>
          </div>

          <h1 className="font-bold text-primary">
            {course?.name} / {module?.name} / {lesson?.title}
          </h1>
          {course && module && lesson && (
            <MenuLesson
              course={course}
              module={module}
              lesson={lesson}
              full={fullScreen}
            />
          )}
        </div>

        <div className="hidden md:block">
          {course && <LateralModules course={course} full={fullScreen} />}
        </div>
      </div>
    </Section>
  );
}
