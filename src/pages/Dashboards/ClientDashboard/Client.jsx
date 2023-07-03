import React from "react";
import { useParams } from "react-router-dom";
import withRequireAuth from "../../../features/requireAuth/withRequireAuth";

import DashboardWrapper from "../../../shared/UI/DashboardWrapper";
import TableHeader from "../../../shared/UI/Table/TableHeader";
import { PATHS } from "../../../app/constants/paths";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Client = () => {
  const { linkName } = useParams();
  const navigate = useNavigate();

  return (
    <DashboardWrapper>
      <TableHeader
        headerNavArray={["Clients", linkName]}
        button={[
          {
            onClick: () => navigate(`/clients/${linkName}/edit`),
            label: "Edit",
            buttonStyleFilled: true,
            icon: <PlusIcon />,
          },
        ]}
        buttonStyleFilled={true}
      ></TableHeader>
    </DashboardWrapper>
  );
};

export default withRequireAuth(Client);
