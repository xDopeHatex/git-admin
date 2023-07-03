import React, { useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import withRequireAuth from "../../../features/requireAuth/withRequireAuth";
import { PATHS } from "../../../app/constants/paths";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import inputDashboard from "../../../entities/inputDashboard/inputDashboard";
import InputDashboard from "../../../entities/inputDashboard/inputDashboard";
import { Button } from "../../../shared/UI/Button/Button";
import { Trans } from "@lingui/macro";

import { useDispatch, useSelector } from "react-redux";
import {
  createClient,
  deleteClient,
  editClient,
} from "../../../features/clients/clientsSlice";
import { useInputChange } from "../../../shared/Hooks/useInputChange";
import DashboardWrapper from "../../../shared/UI/DashboardWrapper";
import Modal from "../../../shared/UI/Modal";
import ModalConfirm from "../../../shared/UI/ModalConfirm";
import TableHeader from "../../../shared/UI/Table/TableHeader";
import TableMain from "../../../shared/UI/Table/TableMain";
import Input from "../../../shared/UI/Input";
import SelectCustom from "../../../shared/UI/SelectCustom";
import {
  expiryDateVariety,
  modelVariety,
  softwareVersionVariety,
} from "../../../app/constants/constantsToDelete";
import { selectOption } from "../../../features/select";

const ClientCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [model, setModel] = useState("Model #1");
  const [softwareVersion, setSoftwareVersion] = useState("SK Pay - Vend");
  const [quantity, setQuantity] = useState();
  const [expiryDate, setExpiryDate] = useState("1 year");

  const submit = (e) => {
    e.preventDefault();
    const data = {
      header: name,
      model,
      softwareVersion,
      quantity,
      expiryDate,
      id: Math.floor(Math.random() * 1000) + 1,
    };

    dispatch(createClient(data));
    navigate(`/clients`);
  };

  const buttons = [
    {
      label: "Cancel",
      buttonStyleOutline: true,
      onClick: () => console.log("yeah"),
    },
    {
      type: "submit",
      label: "Create",
      buttonStyleFilled: true,
      onClick: submit,
    },
  ];

  return (
    <DashboardWrapper>
      <TableHeader headerNavArray={["Clients", "Create"]}></TableHeader>
      <TableMain gridCols="2" button={buttons}>
        <Input
          label="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <SelectCustom
          options={modelVariety}
          label="Model"
          value={model}
          onChange={(e) => selectOption(e, setModel)}
        />
        <SelectCustom
          options={softwareVersionVariety}
          label="Software Version"
          value={softwareVersion}
          onChange={(e) => selectOption(e, setSoftwareVersion)}
        />
        <Input
          label="Quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <SelectCustom
          options={expiryDateVariety}
          label="Expiry Date"
          value={expiryDate}
          onChange={(e) => selectOption(e, setExpiryDate)}
        />
      </TableMain>
    </DashboardWrapper>
  );
};

export default withRequireAuth(ClientCreate);
