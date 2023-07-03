import React from "react";
import withRequireAuth from "../../features/requireAuth/withRequireAuth";

const History = () => {
  return <div className={"text-5xl"}>History</div>;
};

export default withRequireAuth(History);
