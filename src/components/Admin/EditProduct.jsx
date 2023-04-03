import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Axios";
const EditProduct = (props) => {
  // const emailHandler = (e) => {
  //   const name = e.target.avlue;
  // };

  const [file, setFile] = useState(props.product ? props.product.image : " ");
  // const [file, setFile] = useState(" ");
  const [brand, setBrand] = useState(props.product ? props.product.brand : " ");
  const [name, setName] = useState(props.product ? props.product.name : " ");
  const [stock, setStock] = useState(props.product ? props.product.stock : " ");
  const [price, setPrice] = useState(props.product ? props.product.price : "");
  const [category, setCategory] = useState(null);
  const nameHandler = (event) => {
    setName(event.target.value), console.log(name);
  };
  const brandHandler = (event) => setBrand(event.target.value);
  const categoryHandler = (event) => setCategory(event.target.value);
  const priceHandler = (event) => setPrice(event.target.value);
  const stockHandler = (event) => setStock(event.target.value);
  const editHandler = (event) => {
    event.preventDefault();
    console.log(brand);
    console.log(name);
    console.log(price);
    const newProduct = {
      ...props.product,
      name: name,
      brand: brand,
      price: price,
      image: file,
      id: props.activeEditButton,
    };

    axios
      .put(`${baseUrl}/products/${props.activeEditButton}`, newProduct, {
        headers: {
          token: localStorage.getItem("access_token"),
        },
      })
      .then((res) => console.log(res), console.log(brand), console.log(price))
      .catch((err) => console.log(err))
      .finally(() => {
        props.closeModal();
      });
  };
  return (
    // <!-- Main modal -->
    <div
      id="updateProductModal"
      tabIndex="-1"
      aria-hidden="true"
      className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 mx-auto justify-center items-center w-full md:inset-0 h-modal md:h-full flex "
    >
      <div className="relative p-4 w-6/12 h-full md:h-auto ">
        {/* <!-- Modal content --> */}
        <div className="relative p-4 rounded-lg shadow dark:bg-gray-800 sm:p-5  bg-zinc-200">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              ویرایش محصول{" "}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={props.closeModal}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form onSubmit={editHandler}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-right text-gray-900 dark:text-white"
                >
                  نام{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={nameHandler}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  // placeholder="Ex. Apple iMac 27&ldquo;"
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-right text-gray-900 dark:text-white"
                >
                  برند{" "}
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  value={brand}
                  onChange={brandHandler}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  // placeholder="Ex. Apple"
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-right text-gray-900 dark:text-white"
                >
                  قیمت{" "}
                </label>
                <input
                  type="number"
                  value={price}
                  name="price"
                  id="price"
                  onChange={priceHandler}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-right text-gray-900 dark:text-white"
                >
                  دسته{" "}
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={category}
                  onChange={categoryHandler}
                >
                  <option selected="">انتخاب کنید</option>
                  <option value="mb">موبایل</option>
                  <option value="TV">لپ تاپ</option>
                  <option value="PC">تبلت</option>
                  <option value="GA">ساعد هوشمند</option>
                  <option value="PH">کنسول بازی </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-right text-gray-900 dark:text-white"
                >
                  انتخاب عکس{" "}
                </label>
                <input
                  className="p-6"
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-right text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="5"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write a description..."
                >
                  Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                  processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                  Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD
                  storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US
                </textarea>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-end gap-3">
              <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                ویرایش محصول{" "}
              </button>
              <button
                type="button"
                className="text-red-600  hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 flex justify-center items-center gap-2"
              >
                <svg
                  className="mr-1 -ml-1 w-5 h-5 flex justify-center items-center"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="flex justify-center items-center">حذف محصول </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
