import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "filled" | "outlined";
}

export function Button({ children, variant = "filled", ...props }: Props) {
  return (
    <button
      className={`px-4 py-2 font-bold rounded-lg ${
        variant === "filled"
          ? "bg-primary hover:brightness-105 text-light-100"
          : "hover:text-primary hover:brightness-110"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
