import React from "react";

const Span = ({children}) => {
  return (
    <span className="w-[37px] h-[37px] bg-slate-200 justify-center flex items-center rounded-md hover:bg-slate-100 cursor-pointer">{children}</span>
  );
};

export default Span;
