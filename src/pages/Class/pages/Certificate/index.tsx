import { useEffect, useRef, useState } from "react";
import { LiaCertificateSolid, LiaDownloadSolid } from "react-icons/lia";
import { certificatesMoked } from "../../../../moked/certificates";

import html2canvas from "html2canvas";
import { CertificateLayout } from "../../components/CertificateLayout";
import { useParams } from "react-router-dom";

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
        // Convert canvas to data URL
        const dataUrl = canvas.toDataURL("image/png");

        // Create a link element
        const link = document.createElement("a");

        // Set the href and download attributes
        link.href = dataUrl;
        link.download = "certificate.png";

        // Simulate a click on the link to trigger the download
        link.click();
      });
    }
  }

  return (
    <div className="w-full p-4">
      <div
        onClick={download}
        className="h-10 w-96 rounded-md px-10 font-bold flex justify-between items-center gap-2 bg-primary/50 cursor-pointer"
      >
        <div className="flex gap-2">
          <LiaCertificateSolid size={24} />
          {course}
        </div>
        <LiaDownloadSolid size={24} />
      </div>

      <div className="w-fit p-2" ref={certificateRef}>
        <CertificateLayout
          course={course}
          initDate={endDate}
          endDate={initDate}
        />
      </div>
    </div>
  );
}
