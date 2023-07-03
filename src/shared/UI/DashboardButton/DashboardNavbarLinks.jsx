import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../../app/constants/paths";

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const DashboardNavbarLinks = ({
  children,
  name,
  svgFill,
  svgOutline,
  link,
}) => {
  const [isClientsOpened, setIsClientsOpened] = useState(false);

  const toggleClientsDropdownMenu = () => {
    if (isClientsOpened === false) {
      setIsClientsOpened(true);
    } else {
      setIsClientsOpened(false);
    }
  };

  return (
    <ul>
      <NavLink to={link}>
        {({ isActive }) => {
          return (
            <li
              onClick={() => toggleClientsDropdownMenu()}
              className={`group pl-6 py-3 border-l-4 border-transparent  cursor-pointer hover:border-violet-400 hover:bg-neutral-50 ${
                isActive ? "border-violet-400 bg-neutral-50" : ""
              } `}
            >
              <div
                className={`flex items-center justify-between text-gray-400 group-hover:text-violet-700 group-hover:font-semibold  ${
                  isActive ? `text-violet-700 font-semibold ` : ""
                } `}
              >
                <div className={"flex gap-3"}>
                  <div className={"h-6 w-6"}>
                    {isActive ? svgFill : svgOutline}
                  </div>
                  <p>{name}</p>
                </div>
                {children ? (
                  <div className={"h-4 w-4 mr-6 text-violet-700"}>
                    {isClientsOpened ? (
                      <ChevronDownIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </li>
          );
        }}
      </NavLink>
      {children ? (
        <ul
          className={`${
            isClientsOpened ? "flex" : "hidden"
          }  flex-col gap-2 pl-16 items-start`}
        >
          {children.map((item, index) => {
            return (
              <NavLink to={item.link} key={index}>
                {({ isActive }) => {
                  return (
                    <li
                      className={`text-gray-400 border-b-2 border-b-transparent hover:border-b-gray-400 ${
                        isActive
                          ? "text-violet-400 border-b-violet-400 font-semibold"
                          : ""
                      }`}
                    >
                      {item.name}
                    </li>
                  );
                }}
              </NavLink>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </ul>
  );
};

export default DashboardNavbarLinks;
