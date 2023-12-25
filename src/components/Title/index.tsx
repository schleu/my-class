interface Props {
  text: string;
  size?: "big" | "small";
  className?: string;
}
export function Title({ text, size = "big", ...props }: Props) {
  return (
    <h1
      className={`${
        size === "big" ? "text-4xl" : "text-2xl"
      } font-bold border-b-2 border-primary pb-2 w-fit pr-10 slideInLeft ${
        props.className
      }`}
    >
      {text}
    </h1>
  );
}
