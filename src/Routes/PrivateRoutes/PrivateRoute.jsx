import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginAction } from "../../store/token-slice";
export default function PrivateRoute({ element: element, ...rest }) {
  const accessToken = useSelector((state) => state.login.accessToken);
  const isAuthenticated = accessToken ? true : false;
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to={"/LoginAdmin"} />}
    />
  );
}
