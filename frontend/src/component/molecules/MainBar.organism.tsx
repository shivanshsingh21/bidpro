import React from "react";
import Button from "../atoms/forms/Button/Button.atom";
import CheckBox from "../atoms/forms/CheckBox/CheckBox.atom";
import TextBox from "../atoms/forms/Textbox/Textbox.atom";

import {
  InnerMainBar,
  InnerMainBarLeft,
  InnerMainBarLeftDiv,
  InnerMainBarRight,
  PrimaryMainBar,
} from "./MainBar.styles";
import Logo from "./download1.png";
import { useHref } from "react-router-dom";
import { HomeWrapper } from "../organism/HomePage/HomePage.styles";
function MainBar() {
  return (
    <PrimaryMainBar>
      <InnerMainBar>
        <InnerMainBarRight>
          <img src={Logo} alt={Logo}></img>
        </InnerMainBarRight>
        <InnerMainBarLeft>

            <InnerMainBarLeftDiv><HomeWrapper><TextBox value=''></TextBox></HomeWrapper>
         
        </InnerMainBarLeftDiv>
        </InnerMainBarLeft>
      </InnerMainBar>
    </PrimaryMainBar>
  );
}

export default MainBar;
