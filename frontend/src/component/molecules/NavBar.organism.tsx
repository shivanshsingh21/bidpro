import React from "react";
import Button from "../atoms/forms/Button/Button.atom";
import CheckBox from "../atoms/forms/CheckBox/CheckBox.atom";
import {
  InnerNavBar,
  InnerNavBarLeft,
  InnerNavBarLeftDiv,
  InnerNavBarRight,
  PrimaryNavBar,
} from "./NavBarr.styles";
import Logo from "./download.png";
import { useHref } from "react-router-dom";
function NavBar() {
  return (
    <PrimaryNavBar>
      <InnerNavBar>
        <InnerNavBarRight>
          <img src={Logo} alt={Logo}></img>
        </InnerNavBarRight>
        <InnerNavBarLeft>
          <InnerNavBarLeftDiv>Home</InnerNavBarLeftDiv>
          <InnerNavBarLeftDiv>About</InnerNavBarLeftDiv>
          <InnerNavBarLeftDiv>Pricing</InnerNavBarLeftDiv>
          <InnerNavBarLeftDiv>Blog</InnerNavBarLeftDiv>
          <InnerNavBarLeftDiv>Sign Up</InnerNavBarLeftDiv>
          <InnerNavBarLeftDiv>Login</InnerNavBarLeftDiv>

        </InnerNavBarLeft>
      </InnerNavBar>
    </PrimaryNavBar>
  );
}

export default NavBar;
