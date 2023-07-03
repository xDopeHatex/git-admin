import React from "react";

const DashboardWrapper = ({ children, className }) => {
  return (
    <section
      className={`w-full h-full bg-neutral-50 py-[2.125rem] px-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default DashboardWrapper;
