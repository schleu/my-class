import { ReactNode } from "react";
import { Title } from "../Title";

interface Props {
  children: ReactNode;
  title?: string;
}

export function Section({ title, children }: Props) {
  return (
    <section className="flex flex-col gap-5 p-4 overflow-hidden">
      {title && <Title text={title} />}
      {children}
    </section>
  );
}
