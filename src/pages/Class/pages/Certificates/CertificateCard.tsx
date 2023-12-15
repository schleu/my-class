import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../constants/AppRoutes";
import { LiaCertificateSolid } from "react-icons/lia";

export function CertificateCard({
  course,
  slug,
}: {
  course: string;
  slug: string;
}) {
  return (
    <Link
      to={AppRoutes.CLASS_CERTIFICATE_VALIDATOR.replace(":courseId", slug)}
      className="w-full md:max-w-[400px] rounded-lg overflow-hidden shadow-xl group "
    >
      <div className="w-full h-52 bg bg-light-100 group-hover:brightness-95 text-6xl flex justify-center items-center text-center transition">
        {course}
      </div>

      <div className="h-10 w-full px-10 font-bold flex justify-between items-center gap-2 bg-primary/50 cursor-pointer text-light-900 transition  shadow-md">
        <div className="flex gap-2">
          <LiaCertificateSolid size={24} />
          Certificado
        </div>
      </div>
    </Link>
  );
}
