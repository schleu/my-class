interface Props {
  text: string;
  size?: "big" | "small";
}
export function Title({ text, size = "big" }: Props) {
  return (
    <h1
      className={`${
        size === "big" ? "text-4xl" : "text-2xl"
      } font-bold border-b-2 border-primary pb-2 w-fit pr-10`}
    >
      {text}
    </h1>
  );
}
