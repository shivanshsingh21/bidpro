import React from "react";
// styles
import {
  InnerMenuBar,
  InnerMenuBarLeft,
  InnerMenuBarRight,
  PrimaryMenuBar,
} from "./MenuBar.styles";
import Logo from "./download2.png";


import LoginForm from "./LoginForm/LoginForm.organism";

function MenuBar() {
  return (
    <PrimaryMenuBar>
      <InnerMenuBar>
        <InnerMenuBarRight>
          <img src={Logo} alt={Logo}></img>
        </InnerMenuBarRight>
        <InnerMenuBarLeft>
        <LoginForm></LoginForm>
        </InnerMenuBarLeft>
      </InnerMenuBar>
    </PrimaryMenuBar>
  );
}

export default MenuBar;
