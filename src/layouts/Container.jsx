import React from "react";
const Container = (props) => {
  const { className, children } = props;
  return (
    <div dir="rtl" className={`w-full p-4 ${className}`}>
      {children}
    </div>
  );
};
export default Container;
