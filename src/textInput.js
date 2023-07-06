import React from 'react';
import RenamedFileInput from './fileInput';


function App (){
    return (
      <div>
          {/*adding text field where users can enter a changeable string*/}
          <input type = "text" name ="Text input" placeholder ="[input text]" />
          <RenamedFileInput/>
          {/*adding the submit button here */}
          <button type = "submit"> Submit </button>
       </div>
      );
}clear
