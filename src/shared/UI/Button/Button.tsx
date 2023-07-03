import React from "react";
import { TransProps } from "@lingui/react";

// Type
export type typeButton = {
  buttonStyleFilled?: boolean;

  buttonStyleOutline?: boolean;
  variant?: string;
  auth?: boolean;
  id?: string;
  name?: string;
  type: "submit" | "button";
  label?: React.ReactElement<TransProps>;
  icon?: React.ReactElement<
    (props: React.ComponentProps<"svg">) => JSX.Element
  >;
  disabled?: boolean;
  buttonClassName?: string;

  onClick?: (e: React.MouseEvent | React.TouchEvent) => void;
};

// Component
export const Button: React.FC<typeButton> = ({
  buttonStyleFilled,
  buttonStyleOutline,
  variant,
  auth,
  id,
  name,
  type,
  label,
  icon,
  disabled = false,
  buttonClassName,

  onClick,
}) => {
  let buttonStyles;

  if (auth) {
    buttonStyles = [
      `flex justify-center items-center gap-x-[12px] px-4 border border-transparent rounded-[8px] min-w-[180px] h-[48px] ${
        icon
          ? "text-16/19 py-[10px] font-semibold tracking-[0.3px]"
          : "text-18/20 py-[13px] font-bold tracking-wider"
      }  text-white ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : `bg-primary-700 hover:bg-primary-800`
      } focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-primary-400  active:bg-primary-600`,
      buttonClassName,
    ].join(" ");
  } else {
    buttonStyles = [
      ` ${
        buttonStyleFilled
          ? "bg-violet-700 text-white "
          : buttonStyleOutline
          ? "border-[1px] border-violet-700 text-violet-700"
          : ""
      } flex justify-center items-center h-[2.25rem] w-40   font-semibold rounded gap-2`,
      buttonClassName,
    ].join(" ");
  }

  return (
    <button
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonStyles}
    >
      {icon ? <div className={"h-6 w-6"}>{icon}</div> : ""}

      {label}
    </button>
  );
};
