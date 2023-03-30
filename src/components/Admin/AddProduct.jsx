import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../Axios";
function AddProduct({ className }) {
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  // const[file,setFile]=useState(null)
  const AddProduct = () => {
    let formdata = new FormData();
    formdata.append("image", file);
    formdata.append("brand", brand);
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("stock", stock);
    axios
      .post(`${baseUrl}/products`, formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={`${className}`}>
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        className="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        افزودن محصول{" "}
      </button>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                محصول مورد نظر خود را اضافه کنید{" "}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="relative p-4 w-full h-full md:h-auto ">
              {/* <!-- Modal content --> */}
              <div className="relative p-4 rounded-lg shadow dark:bg-gray-800 sm:p-5  bg-zinc-200">
                {/* <!-- Modal header --> */}
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    افزودن محصول{" "}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                <form>
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
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
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
                        onChange={(e) => {
                          setBrand(e.target.value);
                        }}
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
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="stock"
                        className="block mb-2 text-sm font-medium text-right text-gray-900 dark:text-white"
                      >
                        موجودی{" "}
                      </label>
                      <input
                        type="number"
                        value={stock}
                        name="stock"
                        id="stock"
                        onChange={(e) => {
                          setStock(e.target.value);
                        }}
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
                        // value={category}
                        // onChange={categoryHandler}
                      >
                        <option selected="">انتخاب کنید</option>
                        <option value="mb">موبایل</option>
                        <option value="TV">لپ تاپ</option>
                        <option value="PC">دیگر محصولات</option>
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
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US
                      </textarea>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 justify-end gap-3">
                    <button
                      type="submit"
                      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      onClick={AddProduct}
                    >
                      افزودن محصول{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- Modal footer --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
