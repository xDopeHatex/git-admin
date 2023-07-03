import React, { useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import withRequireAuth from "../../../features/requireAuth/withRequireAuth";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteVendor,
  editVendor,
} from "../../../features/vendors/vendorsSlice";
import { useInputChange } from "../../../shared/Hooks/useInputChange";
import DashboardWrapper from "../../../shared/UI/DashboardWrapper";
import Modal from "../../../shared/UI/Modal";
import ModalConfirm from "../../../shared/UI/ModalConfirm";
import TableHeader from "../../../shared/UI/Table/TableHeader";
import TableMain from "../../../shared/UI/Table/TableMain";
import Input from "../../../shared/UI/Input";

import {
  expiryDateVariety,
  modelVariety,
  softwareVersionVariety,
} from "../../../app/constants/constantsToDelete";
import SelectCustom from "../../../shared/UI/SelectCustom";
import {
  deleteClient,
  editClient,
} from "../../../features/clients/clientsSlice";
import { PATHS } from "../../../app/constants/paths";
import { TrashIcon } from "@heroicons/react/24/outline";
import { selectSeveralOptions } from "../../../features/select";

const VendorEdit = () => {
  const { linkName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const vendors = useSelector((store) => store.vendors);
  const [currentVendor] = vendors.filter((item) => item.header === linkName);

  const [name, setName] = useState(currentVendor.header);
  const [models, setModels] = useState([...currentVendor.models]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    const data = {
      header: name,
      models,

      id: currentVendor.id,
    };

    dispatch(editVendor(data));
    navigate(`/vendors`);
  };

  const buttons = [
    {
      label: "Cancel",
      buttonStyleOutline: true,
      onClick: () => navigate("/vendors"),
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
        dispatch(deleteVendor(currentVendor.id));
        navigate(PATHS.VENDORS);
      },
    },
  ];

  return (
    <DashboardWrapper>
      {isDeleteModalOpen ? (
        <Modal>
          <ModalConfirm button={modalButtons}>
            Are you sure you want to delete this vendor?
          </ModalConfirm>
        </Modal>
      ) : null}
      <TableHeader
        headerNavArray={["Vendors", linkName, "Edit"]}
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <SelectCustom
          options={modelVariety}
          label="Model"
          onChange={(e) => selectSeveralOptions(e, models, setModels)}
          value={models}
        />
        <div />
      </TableMain>
    </DashboardWrapper>
  );
};

export default withRequireAuth(VendorEdit);
