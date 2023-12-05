import { InputHTMLAttributes, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Password({ label, ...props }: Props) {
  const [hide, setHide] = useState(true);

  const toogleHide = () => setHide((e) => !e);

  return (
    <label htmlFor={props.id} className="flex flex-col w-full gap-2 relative">
      <span className="font-bold text-lg">{label}</span>

      <input
        {...props}
        type={hide ? "password" : "text"}
        placeholder={props.placeholder || label}
        className="px-6 py-2 outline-none border border-primary rounded-md"
      />
      <div
        className="cursor-pointer absolute right-4 bottom-3"
        onClick={toogleHide}
        title={hide ? "Mostrar senha" : "Esconder senha"}
      >
        {hide ? <FaEye /> : <FaEyeSlash />}
      </div>
    </label>
  );
}
