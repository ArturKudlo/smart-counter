import React from "react";

type PropsTypeText = {
  text?: string;
  handleClick: () => void;
  inActive: boolean;
};

export const Button = ({ text, handleClick, inActive }: PropsTypeText) => {
  // destructuring
  return (
    <button className="btn btn__inc" disabled={inActive} onClick={handleClick}>
      {text}
    </button>
  );
};
