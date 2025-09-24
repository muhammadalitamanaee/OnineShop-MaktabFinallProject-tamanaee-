import { loginAction } from "./token-slice";

import { baseUrl } from "../components/Axios";
import axios from "axios";

const getTokens = (username, password) => {
  return (dispatch) => {
    axios
      .post(`${baseUrl}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("access_token", res.data.accessToken);
        // dispatch(loginAction.tokenHandler(res.data.accessToken));
        navigate("/AdminProducts");
      })
      .catch((err) => dispatch(loginAction.tokenErrorHandler("hh")));
  };
};

export default getTokens;
//you can put async before (dispatch) too
