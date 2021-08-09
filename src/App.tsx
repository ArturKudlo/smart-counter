import React, { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <div className={"wrap"}>
        <Counter maxCount={5} resetValue={0} stepValue={1} />
      </div>
    </div>
  );
}

export default App;
