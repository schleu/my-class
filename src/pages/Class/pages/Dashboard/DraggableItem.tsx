import { DragEvent, HTMLAttributes } from "react";

interface iDraggableItem extends HTMLAttributes<HTMLDivElement> {}

export function DraggableItem({ ...props }: iDraggableItem) {
  function dragStart(e: DragEvent<HTMLDivElement>) {
    const id = e.currentTarget.id;
    e.dataTransfer.setData("text", id);
  }

  return (
    <div
      draggable="true"
      {...props}
      onDragStart={dragStart}
      className={`w-full bg-light-100 cursor-grab rounded-md transition overflow-hidden hover:scale-110 my-4
      ${props.className}`}
    >
      {props.children}
    </div>
  );
}
