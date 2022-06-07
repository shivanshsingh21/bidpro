import React from "react";
import Styled from "styled-components";
import { PrimaryCheckBox } from "./CheckBox.styles";
import { CheckBoxProps } from "./CheckBox.types";

function CheckBox(props: CheckBoxProps) {
  return (
    <PrimaryCheckBox>
      <input type="checkbox" checked={props.checked} />
    </PrimaryCheckBox>
  );
}

export default CheckBox;
