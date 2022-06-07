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
       
            <InnerMenuBarLeftDiv>
            <HomeWrapper><TextBox value= ""></TextBox></HomeWrapper>
            
        </InnerMenuBarLeftDiv> <InnerMenuBarLeftDiv></InnerMenuBarLeftDiv>
        <InnerMenuBarLeftDiv><HomeWrapper><TextBox value=""></TextBox></HomeWrapper>
        </InnerMenuBarLeftDiv>
        <InnerMenuBarLeftDiv><HomeWrapper><Button text='Login'></Button></HomeWrapper>
        
        </InnerMenuBarLeftDiv>
  
        </InnerMenuBarLeft>
      </InnerMenuBar>
    </PrimaryMenuBar>
  );
}

export default MenuBar;
