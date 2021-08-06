import React, { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { CounterSettings } from "./CounterSettings";

function App() {
  return (
    <div className="App">
      <div className={"wrap"}>
        <CounterSettings />
        <Counter maxCount={5} resetValue={0} stepValue={1} />
      </div>
    </div>
  );
}

export default App;
