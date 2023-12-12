import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { VideoPlayer } from "../../../components/VideoPlayer";
import { courses, iModule } from "../../../moked/courses";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { AppRoutes } from "../../../constants/AppRoutes";

export function CoursePage() {
  const [full, setFull] = useState(false);
  const [module, setModule] = useState<iModule>();
  const { id } = useParams();

  console.log("id", id);
  useEffect(() => {
    courses.map((e) => {
      const m = e.modules.find((e) => e.lessons.find((l) => l.id === id));
      setModule(m);
    });
  }, [id]);

  return (
    <div className={`flex ${full ? "flex-wrap " : ""} gap-10`}>
      <div className="flex justify-center items-center w-full bg-light-200 relative">
        <div className="w-full h-[500px] mx-auto rounded-2xl overflow-hidden relative">
          <VideoPlayer video_id={889263450} />
        </div>
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setFull((e) => !e)}
        >
          {full ? <MdFullscreen size={24} /> : <MdFullscreenExit size={24} />}
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl font-bold mb-5">{module?.name}</h1>
        {module &&
          module.lessons.map((l) => (
            <Link to={AppRoutes.CLASS_COURSE.replace(":id", l.id)}>
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
  );
}
