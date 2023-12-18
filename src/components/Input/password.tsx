/* eslint-disable @typescript-eslint/ban-ts-comment */
import { InputHTMLAttributes, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaLockOpen } from "react-icons/fa";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showSegurity?: boolean;
  passwordSegurity?: {
    minLen?: number | { value: number; message?: string };
    maxLen?: number | { value: number; message?: string };
    haveLetter?: boolean | { value: boolean; message?: string };
    haveUppercase?: boolean | { value: boolean; message?: string };
    haveSpecialCharacter?: boolean | { value: boolean; message?: string };
  };
}

export function Password({
  label,
  error,
  showSegurity = false,
  passwordSegurity = {
    minLen: {
      value: 0,
      message: "Deve conter no mínimo #value characteres;",
    },
    maxLen: {
      value: 0,
      message: "Deve conter no mínimo #value characteres;",
    },
    haveLetter: false,
    haveUppercase: false,
    haveSpecialCharacter: false,
  },
  ...props
}: Props) {
  const [hide, setHide] = useState(true);
  const [segurity, setSegurity] = useState(false);

  const minLen =
    typeof passwordSegurity.minLen === "number"
      ? passwordSegurity.minLen
      : passwordSegurity.minLen?.value;
  const maxLen =
    typeof passwordSegurity.maxLen === "number"
      ? passwordSegurity.maxLen
      : passwordSegurity.maxLen?.value;
  const haveLetter =
    typeof passwordSegurity.haveLetter === "boolean"
      ? passwordSegurity.haveLetter
      : passwordSegurity.haveLetter?.value;
  const haveUppercase =
    typeof passwordSegurity.haveUppercase === "boolean"
      ? passwordSegurity.haveUppercase
      : passwordSegurity.haveUppercase?.value;
  const haveSpecialCharacter =
    typeof passwordSegurity.haveSpecialCharacter === "boolean"
      ? passwordSegurity.haveSpecialCharacter
      : passwordSegurity.haveSpecialCharacter?.value;

  const toogleHide = () => setHide((e) => !e);
  const toogleSegurity = () => setSegurity((e) => !e);

  function generateInstructions() {
    let instructions = "";

    if (minLen) {
      instructions = `<p id="minLen">${
        // @ts-expect-error
        passwordSegurity.minLen?.message ||
        `Deve conter no mínimo ${minLen} characteres; `
      }</p>`;
    }

    if (maxLen) {
      instructions += `<p id="maxLen">${
        // @ts-expect-error
        passwordSegurity.maxLen?.message ||
        `Deve conter no máximo ${maxLen} characteres;`
      }</p>`;
    }

    if (haveLetter) {
      instructions += `<p id="haveLetter">${
        // @ts-expect-error
        passwordSegurity.haveLetter?.message || `Deve conter ao menos 1 letra;`
      }</p>`;
    }

    if (haveUppercase) {
      instructions += `<p id="haveUppercase">${
        // @ts-expect-error
        passwordSegurity.haveUppercase?.message ||
        `Deve conter ao menos 1 letra maiúscula;`
      }</p>`;
    }

    if (haveSpecialCharacter) {
      instructions += `<p id="haveSpecialCharacter">${
        // @ts-expect-error
        passwordSegurity.haveSpecialCharacter?.message ||
        `Deve conter carácter especial @!#$%&*;`
      }</p>`;
    }

    return instructions;
  }

  function validSegurity() {
    const value = props.value as string;

    if (minLen && value.length >= minLen) {
      document.getElementById("minLen")?.classList.add("text-success");
    } else {
      document.getElementById("minLen")?.classList.remove("text-success");
    }

    if (maxLen && value.length > 0 && value.length <= maxLen) {
      document.getElementById("maxLen")?.classList.add("text-success");
    } else {
      document.getElementById("maxLen")?.classList.remove("text-success");
    }

    if (haveLetter && value.match(/([a-zA-z])/g)) {
      document.getElementById("haveLetter")?.classList.add("text-success");
    } else {
      document.getElementById("haveLetter")?.classList.remove("text-success");
    }

    if (haveUppercase && value.match(/([A-Z])/g)) {
      document.getElementById("haveUppercase")?.classList.add("text-success");
    } else {
      document
        .getElementById("haveUppercase")
        ?.classList.remove("text-success");
    }

    if (haveSpecialCharacter && value.match(/([!,@,#,$,%,&,*])/g)) {
      document
        .getElementById("haveSpecialCharacter")
        ?.classList.add("text-success");
    } else {
      document
        .getElementById("haveSpecialCharacter")
        ?.classList.remove("text-success");
    }
  }

  useEffect(() => {
    validSegurity();
  }, [props.value]);

  const passwordForce = generateInstructions();

  return (
    <div className="w-full relative">
      <label htmlFor={props.id} className="flex flex-col w-full gap-2 relative">
        <span className="font-bold text-lg">{label}</span>

        <input
          {...props}
          type={hide ? "password" : "text"}
          placeholder={props.placeholder || label}
          className="px-6 py-2 outline-none border border-primary rounded-md"
        />

        <div
          className={`cursor-pointer absolute bottom-3 ${
            showSegurity ? "right-10" : "right-4"
          }`}
          onClick={toogleHide}
          title={hide ? "Mostrar senha" : "Esconder senha"}
        >
          {hide ? <FaEye /> : <FaEyeSlash />}
        </div>

        <div
          className={`cursor-pointer absolute right-4 bottom-3 transition ${
            showSegurity ? "" : "hidden"
          }`}
          onClick={toogleSegurity}
          title={segurity ? "Esconder instruções" : "Mostrar instruções"}
        >
          {segurity ? <FaLockOpen /> : <FaLock />}
        </div>
      </label>

      <p className="text-danger text-xs px-2 h-4">{error}</p>

      <div
        className={`bg-light-100 text-light-900 text-xs w-full rounded-md shadow-md transition
         ${
           segurity
             ? "p-4 border max-w-[270px] border-primary/20"
             : "max-w-0 overflow-hidden"
         }
        absolute top-20 md:top-10 right-0 md:-right-2 md:translate-x-full z-20`}
        dangerouslySetInnerHTML={{ __html: passwordForce }}
      />
    </div>
  );
}
