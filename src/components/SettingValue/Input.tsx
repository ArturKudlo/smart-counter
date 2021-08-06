import React from "react";

type PropsTypeSetValue = {
  text: string;
};

export const Input = ({ text }: PropsTypeSetValue) => {
  return (
    <div className={"set__value"}>
      <div>{text}</div>
      <input type={"number"} />
    </div>
  );
};
