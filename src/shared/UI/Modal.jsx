import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-black/50">
      <div className="absolute top-1/3 w-[498px] mx-auto z-20 right-0 left-0 bg-neutral-50 p-10 rounded">
        {children}
      </div>
    </div>,
    elRef.current
  );
};

export default Modal;
