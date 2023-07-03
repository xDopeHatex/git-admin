import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const Card = ({ header, buttonList, children }) => {
  return (
    <li
      className={
        "p-4 bg-white rounded-lg border-violet-100 border-[1px] flex space-y-2.5 flex-col"
      }
    >
      <div
        className={
          "flex gap-2 items-center font-semibold text-lg text-violet-700"
        }
      >
        <div className={"flex-grow"}>{header}</div>
        <div className={"flex gap-2"}>
          {buttonList.map((item, index) => (
            <button key={index} onClick={item.onClick}>
              {item.icon}
            </button>
          ))}
        </div>
      </div>
      <div>{children}</div>
    </li>
  );
};

export default Card;
