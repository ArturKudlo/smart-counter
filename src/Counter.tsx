import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Result } from "./components/Result/Result";

export type TypePropsType = {
  maxCount: number;
  resetValue: number;
  stepValue: number;
};

export const Counter = ({ maxCount, resetValue, stepValue }: TypePropsType) => {
  const [count, setCount] = useState(resetValue);

  useEffect(() => {
    getTest();
  }, []);

  useEffect(() => {
    setItem();
  }, [count]);

  const setItem = () => {
    localStorage.setItem("counter value", JSON.stringify(count));
  };

  const getTest = () => {
    let newCount = localStorage.getItem("counter value");
    if (newCount) {
      let countAsNumber = JSON.parse(newCount);
      setCount(countAsNumber);
    }
  };

  const handleIncrement = () => {
    if (count !== maxCount) {
      setCount(count + stepValue);
    }
    // return hello;
  };
  const doReset = () => {
    setCount(resetValue);
  };
  // do set for our count

  const islimitedCount = count === maxCount;

  const isResetValue = count === resetValue;

  return (
    <div className="main__content">
      <Result count={count} limited={islimitedCount} />
      <div className="main__content--buttons">
        <Button
          text="inc"
          inActive={islimitedCount}
          handleClick={handleIncrement}
        />
        <Button text="reset" inActive={isResetValue} handleClick={doReset} />
      </div>
    </div>

  );
};
