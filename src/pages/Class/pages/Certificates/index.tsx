import { useEffect, useState } from "react";
import { LiaCertificateSolid, LiaDownloadSolid } from "react-icons/lia";
import { certificatesMoked } from "../../../../moked/certificates";

import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../constants/AppRoutes";

export function CertificatesPage() {
  const [data, setData] = useState<
    {
      id: string;
      slug: string;
      name: string;
      progress: number;
    }[]
  >([]);

  useEffect(() => {
    const data = certificatesMoked.map((e) => ({
      id: e.id,
      slug: e.slug,
      name: e.name,
      progress: e.progress,
    }));

    setData(data);
  }, []);

  return (
    <div className="flex flex-col">
      {data.map((item) => {
        return (
          <Certificate key={item.id} course={item.name} slug={item.slug} />
        );
      })}
    </div>
  );
}

function Certificate({ course, slug }: { course: string; slug: string }) {
  return (
    <Link
      to={AppRoutes.CLASS_CERTIFICATE_VALIDATOR.replace(":courseId", slug)}
      className="w-full p-4"
    >
      <div className="h-10 w-96 rounded-md px-10 font-bold flex justify-between items-center gap-2 bg-primary/50 cursor-pointer">
        <div className="flex gap-2">
          <LiaCertificateSolid size={24} />
          {course}
        </div>
        <LiaDownloadSolid size={24} />
      </div>
    </Link>
  );
}
