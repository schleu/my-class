import { useEffect, useState } from "react";
import { certificatesMoked } from "../../../../moked/certificates";

import { Section } from "../../../../components/Section";
import { CertificateCard } from "./CertificateCard";

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
      <div className="flex flex-wrap gap-4">
        {data.map((item) => {
          return (
            <CertificateCard
              key={item.id}
              course={item.name}
              slug={item.slug}
            />
          );
        })}
      </div>
    </Section>
  );
}
