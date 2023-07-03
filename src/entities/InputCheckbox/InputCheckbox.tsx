import React from "react";
import { TransProps } from "@lingui/react";

// Type
export type typeInputCheckbox = {
  variant?: string;
  id: string;
  name?: string;
  label?: React.ReactElement<TransProps> | string;
  defaultValue?: string | number;
  value?: string | number;
  defaultChecked?: boolean;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  inputClassName?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// Component
export const InputCheckbox: React.FC<typeInputCheckbox> = ({
  variant,
  id,
  name,
  label,
  defaultValue,
  value,
  defaultChecked,
  checked,
  required = false,
  disabled,
  labelClassName,
  inputClassName,

  onChange,
}) => {
  const labelStyles = [
    `ml-2 block text-sm cursor-pointer ${
      disabled ? "text-gray 400" : "text-gray-900"
    }`,
    labelClassName,
  ].join(" ");
  const inputStyles = [
    `appearance-none relative w-5 h-5 cursor-pointer bg-white border-[0.5px]  border-secondary-stroke_color rounded-md hover:border-primary-700 hover:border-opacity-80 hover:ring-4 hover:ring-primary-700 hover:ring-opacity-10 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-primary-300  focus:border-primary-700  checked:bg-primary-700 checked:before:content-[""]  checked:before:block  checked:before:w-2.5  checked:before:h-1.5 checked:before:border-l-2 checked:before:border-b-2  checked:before:border-l-white checked:before:border-b-white checked:before:transform checked:before:-rotate-[52deg] checked:before:-skew-x-[8deg] checked:before:absolute checked:before:top-[4px] checked:before:left-[4px] `,
    inputClassName,
  ].join(" ");

  return (
    <>
      <input
        id={id}
        name={name}
        type="checkbox"
        required={required}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        className={inputStyles}
      />

      {label ? (
        <label htmlFor={id} className={labelStyles}>
          {label}
        </label>
      ) : null}
    </>
  );
};
