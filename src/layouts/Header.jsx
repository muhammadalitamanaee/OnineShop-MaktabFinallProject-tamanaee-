"use client"

import Container from "./Container";
import MainLogo from "../assets/logo-symbol.svg";
import { Link, NavLink } from "react-router-dom";
// const SignInInfo = lazy(() => import("../components/SignInInfo"));

import NavBar from "./NavBar";
import SignInInfo from "./../components/SignInInfo";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <Container className="sticky flex justify-between gap-8 top-0 z-50 items-center bg-white ">
        {/* sticky position and z-index or fixed and z-index */}
        <div className="flex justify-center items-center gap-1">
          <a href="#">
            <Image src={MainLogo}></Image>
          </a>
          <Link to="/">
            <div className="flex justify-center gap-[4px] items-center">
              <p className="font-black text-[25px] bg-gradient-to-r from-blue-500 via-green-600 to-blue-700  bg-clip-text text-transparent">
                شاپیفای
              </p>
              <p className="font-semibold text-[20px] bg-gradient-to-r from-blue-700  to-blue-500  bg-clip-text text-transparent">
                {" "}
                مارکت{" "}
              </p>
            </div>
          </Link>
        </div>

        <div className="flex justify-center items-center gap-[40px]">
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <SignInInfo />
          {/* </Suspense> */}

          <NavLink
            to="/LoginAdmin"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <div className="flex justify-center items-center gap-4">
              <p> پنل مدیریت</p>
              <svg
                aria-hidden="true"
                className=" mb-1 w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
          </NavLink>
        </div>
      </Container>

      <hr className="bg-zinc-500 h-[1px] w-full" />

      <NavBar />
    </>
  );
};

export default Header;
