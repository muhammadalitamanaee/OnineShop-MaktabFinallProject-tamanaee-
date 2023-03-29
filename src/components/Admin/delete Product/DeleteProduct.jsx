import React from "react";
import axios from "axios";
import { baseUrl } from "../../Axios";
import { useSelector } from "react-redux";
export default function DeleteProduct(props) {
  const { id } = props;
  const accessToken = localStorage.getItem("access_token");

  const DeleteProductHandler = () => {
    axios
      .delete(`${baseUrl}/products/${props.id}`, {
        headers: {
          token: accessToken,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <button
      className="font-medium text-red-600 dark:text-red-500 hover:underline outline-none border-none"
      onClick={DeleteProductHandler}
    >
      {props.children}
    </button>
  );
}
