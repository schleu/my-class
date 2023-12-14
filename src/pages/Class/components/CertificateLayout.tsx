import { format } from "date-fns";
import { useCompany } from "../../../hooks/useCompany";
import { useLogin } from "../../../hooks/useLogin";

export function CertificateLayout({
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
        <span className="py-2 text-5xl font-BeauRivage font-bold capitalize">
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
        <span className="capitalize font-bold">{name}</span>
      </p>
      <div className="flex flex-col items-center ">
        <p className="w-64 border-b border-light-900 text-center font-BeauRivage text-4xl relative pt-10">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2">
            Jane Doe
          </span>
        </p>
        <p className="text-sm">Jane Doe - Diretora Responsável</p>
      </div>
    </div>
  );
}
