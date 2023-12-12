import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Text({ label, error, ...props }: Props) {
  return (
    <div className="w-full relative">
      <label htmlFor={props.id} className="w-full flex flex-col gap-2">
        <span className="font-bold text-lg">{label}</span>
        <input
          type="text"
          {...props}
          placeholder={props.placeholder || label}
          className="px-6 py-2 outline-none border border-primary rounded-md"
        />
      </label>
      <p className="text-danger text-xs px-2  h-4">{error}</p>
    </div>
  );
}
