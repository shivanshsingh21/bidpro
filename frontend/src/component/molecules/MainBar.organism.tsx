import React from "react";
import RegistrationForm from "./Registration/Registration.organism";

import {
  InnerMainBar,
  InnerMainBarLeft,
  InnerMainBarRight,
  PrimaryMainBar,
} from "./MainBar.styles";
import Logo from "./download1.png";
function MainBar() {
  return (
    <PrimaryMainBar>
      <InnerMainBar>
        <InnerMainBarRight>
          <img src={Logo} alt={Logo}></img>
        </InnerMainBarRight>
        <InnerMainBarLeft>
        <RegistrationForm></RegistrationForm>
        
        </InnerMainBarLeft>
       
      </InnerMainBar>
    </PrimaryMainBar>
  );
}

export default MainBar;
