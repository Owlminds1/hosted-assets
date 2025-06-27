"use client";
import React, { useState } from "react";
import taskList from "@/layout-matching_tables/taskList.json";
import PickTheAnswer from "./pickTheAnswer";
import ImageSection from "./imageSection";
import dropList from "@/layout-matching_tables/dropList.json";

const TaskSection = () => {
  const [tasksList, setTasksList] = useState(dropList);
  const [item, setItem] = useState(Array(7).fill(null));

  const handleDrop = (e: React.DragEvent, index: number) => {
    const droppedItem = JSON.parse(e.dataTransfer.getData("task"));
    if (!item[index] && droppedItem.matchinId - 1 == index) {
      const updatedSlots = [...item];
      updatedSlots[index] = droppedItem;
      setItem(updatedSlots);
      removeTask(droppedItem.matchinId);
    }
  };

  const removeTask = (taskName: number) => {
    setTasksList((prev) => prev.filter((task) => task.matchinId !== taskName));
  };

  return (
    <>
      <PickTheAnswer tasksList={tasksList} />
      <div className="flex justify-around items-center px-2">
        <ImageSection />
      </div>

      <div className="grid grid-cols-12 justify-center items-center gap-3 p-5  ">
        <div className=" min-h-[330px] min-w-[300px] col-span-6">
          {taskList.map((item, index) => (
            <h1
              key={index}
              className="p-2 min-h-[66px]  bg-red-400 rounded-lg text-center text-lg my-1"
            >
              {item.task}
            </h1>
          ))}
        </div>
        <div className=" min-h-[330px]  min-w-[300px] col-span-6 ">
          {item.map((i, index) => (
            <h1
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index)}
              key={index}
              className="p-2 min-h-[65px] w-[300px] bg-red-400 rounded-lg text-center text-lg my-1"
            >
              {index === 0
                ? "Mistakes are how I learn and get better "
                : i?.dropTask}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskSection;
