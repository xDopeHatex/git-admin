import React from "react";

import { TransProps } from "@lingui/react";

// Type
export type typeInputEmail = {
  variant?: string;
  id: string;
  name: string;
  label?: React.ReactElement<TransProps>;
  placeholder?: string;
  value?: string;
  required?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  errorMessage?: React.ReactElement<TransProps>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  maxLength?: number;
  disabled?: boolean;
  autoComplete?: boolean;
};

// Component
export const InputEmail: React.FC<typeInputEmail> = ({
  variant,
  id,
  name,
  label,
  placeholder,
  value,
  required = false,
  labelClassName,
  inputClassName,
  errorMessage,
  onChange,
  onKeyDown,
  maxLength,
  disabled,
  autoComplete,
}) => {
  const labelStyles = [
    "block text-16/19 font-semibold text-secondary-black",
    labelClassName,
  ].join(" ");
  const disabledStyle = `border-secondary-stroke_color text-secondary-inactive_menu`;
  const inputStyles = [
    `appearance-none rounded block  autofill:bg-none box-border w-full px-[16px] py-[14px] border    ${
      errorMessage
        ? "border-secondary-error focus:ring-1 focus:ring-secondary-error "
        : "border-secondary-stroke_color  focus:border-primary-700"
    }   ${
      disabled ? disabledStyle : ""
    } rounded-default placeholder:text-[#4B506D] placeholder:text-opacity-40 tracking-[0.3px] focus:outline-none  font-medium text-16/19 text-secondary-black`,
    inputClassName,
  ].join(" ");

  return (
    <>
      <label htmlFor={id} className={labelStyles}>
        {label}
        {required && (
          <span className="text-secondary-error align-text-top ">*</span>
        )}
      </label>
      <div className="mt-1.5">
        <input
          id={id}
          name={name}
          type="email"
          autoComplete={autoComplete ? "email" : "off"}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={inputStyles}
          maxLength={maxLength}
          disabled={disabled}
        />
        {errorMessage ? (
          <p className="text-12/14 font-medium mt-0.5  text-secondary-error">
            * {errorMessage}
          </p>
        ) : null}
      </div>
    </>
  );
};
