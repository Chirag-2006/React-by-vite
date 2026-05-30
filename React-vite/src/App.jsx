import React, { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(pichlawalCounter => pichlawalCounter + 1);
    setCounter(pichlawalCounter => pichlawalCounter + 1);
    setCounter(pichlawalCounter => pichlawalCounter + 1);
    setCounter(pichlawalCounter => pichlawalCounter + 1);
    // console.log(typeof counter);  // counter is a number
    // console.log(typeof setCounter);  // setCounter is a function
    // console.log(typeof useState);  // useState is a function
    if (counter >= 10) {
      alert("sorry, limit reached");
      setCounter(10);
    }
  };
  const remove = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      alert("sorry, zero limit reached");
      setCounter(0);
    }
  };

  return (
    <>
      <div className="container">
        <h1>hello chirag arya</h1>
        <h3>Counter {counter}</h3>
        <div>
          <button onClick={add} style={{marginRight: "13px"}}>Add</button>
          <button onClick={remove}>remove</button>
        </div>
      </div>
    </>
  );
}

export default App;
