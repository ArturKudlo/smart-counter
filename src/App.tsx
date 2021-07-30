import React from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {
  return (
    <div className="App">
        <Counter
            maxCount={5}
            resetValue={0}
            stepValue={2}
        />
    </div>
  );
}

export default App;
