import { Trans } from "@lingui/macro";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  });

  return (
    <h1
      className={
        "text-4xl font-semibold pt-[50%] pb-12 flex justify-center items-center"
      }
    >
      <Trans>Page Not Found</Trans>
    </h1>
  );
};

export default PageNotFound;
