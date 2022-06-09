import React from "react";
import Button from "../atoms/forms/Button/Button.atom";
import CheckBox from "../atoms/forms/CheckBox/CheckBox.atom";
import TextBox from "../atoms/forms/Textbox/Textbox.atom";

import {
  InnerMenuBar,
  InnerMenuBarLeft,
  InnerMenuBarLeftDiv,
  InnerMenuBarRight,
  PrimaryMenuBar,
} from "./MenuBar.styles";
import Logo from "./download2.png";
import { useHref } from "react-router-dom";
import { HomeWrapper } from "../organism/HomePage/HomePage.styles";
function MenuBar() {
  return (
    <PrimaryMenuBar>
      <InnerMenuBar>
        <InnerMenuBarRight>
          <img src={Logo} alt={Logo}></img>
        </InnerMenuBarRight>
        <InnerMenuBarLeft>
          <TextBox value="E-MAIL"></TextBox>
          <TextBox value="PASSWORD"></TextBox>
          <Button text="Login"></Button>
         </InnerMenuBarLeft>
      </InnerMenuBar>
    </PrimaryMenuBar>
  );
}

export default MenuBar;
