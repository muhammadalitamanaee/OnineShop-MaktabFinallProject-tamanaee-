import React from "react";
import { useSelector } from "react-redux";
const ShoppingCart = () => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <div>item.title</div>
      ))}
    </>
  );
};

export default ShoppingCart;
