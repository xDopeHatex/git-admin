import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "../Button/Button";

const TableHeader = ({ headerNavArray, button }) => {
  const navigate = useNavigate();
  return (
    <div className={"flex justify-between pb-[27px]"}>
      <div
        className={
          "border-b-[0.5px] border-b-neutral-300 h-[2.25rem] flex justify-center items-center font-normal text-neutral-500  gap-2"
        }
      >
        {headerNavArray.map((item, index) => {
          if (index === headerNavArray.length - 1) {
            return (
              <div
                key={index}
                className={"text-violet-700 text-xl font-medium"}
              >
                {item}
              </div>
            );
          } else {
            return (
              <div key={index} className="flex items-center gap-3">
                <p>{item}</p>
                <div className={"h-3.5 w-3.5"}>
                  <ChevronRightIcon />
                </div>
              </div>
            );
          }
        })}
      </div>

      {button
        ? button.map((item, index) => {
            return (
              <Button
                label={item.label}
                onClick={item.onClick}
                buttonStyleFilled={item.buttonStyleFilled}
                buttonStyleOutline={item.buttonStyleOutline}
                icon={item.icon}
                key={index}
              />
            );
          })
        : null}
    </div>
  );
};

export default TableHeader;
