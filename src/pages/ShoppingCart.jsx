import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseUrl } from "./../components/Axios";
import { cartAction } from "../store/cart-store";
import { addCommas } from "@persian-tools/persian-tools";
const ShoppingCart = () => {
  const items = useSelector((state) => state.cart.items);
  const Quantity = useSelector((state) => state.cart.totoalQuantity);
  const dispatch = useDispatch();
  const addProductHandler = (
    id,
    price,
    image,
    quantity,
    totalPrice,
    name,
    brand
  ) => {
    dispatch(
      cartAction.addToCart({
        id,
        price,
        image,
        quantity,
        totalPrice,
        name,
        brand,
      })
    );
  };
  const removeProductHandler = (
    id,
    price,
    image,
    quantity,
    totalPrice,
    name,
    brand
  ) => {
    dispatch(
      cartAction.removeProduct({
        id,
        price,
        image,
        quantity: quantity,
        totalPrice,
        name,
        brand,
      })
    );
  };
  console.log(items);
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center" dir="rtl">
        <div className="flex flex-col">
          <h2>سبد خرید شما</h2>
          <hr className="w-full rounded-xl h-[4px] bg-[#1A56DB] " />
        </div>

        <p>{Quantity}</p>
      </div>
      <div class="flex mt-10 mb-5" dir="rtl">
        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
          جزییات محصول{" "}
        </h3>
        <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
          تعداد{" "}
        </h3>
        <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
          قیمت
        </h3>
        <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
          کل
        </h3>
      </div>
      {console.log(items)}
      {items.map((item) => (
        <div className="flex flex-col justify-center gap-[10px] mt-2">
          <div dir="rtl">
            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6  h-full">
              <div class="flex w-2/5 items-center h-full">
                {/* <!-- product --> */}
                <Link to={`/:${item.id}`} className="h-full w-full">
                  <img
                    class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={`${baseUrl}${item.image}`}
                    alt=""
                  />
                </Link>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">{item.name}</span>
                  <span class="text-red-500 text-xs">{item.brand}</span>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
                <button
                  className="outline-none border-none
                "
                  onClick={() => {
                    addProductHandler(
                      item.id,
                      item.price,
                      item.image,
                      +item.quantity,
                      item.totalPrice,
                      item.name,
                      item.brand
                    );
                  }}
                >
                  <svg
                    class="fill-current text-green-500 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>

                <input
                  class="mx-2 text-center w-10  outline-none border-none rounded-[99px] bg-gray-"
                  type="text"
                  value={+item.quantity}
                />

                <button
                  className="outline-none border-none
                "
                  onClick={() =>
                    removeProductHandler(
                      item.id,
                      item.price,
                      item.image,
                      +item.quantity,
                      item.totalPrice,
                      item.name,
                      item.brand
                    )
                  }
                >
                  <svg
                    class="fill-current text-red-500 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">
                {addCommas(item.price, ",")} تومان
              </span>
              <span class="text-center w-1/5 font-semibold text-sm">
                {addCommas(+item.totalPrice, ",")} تومان
              </span>
            </div>
          </div>
          <hr className="w-full h-[2px] bg-red-500" />
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
