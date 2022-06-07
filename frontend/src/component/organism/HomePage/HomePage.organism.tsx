import React from "react";
import Button from "../../atoms/forms/Button/Button.atom";
import CheckBox from "../../atoms/forms/CheckBox/CheckBox.atom";
import Footer from "../../molecules/Footer.organism";
import { Footer1, Footer2 } from "../../molecules/Footer.styles";
import NavBar from "../../molecules/NavBar.organism";
import { HomeWrapper } from "./HomePage.styles";

function HomePage() {
  return (
    <HomeWrapper>
      <NavBar></NavBar>
      <Footer></Footer>
      </HomeWrapper>
  );
}

export default HomePage;
