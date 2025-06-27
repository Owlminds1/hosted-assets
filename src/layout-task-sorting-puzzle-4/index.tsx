"use client";
import Quadrants from "@/layout-task-sorting-puzzle-4/quadrants";
import Tasks from "@/layout-task-sorting-puzzle-4/task";
import React, { useState } from "react";
import Confetti from "react-confetti";
import taskData from "@/layout-task-sorting-puzzle-4/taskData.json";
import { IoIosRefresh } from "react-icons/io";


const LayoutTaskSortingPuzzle4 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [confetti, setCofetti] = useState(false);
  const [massege, setMassege] = useState("");
  const [tasksList, setTasksList] = useState(taskData);
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
  //  task remove from list when is drop in box 
  const removeTask = (taskName: string) => {
    setTasksList((prev) => prev.filter((task) => task.tasks !== taskName));
  };


  const  handleRefresh = ()=>{
    window.location.reload()
  }
  
  return (
    <div className=" min-h-screen w-full bg-[#F8FCFA] flex flex-col justify-center items-center py-3">
      <div className="my-5  w-full flex flex-col gap-4 justify-center items-center text-white">
        <h1 className="text-3xl text-black">Task Sorting Puzzle</h1>
       <div className="flex gap-2">
       <button
          className="bg-green-500 rounded px-8 py-2"
          onClick={handleCheck}
        >
          Check Result
        </button>
        <button
          className="bg-orange-400 rounded px-8 py-2"
          onClick={handleRefresh}
          title="refresh the page "
        >
          <IoIosRefresh/>
        </button>
       </div>
        <p className={`${isCorrect ? "text-green-400" : "text-red-400"}`}>
          {massege}
        </p>
      </div>
      <div className=" grid grid-cols-12   w-full px-8">
        <div className="col-span-3 w-full">
          <Tasks tasksList={tasksList} />
        </div>
        <div className="col-span-9 h-full p-2">
          <Quadrants setIsCorrect={setIsCorrect} removeTask={removeTask} />
        </div>
      </div>
      {confetti ? <Confetti className="w-full h-screen" /> : ""}
    </div>
  );
};

export default LayoutTaskSortingPuzzle4;
