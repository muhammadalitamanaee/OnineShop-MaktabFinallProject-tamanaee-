// import React from "react";
// import { Navigate, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Link from "next/link";

// export default function PrivateRoute({ element: element, ...rest }) {
//   const accessToken = useSelector((state) => state.login.accessToken);
//   const isAuthenticated = accessToken ? true : false;

//   return <Route {...rest} element={isAuthenticated ? element : <Link to={"/LoginAdmin"} />} />;
// }
//this should be a function and private route wraps inside it
