interface Props {
  text: string;
}
export function Title({ text }: Props) {
  return (
    <h1 className="text-4xl font-bold border-b-2 border-primary pb-2 w-fit pr-10">
      {text}
    </h1>
  );
}
