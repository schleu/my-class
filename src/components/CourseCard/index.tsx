import { LiaCertificateSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../constants/AppRoutes";
interface Props {
  image: string;
  title: string;
  description: string;
  progress: number;
  courseSlug: string;
  moduleSlug: string;
  classSlug: string;
}

export function CourseCard({
  image,
  title,
  description,
  progress,
  classSlug,
  courseSlug,
  moduleSlug,
}: Props) {
  const navigate = useNavigate();
  function generateCertificate() {
    navigate(AppRoutes.CLASS_CERTIFICATE);
  }

  return (
    <Link
      to={AppRoutes.CLASS_COURSE.replace(":courseSlug", courseSlug)
        .replace(":moduleSlug", moduleSlug)
        .replace(":classSlug", classSlug)}
    >
      <div className="max-w-[300px] overflow-hidden shadow-xl rounded-xl border hover:border-primary bg-white">
        <div className="w-full h-[200px]">
          <img loading="lazy" src={image} alt="" className="" />
        </div>

        <div className="px-2 py-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
          <div className="h-10 flex items-center  hover:text-primary">
            {progress >= 95 ? (
              <div
                className="flex items-center gap-2 text-sm font-bold"
                onClick={generateCertificate}
              >
                <LiaCertificateSolid size={24} />
                Certificado
              </div>
            ) : (
              <></>
            )}
          </div>
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
