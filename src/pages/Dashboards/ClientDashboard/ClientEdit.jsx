import React from "react";
import { useParams } from "react-router-dom";
import withRequireAuth from "../../../features/requireAuth/withRequireAuth";

import DashboardWrapper from "../../../shared/UI/DashboardWrapper";
import TableHeader from "../../../shared/UI/Table/TableHeader";
import { useState } from "react";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import Input from "../../../shared/UI/Input";
import SelectCustom from "../../../shared/UI/SelectCustom";
import { modelVariety } from "../../../app/constants/constantsToDelete";
import { softwareVersionVariety } from "../../../app/constants/constantsToDelete";
import { expiryDateVariety } from "../../../app/constants/constantsToDelete";
import TableMain from "../../../shared/UI/Table/TableMain";

import { useDispatch } from "react-redux";
import {
  editClient,
  deleteClient,
} from "../../../features/clients/clientsSlice";
import { PATHS } from "../../../app/constants/paths";
import { useNavigate } from "react-router-dom";
import Modal from "../../../shared/UI/Modal";
import ModalConfirm from "../../../shared/UI/ModalConfirm";
import { selectOption } from "../../../features/select";

const ClientEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { linkName } = useParams();
  const clients = useSelector((store) => store.clients);
  const [currentClient] = clients.filter((item) => item.header === linkName);

  const [name, setName] = useState(currentClient.header);
  const [model, setModel] = useState(currentClient.model);
  const [softwareVersion, setSoftwareVersion] = useState(
    currentClient.softwareVersion
  );
  const [quantity, setQuantity] = useState(currentClient.quantity);
  const [expiryDate, setExpiryDate] = useState(currentClient.expiryDate);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const data = {
      header: name,
      model,
      softwareVersion,
      quantity,
      expiryDate,
      id: currentClient.id,
    };
    console.log(data);

    dispatch(editClient(data));
    navigate(`/clients/`);
  };

  const buttons = [
    {
      label: "Cancel",
      buttonStyleOutline: true,
      onClick: () => console.log("yeah"),
    },
    {
      type: "submit",
      label: "Save",
      buttonStyleFilled: true,
      onClick: submit,
    },
  ];

  const modalButtons = [
    {
      label: "Cancel",
      buttonStyleOutline: true,
      onClick: () => {
        setIsDeleteModalOpen(false);
      },
    },
    {
      label: "Delete",
      buttonStyleFilled: true,
      onClick: () => {
        dispatch(deleteClient(currentClient.id));
        navigate(PATHS.CLIENTS);
      },
    },
  ];

  return (
    <DashboardWrapper>
      {isDeleteModalOpen ? (
        <Modal>
          <ModalConfirm button={modalButtons}>
            Are you sure you want to delete this client?
          </ModalConfirm>
        </Modal>
      ) : null}
      <TableHeader
        headerNavArray={["Clients", linkName, "Edit"]}
        button={[
          {
            onClick: () => {
              setIsDeleteModalOpen(true);
            },
            label: "Delete",
            buttonStyleOutline: true,
            icon: <TrashIcon />,
          },
        ]}
        buttonStyleOutline={true}
      ></TableHeader>
      <TableMain gridCols="2" button={buttons}>
        <Input
          label="Name"
          id={currentClient.header}
          name={currentClient.header}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <SelectCustom
          id={currentClient.model}
          name={currentClient.model}
          options={modelVariety}
          label="Model"
          value={model}
          onChange={(e) => selectOption(e, setModel)}
        />
        <SelectCustom
          id={currentClient.softwareVersion}
          name={currentClient.softwareVersion}
          options={softwareVersionVariety}
          label="Software Version"
          value={softwareVersion}
          onChange={(e) => selectOption(e, setSoftwareVersion)}
        />
        <Input
          label="Quantity"
          id={currentClient.quantity}
          name={currentClient.quantity}
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <SelectCustom
          id={currentClient.expiryDate}
          name={currentClient.expiryDate}
          options={expiryDateVariety}
          label="Expiry Date"
          value={expiryDate}
          onChange={(e) => selectOption(e, setExpiryDate)}
        />
      </TableMain>
    </DashboardWrapper>
  );
};

export default withRequireAuth(ClientEdit);
