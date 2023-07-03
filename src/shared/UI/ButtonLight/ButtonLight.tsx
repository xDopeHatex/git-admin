import React from "react";
import { TransProps } from "@lingui/react";

// Type
export type typeButtonLight = {
  variant?: string;
  secondary?: boolean;
  dark?: boolean;
  id?: string;
  name?: string;
  type: "submit" | "button";
  label: React.ReactElement<TransProps>;
  disabled?: boolean;
  buttonClassName?: string;

  onClick?: (e: React.MouseEvent | React.TouchEvent) => void;
};

// Component
export const ButtonLight: React.FC<typeButtonLight> = ({
  variant,
  secondary,
  dark,
  id,
  name,
  type,
  label,
  disabled = false,
  buttonClassName,

  onClick,
}) => {
  let buttonStyles = [
    `${
      dark
        ? "text-white"
        : disabled
        ? "text-gray-400"
        : secondary
        ? "text-secondary-black focus:border-none "
        : "text-primary-700 "
    } text-16/19 whitespace-nowrap  px-1 py-0 box-border border-b border-transparent  font-semibold tracking-[0.2px] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-primary-400 focus:rounded-default  focus:border-none  ${
      disabled ? "" : " hover:text-primary-800  hover:underline"
    } `,
    buttonClassName,
  ].join(" ");

  return (
    <button
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonStyles}
    >
      {label}
    </button>
  );
};
