import React from "react";
import withRequireAuth from "../../features/requireAuth/withRequireAuth";

const Users = () => {
  return <div className={"text-5xl"}>USERS</div>;
};

export default withRequireAuth(Users);
