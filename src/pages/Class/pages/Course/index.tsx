/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Section } from "../../../../components/Section";
import { VideoPlayer } from "../../../../components/VideoPlayer";
import {
  coursesMoked,
  iCourse,
  iLesson,
  iModule,
} from "../../../../moked/courses";
import { LateralModules } from "./LateralModules";

export function CoursePage() {
  const [full, setFull] = useState(false);
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

  return (
    <Section title={`${course?.name}`}>
      <div className="flex gap-4">
        <div className={`w-full h-[500px] flex flex-col gap-4 transition`}>
          <div className="w-full h-full flex justify-center items-center bg-light-200 rounded-2xl relative transition">
            <div className="w-full max-h-[500px] h-full mx-auto rounded-2xl overflow-hidden relative">
              {lesson !== undefined ? (
                <VideoPlayer video_id={Number(lesson.urlVideo || "")} />
              ) : (
                ""
              )}
            </div>

            <div
              className="absolute top-4 right-4 cursor-pointer z-50 hover:text-white transition bg-light-200 rounded hidden md:flex"
              onClick={() => setFull((e) => !e)}
            >
              {full ? (
                <MdFullscreen size={24} />
              ) : (
                <MdFullscreenExit size={24} />
              )}
            </div>
          </div>

          <div className="w-full flex flex-col  gap-4">
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
        </div>
        {course && <LateralModules course={course} full={full} />}
      </div>
    </Section>
  );
}
