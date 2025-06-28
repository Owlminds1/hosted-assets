import React from "react";
import { BiSolidLike } from "react-icons/bi";
type CompleteBtnProps = {
  handleComplete: (index: number) => void;
  index: number;
  disabled: boolean;
};
const CompleteBtn = ({ handleComplete, index, disabled }: CompleteBtnProps) => {
  return (
    <button
      title="click to complete task"
      onClick={() => handleComplete(index)}
      className={`  text-2xl ${disabled ? "text-green-600":"text-gray-700"}   py-1 px-3 rounded-lg`}  
      disabled ={disabled ? true:false}
    >
      <BiSolidLike />
    </button>
  );
};

export default CompleteBtn;
