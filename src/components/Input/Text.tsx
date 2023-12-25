import { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  mask?: string | Array<string | RegExp>;
}

export function Text({ label, error, mask, ...props }: Props) {
  return (
    <div className="w-full relative fadeInUp">
      <label htmlFor={props.id} className="w-full flex flex-col gap-2">
        <span className="font-bold text-lg">{label}</span>
        {mask ? (
          <InputMask
            mask={mask}
            {...props}
            placeholder={props.placeholder || label}
            className={`px-6 py-2 outline-none border border-primary rounded-md ${props.className}`}
          />
        ) : (
          <input
            type="text"
            {...props}
            placeholder={props.placeholder || label}
            className={`px-6 py-2 outline-none border border-primary rounded-md ${props.className}`}
          />
        )}
      </label>
      <p className="text-danger text-xs px-2  h-4">{error}</p>
    </div>
  );
}
