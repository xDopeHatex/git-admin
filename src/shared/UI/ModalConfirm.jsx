import React from "react";
import { Button } from "./Button/Button";

const ModalConfirm = ({ children, button }) => {
  return (
    <div className=" flex flex-col justify-center items-center  gap-8 z-10">
      <p className="text-xl font-medium text-neutral-800">{children}</p>
      <div className="flex gap-8">
        {button.map((item, index) => (
          <Button
            key={index}
            label={item.label}
            buttonStyleOutline={item.buttonStyleOutline}
            type={item.type}
            buttonStyleFilled={item.buttonStyleFilled}
            icon={item.icon}
            onClick={item.onClick}
            buttonClassName={item.buttonClassName}
          ></Button>
        ))}
      </div>
    </div>
  );
};

export default ModalConfirm;
