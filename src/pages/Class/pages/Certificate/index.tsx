import { useEffect, useRef, useState } from "react";
import { LiaDownloadSolid, LiaExternalLinkAltSolid } from "react-icons/lia";
import { certificatesMoked } from "../../../../moked/certificates";

import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { Section } from "../../../../components/Section";
import { CertificateLayout } from "../../components/CertificateLayout";

export function CertificatePage() {
  const [data, setData] = useState<{
    id: string;
    slug: string;
    name: string;
    progress: number;
  }>();

  const { courseId } = useParams();

  useEffect(() => {
    const data = certificatesMoked.find(
      (e) =>
        e.slug === courseId && {
          id: e.id,
          slug: e.slug,
          name: e.name,
          progress: e.progress,
        }
    );

    setData(data);
  }, [courseId]);

  return (
    <div className="flex flex-col">
      <Certificate
        course={data?.name || ""}
        initDate={new Date()}
        endDate={new Date()}
      />
    </div>
  );
}

function Certificate({
  course,
  endDate,
  initDate,
}: {
  course: string;
  initDate: Date;
  endDate: Date;
}) {
  const certificateRef = useRef(null);

  function download() {
    if (certificateRef.current) {
      html2canvas(certificateRef.current).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "certificate.png";
        link.click();
      });
    }
  }

  const handleLinkedInShare = () => {
    const shareUrl = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Check out my React App");
    const description = encodeURIComponent("Amazing React App Description");
    const imageUrl = encodeURIComponent(
      "https://app.rocketseat.com.br/_next/image?url=https%3A%2F%2Fxesque.rocketseat.dev%2Fusers%2Favatar%2Fprofile-66314391-c3dd-46ad-a774-e7e07f982462-1642178599637.jpg&w=828&q=75"
    ); // Substitua pela URL da sua imagem

    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&title=${title}&summary=${description}&imageUrl=${imageUrl}`;

    window.open(linkedInShareUrl, "_blank");
  };

  return (
    <Section title={`Certificado ${course}`}>
      <div className="w-fit mx-auto p-2" ref={certificateRef}>
        <CertificateLayout
          course={course}
          initDate={endDate}
          endDate={initDate}
        />
      </div>
      <div className="w-1/2 flex gap-4 pt-2 mt-2 border-t border-primary/50">
        <Button variant="outlined" className="gap-4" onClick={download}>
          Baixar <LiaDownloadSolid size={24} />
        </Button>
        <Button
          variant="filled"
          className="gap-4"
          onClick={handleLinkedInShare}
        >
          Linkedin <LiaExternalLinkAltSolid size={24} />
        </Button>
      </div>
    </Section>
  );
}
