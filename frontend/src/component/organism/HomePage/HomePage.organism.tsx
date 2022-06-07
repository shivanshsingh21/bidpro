
import React from "react";
import Textbox from '../../atoms/forms/Textbox/Textbox.atom';
import Button from "../../atoms/forms/Button/Button.atom";
import CheckBox from "../../atoms/forms/CheckBox/CheckBox.atom";
import NavBar from "../../molecules/NavBar.organism";
import MenuBar from "../../molecules/Menubar.organism";
import MainBar from "../../molecules/MainBar.organism";
import { HomeWrapper } from "./HomePage.styles";


function HomePage() {
  return (
    <HomeWrapper>

      

      <NavBar></NavBar>
      <MenuBar></MenuBar>
      <MainBar></MainBar>

    </HomeWrapper>
  );
}

export default HomePage;
