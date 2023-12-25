import { DragEvent, HTMLAttributes, ReactNode } from "react";
import { Title } from "../../../../components/Title";

interface iDraggableCol extends HTMLAttributes<HTMLDivElement> {
  callBack: (id: string, col: string) => void;
  title: string;
  children: ReactNode;
}

export const DraggableCol = ({
  children,
  title,
  callBack = () => {},
  ...props
}: iDraggableCol) => {
  const enableDropping = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    callBack(id, props.id || "");
  };

  return (
    <div className="h-full bg-primary/20 min-w-[300px]">
      <div className="pl-4 py-2">
        <Title text={title} className="capitalize"></Title>
      </div>
      <div
        className="px-6 h-full pt-6 overflow-y-auto "
        onDragOver={enableDropping}
        onDrop={handleDrop}
      >
        {children}
      </div>
    </div>
  );
};
