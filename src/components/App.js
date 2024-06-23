
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
const [value,setValue]=useState(0);
function increase() 
{
  setValue(value + 1);
};


  return (
    <div>
        <p>Button clicked {value} times</p>
        <button onClick={increase}>click me</button>
    </div>
  )
}

export default App
