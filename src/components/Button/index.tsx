import { ButtonHTMLAttributes, ReactNode } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "filled" | "outlined";
  isLoading?: boolean;
}

export function Button({
  children,
  variant = "filled",
  isLoading = false,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`px-4 py-2 font-bold rounded-lg flex justify-center items-center text-base md:text-lg ${
        variant === "filled"
          ? "bg-primary hover:brightness-105 text-light-100"
          : "hover:text-primary hover:brightness-110"
      }
      ${props.className}
      `}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters size={28} className="animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}
