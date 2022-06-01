import React from 'react';
import { PrimaryButton } from './Button.styles';
import { ButtonProps } from './Button.types';

function Button(props:ButtonProps) {
  return (
    <PrimaryButton>{props.text}</PrimaryButton>
  );
}

export default Button;
