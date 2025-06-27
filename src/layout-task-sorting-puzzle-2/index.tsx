"use client";
import taskData from "@/layout-task-sorting-puzzle-2/taskData.json";
import React, { useState } from "react";
import Confetti from "react-confetti";
import Tasks from "./task";
import Quadrants from "./quadrants";

const LayoutTaskSortingPuzzle2 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [confetti, setCofetti] = useState(false);
  const [massege, setMassege] = useState("");
  const [remainingTasks, setRemainingTasks] = useState(taskData);

  const handleCheck = () => {
    //  setIsCorrect(isCorrect)
    if (isCorrect) {
      setMassege("Great job! All tasks are sorted correctly!");
      setCofetti(true);
    } else {
      setMassege(
        "Oops! Some tasks are in the wrong box. Try again by dragging the tasks to the correct box."
      );
    }
  };
  return (
    <div className=" min-h-screen w-full bg-[#F8FCFA] flex flex-col justify-center items-center py-3">
      <div className="my-5  w-full flex flex-col gap-4 justify-center items-center text-white">
        <h1 className="text-3xl text-black">Task Sorting Puzzle</h1>
        <button
          className="bg-green-500 rounded px-8 py-2"
          onClick={handleCheck}
        >
          Check Result
        </button>
        <p className={`${isCorrect ? "text-green-400" : "text-red-400"}`}>
          {massege}
        </p>
      </div>
      <div className=" grid grid-cols-12 place-items-center  w-full px-8">
        <div className="col-span-3 w-full">
          <Tasks tasks={remainingTasks} />
        </div>
        <div className="col-span-9 ">
          <Quadrants
            setIsCorrect={setIsCorrect}
            remainingTasks={remainingTasks}
            setRemainingTasks={setRemainingTasks}
          />
        </div>
      </div>
      {confetti ? <Confetti className="w-full h-screen" /> : ""}
    </div>
  );
};

export default LayoutTaskSortingPuzzle2;
