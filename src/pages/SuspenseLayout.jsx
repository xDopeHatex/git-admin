import React from "react";
import Loading from "./Loading";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SuspenseLayout = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default SuspenseLayout;
