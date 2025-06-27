"use client";

import React from "react";

type myProps = {
  tasksList: {
    tasks: string;
    value: string;
  }[];
};
const Tasks = ({ tasksList }: myProps) => {
  const handleDregStart = (e: React.DragEvent<HTMLDivElement>, task: string, value: string) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.setData("value", JSON.stringify(value));
    // console.log("Dragging:", { task, index });
  };
  return (
    <div className="bg-orange-400 py-1 px-3 rounded">
      {tasksList.map((task, index) => (
        <h2
          key={index}
          draggable="true"
          onDragStart={(e) => handleDregStart(e, task.tasks, task.value)}
          className=" cursor-grab active:cursor-grabbing my-2 text-black border border-black border-1 p-2 text-center rounded hover:bg-yellow-300 transition-all ease-in"
        >
          {task.tasks}
        </h2>
      ))}
    </div>
  );
};

export default Tasks;
