import React, { useState, useEffect } from "react";
import { GrEdit } from "react-icons/gr";

interface FooterBarProps {
  goal: number;
  setGoal: React.Dispatch<React.SetStateAction<number>>;
}

const FooterBar: React.FC<FooterBarProps> = ({ goal, setGoal }) => {
  const [goalInput, setGoalInput] = useState(goal.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGoalInput(value); // Update input box value

    const numberValue = parseInt(value);
    if (!isNaN(numberValue)) {
      setGoal(numberValue); // Only update goal if valid number
    }
  };

  // Keep goalInput in sync with actual goal if goal changes externally
  useEffect(() => {
    setGoalInput(goal.toString());
  }, [goal]);

  return (
    <div className="flex justify-center items-center text-center gap-2 pb-3 px-3 w-full">
      {/* Reward input (optional UI) */}
      <div className="bg-red-800 text-white rounded-lg relative p-2 w-full">
        <label htmlFor="prize" className="text-left text-md text-bold">
          Reward:
        </label>
        <input
          id="prize"
          className="min-w-[200px] pr-8 text-sm text-bold placeholder:text-gray-300 bg-transparent border border-gray-500 rounded-lg py-2 pl-2 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-300 relative z-10"
        />
        <div className="text-sm p-3 absolute top-2 right-5 text-white">
          <GrEdit />
        </div>
      </div>

      {/* Goal input */}
      <div className="flex justify-center gap-3 items-center w-full bg-red-800 text-white rounded-lg relative p-2">
        <label htmlFor="Reward" className="text-md text-bold">
          Goal:
        </label>
        <input
          id="Reward"
          value={goalInput}
          onChange={handleChange}
          className="max-w-[80px] pr-5 text-md text-bold placeholder:text-gray-300 bg-transparent border border-gray-500 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-300 relative z-10"
        />
        <div className="text-sm p-3 absolute top-1.5 right-[100px] text-white">
          <GrEdit />
        </div>
        <label htmlFor="Reward" className="text-sm text-bold">
          Points
        </label>
      </div>
    </div>
  );
};

export default FooterBar;
