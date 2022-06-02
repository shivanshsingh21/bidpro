import React from 'react';
import Textbox from '../../atoms/forms/Textbox/Textbox.atom';
import { HomeWrapper } from './HomePage.styles';

function HomePage() {
  return (
    <HomeWrapper>
     <Textbox text='hello'></Textbox>
      

    </HomeWrapper>
  );
}

export default HomePage;
