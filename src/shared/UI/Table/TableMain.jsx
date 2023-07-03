import React from "react";
import { Button } from "../Button/Button";

const TableMain = ({ gridCols, children, button }) => {
  return (
    <>
      <form className={`${gridCols ? `grid-cols-2 grid` : ""}  gap-8 `}>
        {children}
        <div className="flex justify-end mt-40 gap-8">
          {button
            ? button.map((item, index) => (
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
              ))
            : ""}
        </div>
      </form>
    </>
  );
};

export default TableMain;
