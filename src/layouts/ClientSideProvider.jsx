"use client";
import React from "react";
import store from "../store/store";
import { Provider } from "react-redux";

export default function ClintSideProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
