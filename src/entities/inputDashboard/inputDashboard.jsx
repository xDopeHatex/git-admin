import React from "react";

const InputDashboard = ({
  id,
  labelStyles,
  label,
  required,
  name,
  type,
  autoComplete,
  placeholder,
  inputStyles,
  errorMessage,
}) => {
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
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required={true}
          className={inputStyles}
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

export default InputDashboard;
