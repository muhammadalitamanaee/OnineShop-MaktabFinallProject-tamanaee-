import React from "react";
import { useState } from "react";
import ShowProduct from "./ShowProduct";

const OrderPost = ({ loading, order }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  const [showProduct, setShowProduct] = useState(false);
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("order"))
  );
  const closeModal = () => {
    setShowProduct(null);
  };
  return (
    <div>
      <table
        className="w-full text-sm text-left  text-gray-500 dark:text-gray-400"
        dir="rtl"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-zinc-200">
            <th scope="col" class="p-4">
              <div className="flex items-center w-5">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" class="sr-only">
                  انتخاب
                </label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3 ">
              <p className="flex justify-center items-center"> نام </p>
            </th>
            <th scope="col" class="px-6 py-3">
              <p className="flex justify-center items-center"> نام خانوادگی</p>
            </th>
            <th scope="col" class="px-6 py-3">
              <p className="flex justify-center items-center"> قیمت کل</p>
            </th>
            <th
              scope="col"
              class="px-6 py-3 flex justify-center items-center gap-2 "
            >
              <button
                className="outline-none border-none"
                // onClick={sortProduct}
              >
                <svg
                  aria-hidden="true"
                  className=" mb-1 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <p className="flex justify-center items-center"> شماره تلفن</p>
            </th>
            <th scope="col" class="px-6 py-3">
              <p className="flex justify-center items-center"> محصولات</p>{" "}
            </th>
          </tr>
        </thead>
        <tbody className="bg-zinc-200">
          {/* {console.log(product)} */}
          {orders.map((item) => (
            <tr
              className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              // key={post.id}
            >
              <td className="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                // key={post.id}
              >
                <p className="flex justify-center items-center">
                  {" "}
                  {item.username}{" "}
                </p>{" "}
              </th>
              <td class="px-6 py-4">
                {" "}
                <p className="flex justify-center items-center">
                  {" "}
                  {item.lastname}
                </p>
              </td>
              <td class="px-6 py-4">
                {" "}
                <p className="flex justify-center items-center">
                  {" "}
                  {item.prices}
                </p>
              </td>
              <td class="px-6 py-4 ">
                {" "}
                <p className="flex justify-center items-center">
                  {item.phone}{" "}
                </p>
              </td>
              <td className="px-6 py-4 flex justify-center gap-4 items-center">
                <button
                  // id={post.id}
                  // name={post.name}
                  // price={post.price}
                  onClick={() => {
                    setShowProduct(item);
                  }}
                  className="text-blue-500"
                >
                  {" "}
                  مشاهده محصولات
                </button>
              </td>
            </tr>
          ))}
          {showProduct && (
            <ShowProduct showProduct={showProduct} closeModal={closeModal} />
          )}
        </tbody>
      </table>
    </div>
  );
};
export default OrderPost;
