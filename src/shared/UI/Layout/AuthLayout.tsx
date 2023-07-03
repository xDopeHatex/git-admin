import React from "react";

// @ts-ignore
import authIcons from "../../../images/auth-bg-icons.png";

const withAuthLayout = (component: () => React.ReactNode) => () => {
  return (
    <div className="flex w-[100vw] justify-between min-h-[100vh]">
      <div className={"w-1/2 bg-purple-gradient flex items-center"}>
        <img src={authIcons} className="block w-full pb-[10rem]" />
      </div>
      <div className={"w-1/2 p-20 flex flex-col justify-between"}>
        {component()}
      </div>
    </div>
  );
};

export default withAuthLayout;
