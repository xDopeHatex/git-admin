import React from "react";
import { Trans } from "@lingui/macro";

const ForgotPassword = () => {
  return (
    <h1
      className={
        "text-4xl font-semibold pt-[50%] pb-12 flex justify-center items-center"
      }
    >
      <Trans>Forgot Password</Trans>
    </h1>
  );
};

export default ForgotPassword;
