import React, { useState, Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { PATHS } from "../../../app/constants/paths";
// @ts-ignore

// @ts-ignore

import sksolLogo from "../../../images/sk-sol-logo.svg";
import { NavLink } from "react-router-dom";
import { listOfNavBar } from "../../../app/constants/listOfNavbar";

import { Provider, useDispatch, useSelector } from "react-redux";
import { setAuthFalse } from "../../../features/requireAuth/authSlice";
import {
  ArchiveBoxIcon,
  ArrowLeftOnRectangleIcon,
  CalculatorIcon,
  CodeBracketSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import DashboardNavbarLinks from "../DashboardButton/DashboardNavbarLinks";
import {
  ArchiveBoxIcon as ArchiveBoxIconSolid,
  CalculatorIcon as CalculatorIconSolid,
  CodeBracketSquareIcon as CodeBracketSquareIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";
import { store } from "../../store/store";
import withRequireAuth from "../../../features/requireAuth/withRequireAuth";

// @ts-ignore
export const DashboardLayout = () => {
  const clients = useSelector((store) => store.clients);
  const [dashboardMenuItems, setDashboardMenuItems] = useState(listOfNavBar);

  const data = [dashboardMenuItems[0], ...dashboardMenuItems];

  useEffect(() => {
    setDashboardMenuItems([
      {
        name: "Clients",

        svgOutline: <ArchiveBoxIcon />,
        svgFill: <ArchiveBoxIconSolid />,
        link: PATHS.CLIENTS,

        children: clients.map((item) => {
          return {
            name: item.header,
            link: `/clients/${item.header}`,
          };
        }),
      },
      ...listOfNavBar,
    ]);
  }, [clients]);

  const dispatch = useDispatch();

  return (
    <div className="flex w-[100vw] justify-between min-h-[100vh] ">
      <section className={"w-[18rem] flex flex-col justify-between"}>
        <div>
          <div className={"flex items-center gap-3 pl-8 py-[2.125rem]"}>
            <img src={sksolLogo} />
            <h1 className={"text-violet-700 text-3xl font-semibold "}>
              SK Sol
            </h1>
          </div>
          {dashboardMenuItems.map((item, index) => {
            return (
              <DashboardNavbarLinks
                children={item.children}
                name={item.name}
                svgOutline={item.svgOutline}
                svgFill={item.svgFill}
                key={index}
                link={item.link}
              />
            );
          })}
        </div>
        <div className={"flex gap-4 pl-6 items-center pb-[2.125rem]"}>
          <button
            className={"h-6 w-6 "}
            onClick={() => {
              localStorage.removeItem("language");
              dispatch(setAuthFalse());
            }}
          >
            <ArrowLeftOnRectangleIcon className={"text-violet-700 "} />
          </button>
          <p className={"text-violet-700"}>example@example.com</p>
        </div>
      </section>
      <div className={"grow-[1]  flex flex-col justify-between"}>
        <Outlet />
      </div>
    </div>
  );
};

export default withRequireAuth(DashboardLayout);
