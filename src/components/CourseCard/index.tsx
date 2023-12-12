import { Link } from "react-router-dom";
import { AppRoutes } from "../../constants/AppRoutes";

interface Props {
  id: string;
  image: string;
  title: string;
  description: string;
  progress: number;
}

export function CourseCard({ id, image, title, description, progress }: Props) {
  return (
    <Link to={AppRoutes.CLASS_COURSE.replace(":id", id)}>
      <div className="max-w-[300px] overflow-hidden shadow-xl rounded-xl border hover:border-primary bg-white">
        <div className="w-full h-[200px]">
          <img loading="lazy" src={image} alt="" className="" />
        </div>

        <div className="px-2 py-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
          <div
            className={`w-full bg-light-200 rounded-sm overflow-hidden mt-3 opacity-60 text-light-100 font-bold relative`}
          >
            <div
              className={` text-right pr-1 pl-4 text-transparent ${
                progress ? "bg-success" : "transparent"
              }`}
              style={{ width: `${progress}%` }}
            >
              .
            </div>
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              {progress}%
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
