import React from "react";
import { Button } from "./components/Button/Button";
import { SettingValue } from "./components/SettingValue/SettingValue";

export const CounterSettings = () => {
  let SetValue = () => {
    console.log(2);
  };

  const isResetValue = false;
  return (
    <div className="main__content">
      <div className="main__content--counter">
        <SettingValue />
      </div>
      <div className={"main__content--buttons"}>
        <Button text="set" inActive={isResetValue} handleClick={SetValue} />
      </div>
    </div>
  );
};
