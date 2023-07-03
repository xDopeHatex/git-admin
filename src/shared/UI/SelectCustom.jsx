import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const SelectCustom = ({
  label,
  options,
  errorMessage,
  inputClassName,
  labelClassName,
  required,
  id,
  value,
  onChange,
}) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const toggleDropdown = () =>
    isDropdownOpened ? setIsDropdownOpened(false) : setIsDropdownOpened(true);

  const labelStyles = ["block  font-medium ", labelClassName].join(" ");

  const inputStyles = [
    ` w-full py-[14.5px] border border-[1px] border-violet-200 text-neutral-800 px-3 flex bg-white  ${
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
        <div>
          <div className={inputStyles} onClick={() => toggleDropdown()}>
            <div className="flex-grow flex gap-4">
              {Array.isArray(value) ? (
                value.map((item, index) => <div key={index}>{item}</div>)
              ) : value ? (
                <div>{value}</div>
              ) : null}
            </div>
            <div className="h-6 w-6">
              {isDropdownOpened ? <ChevronDownIcon /> : <ChevronRightIcon />}
            </div>
          </div>
          {isDropdownOpened ? (
            <div
              className="absolute w-full rounded bg-white shadow-lg p-4"
              onMouseLeave={() => setIsDropdownOpened(false)}
            >
              {options.map((item, index) => (
                <label
                  onChange={onChange}
                  key={index}
                  className="container hover:bg-violet-100 rounded p-2"
                >
                  <div>{item}</div>
                  <input
                    type="checkbox"
                    data-option={item}
                    checked={
                      Array.isArray(value)
                        ? value.includes(item)
                          ? true
                          : false
                        : value === item
                        ? true
                        : false
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        {errorMessage ? (
          <p className="text-12/14 font-medium mt-0.5 ">* {errorMessage}</p>
        ) : null}
      </div>
    </div>
  );
};

export default SelectCustom;
