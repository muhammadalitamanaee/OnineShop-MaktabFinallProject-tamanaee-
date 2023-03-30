import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../components/Axios";
import OrderPost from "../components/OrderPost/OrderPost";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/orders`)
      .then((res) => {
        setOrders(res.data.username);
        localStorage.setItem("order", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  return (
    <>
      <OrderPost order={orders} loading={loading} />
    </>
  );
};
export default Orders;
