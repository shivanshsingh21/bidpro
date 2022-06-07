import React from 'react';
import { PrimaryTextbox } from './Textbox.styles';
import { TextboxProps } from './Textbox.types';


function Textbox(props:TextboxProps) {
  return (
      
    <PrimaryTextbox> 

<input type="text" value={props.value} />

    </PrimaryTextbox>
    
    

  );
 
  
  
}

export default Textbox;


