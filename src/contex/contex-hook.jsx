import React from "react";

const MainContex = React.createContext({
  isPhone: true,
  isLopTop: true,
  isOther: true,
  query: "",
});

export default MainContex;
