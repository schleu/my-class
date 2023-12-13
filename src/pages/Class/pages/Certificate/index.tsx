import { useEffect, useState } from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { certificatesMoked } from "../../../../moked/certificates";

import { format } from "date-fns";
import { useCompany } from "../../../../hooks/useCompany";
import { useLogin } from "../../../../hooks/useLogin";

export function CertificatePage() {
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
          <Certificate
            key={item.id}
            course={item.name}
            initDate={new Date()}
            endDate={new Date()}
          />
        );
      })}
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
  const [hide, setHide] = useState(true);

  const toggle = () => setHide((e) => !e);

  return (
    <div className="w-full p-4">
      <div
        onClick={toggle}
        className="h-10 w-96 rounded-md px-10 font-bold flex items-center gap-2 bg-primary/50 cursor-pointer"
      >
        <LiaCertificateSolid size={24} />
        {course}
      </div>
      <div
        className={`transition overflow-hidden  ${
          hide ? "h-0" : "h-[640px] py-5"
        }`}
      >
        <CertificateLayout
          course={course}
          initDate={endDate}
          endDate={initDate}
        />
      </div>
    </div>
  );
}

function CertificateLayout({
  course,
  endDate,
  initDate,
}: {
  course: string;
  initDate: Date;
  endDate: Date;
}) {
  const { user } = useLogin();
  const { name, logoUrl } = useCompany();

  return (
    <div className="w-[1000px] h-[600px] flex flex-col items-center gap-16 border rounded-xl py-10 bg-primary/10 ">
      <div className="w-64">
        <img src={logoUrl} alt="logomarca empresa" />
      </div>
      <p className="w-[550px] leading-10 text-base text-center text-light-900 uppercase">
        ESTE CERTIFICADO COMPROVA QUE
        <br />
        <span className="py-2 text-5xl font-Whisper font-bold">
          {user?.fullName}
        </span>
        <br />
        CONCLUIU COM ÊXITO O CURSO <span className="font-bold">{course}</span>
        <br />
        ENTRE {format(initDate, "dd/MM/yyy")} E {format(endDate, "dd/MM/yyy")} E
        DEMONSTROU DEDICAÇÃO E EMPENHO EXEMPLARES, PARABÉNS E BOA SORTE NO
        FUTURO.
        <br />
        EMITIDO EM {format(new Date(), "dd/M/yyyy")} PELA{" "}
        <span className="capitalize">{name}</span>
      </p>
      <div className="w-64 flex flex-col items-center ">
        <p className="w-full border-b border-light-900 text-center font-Whisper text-4xl">
          Jane Doe
        </p>
        <p>Jane Doe</p>
        <p>Diretora Responsável</p>
      </div>
    </div>
  );
}
