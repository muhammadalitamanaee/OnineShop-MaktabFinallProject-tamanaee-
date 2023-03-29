import React, { useState, useEffect } from "react";
import AddProduct from "./AddProduct";
import axios from "axios";
import { baseUrl } from "../Axios";
import DeleteProduct from "./delete Product/DeleteProduct";
import EditProduct from "./EditProduct";
import { addCommas } from "@persian-tools/persian-tools";
export default function AdminPosts({
  posts,
  loading,
  queryStringHandler,
  value,
  sortProduct,
  sortedProduct,
}) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const [searchInput, setSearchInput] = useState("");
  const [activeEditButton, setActiveEditButton] = useState(null);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`${baseUrl}/products/${activeEditButton}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [activeEditButton]);
  // console.log(product);
  const inputHandler = (e) => {
    // e.preventDefault();
    // setSearchInput(e.target.value);
    // console.log("object");
    queryStringHandler(e.target.value);
  };
  const closeModal = () => {
    setActiveEditButton(null);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    posts
      .filter((post) => post.name === searchInput)
      .map((index) => alert(`${index.price}`));
  };

  return (
    <>
      <form onSubmit={submitHandler} className="mb-3">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          جستجو در محصولات
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            onChange={inputHandler}
            value={value}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            دنبال چه محصولی هستید؟
          </button>
        </div>
      </form>
      <AddProduct className="mb-4" />
      <div
        className="relative overflow-x-auto shadow-md sm:rounded-lg"
        dir="rtl"
      >
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
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
                <p className="flex justify-center items-center"> نام محصول </p>
              </th>
              <th scope="col" class="px-6 py-3">
                <p className="flex justify-center items-center"> رنگ</p>
              </th>
              <th scope="col" class="px-6 py-3">
                <p className="flex justify-center items-center"> دسته</p>
              </th>
              <th
                scope="col"
                class="px-6 py-3 flex justify-center items-center gap-2 "
              >
                <button
                  className="outline-none border-none"
                  onClick={sortProduct}
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
                <p className="flex justify-center items-center"> قیمت</p>
              </th>
              <th scope="col" class="px-6 py-3">
                <p className="flex justify-center items-center"> عمل</p>{" "}
              </th>
            </tr>
          </thead>
          <tbody className="bg-zinc-200">
            {/* {console.log(product)} */}
            {(sortedProduct
              ? [...posts].sort((a, b) => a.price - b.price)
              : posts
            ).map((post) => (
              <tr
                className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                key={post.id}
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
                  key={post.id}
                >
                  <p className="flex justify-center items-center">
                    {" "}
                    {post.name}
                  </p>{" "}
                </th>
                <td class="px-6 py-4">
                  {" "}
                  <p className="flex justify-center items-center"> نقره ای</p>
                </td>
                <td class="px-6 py-4">
                  {" "}
                  <p className="flex justify-center items-center">
                    {" "}
                    {post.loptop === "true" ? (
                      <p>لپتاپ</p>
                    ) : post.phone === "true" ? (
                      <p>موبایل</p>
                    ) : (
                      <p>دیگر دسته ها</p>
                    )}
                  </p>
                </td>
                <td class="px-6 py-4 ">
                  {" "}
                  <p className="flex justify-center items-center">
                    {addCommas(`${post.price}`)} تومان
                  </p>
                </td>
                <td className="px-6 py-4 flex justify-center gap-4 items-center">
                  <button
                    id={post.id}
                    name={post.name}
                    price={post.price}
                    onClick={() => {
                      setActiveEditButton(post.id);
                    }}
                    className="text-blue-500"
                  >
                    {" "}
                    ویرایش
                  </button>

                  <DeleteProduct
                    class="font-medium text-red-600 dark:text-red-500 hover:underline outline-none border-none"
                    id={post.id}
                  >
                    <p className="flex justify-center items-center text-red-500">
                      حذف
                    </p>
                  </DeleteProduct>
                </td>
              </tr>
            ))}
            {activeEditButton ? (
              <EditProduct
                activeEditButton={activeEditButton}
                closeModal={closeModal}
                product={product}
              />
            ) : null}
          </tbody>
        </table>
      </div>
    </>
  );
}
