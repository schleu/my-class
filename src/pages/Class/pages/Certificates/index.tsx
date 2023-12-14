import { useEffect, useState } from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { certificatesMoked } from "../../../../moked/certificates";

import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../constants/AppRoutes";
import { Section } from "../../../../components/Section";

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
    <Section title="Certificados">
      <div className="flex gap-4">
        {data.map((item) => {
          return (
            <Certificate key={item.id} course={item.name} slug={item.slug} />
          );
        })}
      </div>
    </Section>
  );
}

function Certificate({ course, slug }: { course: string; slug: string }) {
  return (
    <Link
      to={AppRoutes.CLASS_CERTIFICATE_VALIDATOR.replace(":courseId", slug)}
      className="max-w-screen-1/3 w-full rounded-lg overflow-hidden"
    >
      <div className="w-full h-36 bg bg-red-400">
        <img src="" alt="" />
      </div>

      <div className="h-10 w-full px-10 font-bold flex justify-between items-center gap-2 bg-primary/50 cursor-pointer">
        <div className="flex gap-2">
          <LiaCertificateSolid size={24} />
          {course}
        </div>
      </div>
    </Link>
  );
}
