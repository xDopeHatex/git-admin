import React from "react";

const Input = ({
  id,
  type,
  label,
  labelClassName,
  inputClassName,
  required,
  name,
  value,
  onChange,
  errorMessage,
  maxLength,
}) => {
  const labelStyles = ["block  font-medium ", labelClassName].join(" ");

  const inputStyles = [
    ` w-full py-[14px] border border-[1px] border-violet-200 text-neutral-800 px-3  ${
      errorMessage
        ? "border-secondary-error focus:ring-1 focus:ring-secondary-error "
        : ""
    } rounded-[4px]   focus:outline-2 outline-violet-700 text-neutral-800   `,
    inputClassName,
  ].join(" ");

  return (
    <div>
      <label htmlFor={id} className={labelStyles}>
        {label}
        {required && <span className=" align-text-top ">*</span>}
      </label>
      <div className="mt-1.5">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          required={required}
          onChange={onChange}
          className={inputStyles}
          maxLength={maxLength}
        />
        {errorMessage ? (
          <p className="text-12/14 font-medium mt-0.5 ">* {errorMessage}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
