import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export function ModalProfile({ title, children }: Props) {
  return (
    <div className="w-full px-4 py-6 rounded-lg shadow-2xl">
      <div className="w-full border-b border-primary pb-2 mb-5">
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-4 ">{children}</div>
    </div>
  );
}
