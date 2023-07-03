import React, { useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import withRequireAuth from "../../../features/requireAuth/withRequireAuth";

import { useDispatch, useSelector } from "react-redux";
import { createVendor } from "../../../features/vendors/vendorsSlice";
import { useInputChange } from "../../../shared/Hooks/useInputChange";
import DashboardWrapper from "../../../shared/UI/DashboardWrapper";
import Modal from "../../../shared/UI/Modal";
import ModalConfirm from "../../../shared/UI/ModalConfirm";
import TableHeader from "../../../shared/UI/Table/TableHeader";
import TableMain from "../../../shared/UI/Table/TableMain";
import Input from "../../../shared/UI/Input";

import { selectSeveralOptions } from "../../../features/select";
import {
  expiryDateVariety,
  modelVariety,
  softwareVersionVariety,
} from "../../../app/constants/constantsToDelete";
import SelectCustom from "../../../shared/UI/SelectCustom";

const VendorCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [models, setModels] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const data = {
      header: name,
      models,

      id: Math.floor(Math.random() * 1000) + 1,
    };

    dispatch(createVendor(data));
    navigate(`/vendors`);
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
      <TableHeader headerNavArray={["Vendors", "Create"]}></TableHeader>
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

export default withRequireAuth(VendorCreate);
