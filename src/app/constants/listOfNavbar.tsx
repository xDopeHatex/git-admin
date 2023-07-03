import { PATHS } from "./paths";
import React from "react";
import {
  ArchiveBoxIcon,
  CalculatorIcon,
  CodeBracketSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import {
  ArchiveBoxIcon as ArchiveBoxIconSolid,
  CalculatorIcon as CalculatorIconSolid,
  CodeBracketSquareIcon as CodeBracketSquareIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";

export const listOfNavBar = [
  {
    name: "History",

    svgOutline: <ArchiveBoxIcon />,
    svgFill: <ArchiveBoxIconSolid />,
    link: PATHS.HISTORY,
  },
  {
    name: "Vendors",
    svgOutline: <CalculatorIcon />,
    svgFill: <CalculatorIconSolid />,
    link: PATHS.VENDORS,
  },
  {
    name: "Softwares",
    svgOutline: <CodeBracketSquareIcon />,
    svgFill: <CodeBracketSquareIconSolid />,
    link: PATHS.SOFTWARES,
  },
  {
    name: "Users",
    svgOutline: <UserIcon />,
    svgFill: <UserIconSolid />,
    link: PATHS.USERS,
  },
];
