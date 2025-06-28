"use client";

import React, { useState } from "react";
import CompleteBtn from "./completeBtn";
import DeleteBtn from "./deleteBtn";
const LayoutTodoTask = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [inputTodo, setInputTodo] = useState<string>("");
  const [level, setLevel] = useState(1);
  const [exp, setexp] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);


 

  const addTodo = () => {
  if (!inputTodo.trim()) return; // Prevent empty input

  const updateTodo = [...todo, inputTodo.trim()];
  setTodo(updateTodo);
  setInputTodo(""); // Clear input

  if (updateTodo.length % 2 === 0) {
    setLevel((prev) => prev + 1);
  }

  const sound = new Audio("/audio/pop.mp3");
  sound.play();
};


  const handleRemove = (index: number) => {
    console.log("index", index);
    const updateTodo = todo.filter((_, dIndex) => dIndex !== index);
    setTodo(updateTodo);

  if (updateTodo.length % 2 !== 0) {
  setLevel((prev) => (prev > 1 ? prev - 1 : 1));
}

    // remove exp when todo remove in list
    setexp((prev) => prev - 5);
  };

 const handleComplete = (index: number) => {
  if (!completedTasks.includes(index)) {
    setCompletedTasks((prev) => [...prev, index]);
    setexp((prev) => prev + 5);
  }
};


  return (
    <div className="min-h-screen p-5 bg-[#F8FAFC] flex justify-center items-center">
      <div className="bg-white shadow-xl p-5 text-black w-[500px] rounded-lg">
        <h1 className="text-center text-xl font-bold">
          Habitica-style To-Do List Game
        </h1>
        <div className=" flex justify-between items-center py-5 ">
          <input
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
            type="text"
            placeholder="Add a new task..."
            className="w-[350px] p-2 outline-none border  rounded-lg focus:border-2 "
          />
          <button
            onClick={addTodo}
            className="py-2 px-5 text-md bg-green-400 rounded-lg text-white "
          >
            Add task
          </button>
        </div>

        <div>
          <h1 className="text-xl py-2 ">Your Tasks</h1>
          <div className="w-full min-h-[200px]  rounded-lg p-5 border 0">
            {todo.length > 0 ? (
              todo.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 p-2 w-full place-items-center 0"
                >
                  <span className=" col-span-6  w-full">{item}</span>
                <div className="col-span-3 text-center  w-full">
                     <CompleteBtn
  handleComplete={handleComplete}
  index={index}
  disabled={completedTasks.includes(index)}
/>

                </div>
                <div className="col-span-3 text-center w-full">

                  <DeleteBtn handleRemove={handleRemove} index={index} />
                </div>
                </div>
              ))
            ) : (
              <h1 className="text-sm text-center text-red-500  ">
                No tasks yet! Add some!
              </h1>
            )}
          </div>
        </div>

        <div className="py-3">
          <div className="w-full min-h-[200px]  rounded-lg p-5 bg-gray-200">
            <h1 className="text-xl py-2 ">Your Stats</h1>
            <h1 className="text-sm  ">Experience: {exp}</h1>
            <h1 className="text-sm   py-4 ">Level: {level}</h1>
            <h1 className="text-sm  ">Next Level: 10</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutTodoTask;
