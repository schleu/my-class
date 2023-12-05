import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Text({ label, ...props }: Props) {
  return (
    <label htmlFor={props.id} className="flex flex-col w-full gap-2">
      <span className="font-bold text-lg">{label}</span>
      <input
        type="text"
        {...props}
        placeholder={props.placeholder || label}
        className="px-6 py-2 outline-none border border-primary rounded-md"
      />
    </label>
  );
}
