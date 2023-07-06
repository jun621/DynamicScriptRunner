import React from 'react';
import RenamedFileInput from './fileInput';

const App = () => {
  return (
    <div>
     <input type = "text" name ="Text input" placeholder ="[input text]" />
        <RenamedFileInput/>
        {/*adding the submit button here */}
      <button type = "submit"> Submit </button>
    </div>
  );
};

export default App;


