import React from "react";
import withRequireAuth from "../../../features/requireAuth/withRequireAuth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardWrapper from "../../../shared/UI/DashboardWrapper";
import TableHeader from "../../../shared/UI/Table/TableHeader";
import { PATHS } from "../../../app/constants/paths";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import Card from "../../../shared/UI/Card";

const Vendors = () => {
  const vendors = useSelector((store) => store.vendors);
  const navigate = useNavigate();

  return (
    <DashboardWrapper>
      <TableHeader
        buttonStyleFilled={true}
        headerNavArray={["Vendors"]}
        button={[
          {
            onClick: () => navigate(PATHS.VENDORS_CREATE),
            label: "Create",
            buttonStyleFilled: true,
            icon: <PlusIcon />,
          },
        ]}
      />
      <ul className={"flex flex-col gap-6"}>
        {vendors.map((item, index) => {
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
                  <div className="font-semibold">Models</div>
                  <div className="flex gap-x-6">
                    {item.models.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </ul>
    </DashboardWrapper>
  );
};

export default withRequireAuth(Vendors);
