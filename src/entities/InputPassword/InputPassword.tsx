import React, { useState } from "react";
import { TransProps } from "@lingui/react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";
import { PATHS } from "../../app/constants/paths";

// Type
export type typeInputPassword = {
  id: string;
  name: string;
  disabled?: boolean;
  label?: React.ReactElement<TransProps>;
  required?: boolean;
  placeholder?: string;
  value?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorMessage?: React.ReactElement<TransProps>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  autoComplete?: boolean;
};

// Component
export const InputPassword: React.FC<typeInputPassword> = ({
  id,
  name,
  disabled,
  label,
  required,
  placeholder,
  value,
  labelClassName,
  inputClassName,
  errorMessage,
  onChange,
  onKeyDown,
  autoComplete = true,
}) => {
  const labelStyles = [
    "block text-16/19 font-semibold text-secondary-black",
    labelClassName,
  ].join(" ");
  const disabledStyle = `border-secondary-stroke_color text-secondary-inactive_menu`;
  const inputStyles = [
    `appearance-none  block  autofill:bg-none box-border w-full px-[16px] py-[14px] border    ${
      errorMessage
        ? "border-secondary-error focus:ring-1 focus:ring-secondary-error "
        : "border-secondary-stroke_color  focus:border-primary-700"
    }   ${
      disabled ? disabledStyle : ""
    } rounded-default placeholder:text-[#4B506D] placeholder:text-opacity-40 tracking-[0.3px] focus:outline-none  font-medium text-16/19 text-secondary-black`,
    inputClassName,
  ].join(" ");

  const [typePassw, setTypePassw] = useState(true);
  const onChangeTypePasswClick = () => {
    setTypePassw(!typePassw);
  };

  return (
    <>
      <label htmlFor={id} className={labelStyles}>
        {label}
        {required && (
          <span className="text-secondary-error align-text-top ">*</span>
        )}
      </label>
      <div className="mt-1.5 relative">
        <input
          id={id}
          name={name}
          type={typePassw ? "password" : "text"}
          autoComplete={autoComplete ? "current-password" : "new-password"}
          placeholder={placeholder}
          value={value}
          required={true}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={inputStyles}
        />
        <button
          type={"button"}
          className={
            "absolute top-[14px] right-[16px] min-w-fit h-auto border-none rounded-default opacity-70 hover:opacity-100 focus:outline-none focus:opacity-100"
          }
          onClick={onChangeTypePasswClick}
        >
          {typePassw ? (
            <EyeSlashIcon className={"w-5 h-5 text-[#848484]"} />
          ) : (
            <EyeIcon className={"w-5 h-5 text-[#848484] "} />
          )}
        </button>

        {errorMessage ? (
          <p className="text-12/14 font-medium mt-0.5  text-secondary-error">
            * {errorMessage}
          </p>
        ) : null}
      </div>
    </>
  );
};
