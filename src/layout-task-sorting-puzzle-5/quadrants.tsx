"use client";
import React, { useState } from "react";
import Quadrantsdata from "@/layout-task-sorting-puzzle-5/quadrantsdata.json";
import taskData from "@/layout-task-sorting-puzzle-5/taskData.json";

interface Quadrant {
  text: string;
  border: string;
  correct: string;
  task: string[];
}

const Quadrants = ({
  setIsCorrect,
  setAvailbleTask,
  availbleTask
}: {
  setAvailbleTask:(tasks :typeof taskData) =>void;
  availbleTask: typeof taskData;
    setIsCorrect: (value: boolean) => void;
}) => {
  const [quadrantItem, setQuadrantItem] = useState<Quadrant[]>(Quadrantsdata);

  

  const handleDropTask = (
    e: React.DragEvent,
    index: number,
    correct: string
  ) => {
    e.preventDefault();
    const value = JSON.parse(e.dataTransfer.getData("value"));
    const DropTask = JSON.parse(e.dataTransfer.getData("task"));

    if (value === correct) {
      const updatedData = quadrantItem.map((item, idx) =>
        idx === index ? { ...item, task: [...item.task, DropTask] } : item
      );
      const popSound = new Audio("/task-sorting-puzzle/sound/pop.mp3");
      popSound.play();
      setQuadrantItem(updatedData);
    const updateTaskList = availbleTask.filter((task)=>task.tasks !== DropTask)
    setAvailbleTask(updateTaskList)

      const isCorrect = updatedData.every(
        (item) =>
          item.task.length > 0 && // Ensure quadrant has at least one task
          item.task.every(
            (task) =>
              taskData.find((t) => t.tasks === task)?.value === item.correct
          )
      );

      setIsCorrect(isCorrect);
    } else {
      console.log("Dropped in the wrong quadrant!");
    }
  };

  return (
    <div className="grid grid-cols-12 place-items-center gap-3">
      {quadrantItem.map((item, index) => (
        <div
          key={index}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDropTask(e, index, item.correct)}
          className={`col-span-6 w-[400px] min-h-[200px] h-auto    rounded-lg flex items-center justify-center flex-col text-lg`}
          style={{ backgroundColor: `${item.border}` }}
        >
          <h1 className="text-lg text-white">{item.text}</h1>
          {item.task.map((task, idx) => (
            <h1
              key={idx}
              className="text-sm font-bold border bg-red-400  p-2 rounded-xl"
            >
              {task}
            </h1>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Quadrants;
