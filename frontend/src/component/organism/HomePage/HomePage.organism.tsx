import React from 'react';
import Button from '../../atoms/forms/Button/Button.atom';
import { ButtonWrapper, HomeWrapper } from './HomePage.styles';
import hooks from './HomePage.hooks';

function HomePage() {
  let {increment,counter,desc,fetchUser}= hooks()
  return (
    <HomeWrapper>{counter}
      <Button text='Increment'></Button>

    </HomeWrapper>
  );
}

export default HomePage;
