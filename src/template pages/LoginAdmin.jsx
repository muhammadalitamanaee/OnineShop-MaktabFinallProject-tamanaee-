import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../components/Axios";
import { useSelector, useDispatch } from "react-redux";
import getTokens from "../store/token-action";
import { useRouter } from "next/navigation";

const LoginAdmin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [accessT, setAccesst] = useState("");
  const accesToken = useSelector((state) => state.login.accesToken);
  const t = useSelector((state) => state.accessToken);
  const [loginForm, setLoginform] = useState({ username: "", password: "" });
  const userChangeHandler = (e) => {
    setLoginform({ ...loginForm, username: e.target.value });
    console.log(loginForm);
  };
  const userPassHandler = (e) => {
    setLoginform({ ...loginForm, password: e.target.value });
  };
  const submitHandler = (username, password) => {
    return dispatch(getTokens(username, password)), router.push("/AdminProducts");
  };

  return (
    <div className="w-1/3 mt-6 mx-auto bg-slate-500 p-4 rounded-2xl" dir="rtl">
      <h1>پنل ورودی ادمین</h1>

      <form>
        <div class="mb-6 mt-6">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            نام کاربری{" "}
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Admin"
            value={loginForm.username}
            onChange={userChangeHandler}
          />
        </div>
        <div className="mb-6 mt-6">
          <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            رمز عبور{" "}
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={loginForm.password}
            onChange={userPassHandler}
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5" dir="ltr">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label htmlFor="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            مرا به خاطر بسپار{" "}
          </label>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => submitHandler(loginForm.username, loginForm.password)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default LoginAdmin;
