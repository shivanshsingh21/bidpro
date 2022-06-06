import React from "react";
import Button from "../../atoms/forms/Button/Button.atom";
import CheckBox from "../../atoms/forms/CheckBox/CheckBox.atom";
import NavBar from "../../molecules/NavBar.organism";
import { HomeWrapper } from "./HomePage.styles";

function HomePage() {
  return (
    <HomeWrapper>
      <NavBar></NavBar>
    </HomeWrapper>
  );
}

export default HomePage;
