import React from "react";
import withRequireAuth from "../../../features/requireAuth/withRequireAuth";
import { Link } from "react-router-dom";
import { PATHS } from "../../../app/constants/paths";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

import DashboardWrapper from "../../../shared/UI/DashboardWrapper";
import TableHeader from "../../../shared/UI/Table/TableHeader";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from "../../../shared/UI/Card";
import Modal from "../../../shared/UI/Modal";
import ModalConfirm from "../../../shared/UI/ModalConfirm";

const Clients = () => {
  const clients = useSelector((store) => store.clients);
  const navigate = useNavigate();

  return (
    <DashboardWrapper>
      <TableHeader
        buttonStyleFilled={true}
        headerNavArray={["Clients"]}
        button={[
          {
            onClick: () => navigate(PATHS.CREATE),
            label: "Create",
            buttonStyleFilled: true,
            icon: <PlusIcon />,
          },
        ]}
      />
      <ul className={"flex flex-col gap-6"}>
        {clients.map((item, index) => {
          return (
            <Card
              buttonList={[
                {
                  onClick: () => navigate(`./${item.header}/edit`),
                  icon: <PencilSquareIcon className={"w-6 h-6"} />,
                },
              ]}
              key={index}
              header={item.header}
            >
              <div className="flex">
                <div className="flex-grow flex flex-col gap-y-3">
                  <div className="font-semibold">Software version</div>
                  <div>{item.softwareVersion}</div>
                </div>
                <div className="flex-grow flex flex-col gap-y-3">
                  <div className="font-semibold">Quantity</div>
                  <div>{item.quantity}</div>
                </div>
                <div className="flex-grow flex flex-col gap-y-3">
                  <div className="font-semibold">Model</div>
                  <div>{item.model}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </ul>
    </DashboardWrapper>
  );
};

export default withRequireAuth(Clients);
