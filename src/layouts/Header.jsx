import Container from "./Container";
import React from "react";
import MainLogo from "../assets/logo-symbol.svg";

import TextLogo from "../assets/Shopify.png";
import SearchBar from "./SearchBar";
import SignInOut from "./SignInOut";
import SignInInfo from "../components/SignInInfo";
const Header = () => {
  return (
    <Container className="fixed  flex justify-center gap-8 items-center w-full">
      <div className="flex justify-center items-center gap-1">
        <a href="#">
          <img src={MainLogo}></img>
        </a>
        <a href="#">
          <img src={TextLogo} />
        </a>
      </div>
      <SearchBar className="w-2/4" />
      <SignInOut />
      <SignInInfo />
    </Container>
  );
};

export default Header;
