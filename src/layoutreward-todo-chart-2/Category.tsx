"use client";
import { ScrollArea } from "@/components/ui/scroll-area";

import React from "react";
import { Task } from "./types";

interface CategoryProps {
  taskList: Task[];
  handleTaskClick: (task: Task) => void;
}

const Category: React.FC<CategoryProps> = ({ taskList, handleTaskClick }) => {
  // const CategoryItem = [
  //   {
  //     cName: "Put away toys",
  //     bgcolor: "#A1EEBD", //blue
  //   },
  //   {
  //     cName: "Collect dirty clothes",
  //     bgcolor: "#CB9DF0", // pink
  //   },
  //   {
  //     cName: "Make bed",
  //     bgcolor: "#A1EEBD", //blue
  //   },
  //   {
  //     cName: "Wipe cabinets",
  //     bgcolor: "#CB9DF0", // pink
  //   },
  //   {
  //     cName: "Set or clean dinner table",
  //     bgcolor: "#A1EEBD", //blue
  //   },
  //   {
  //     cName: "Match socks",
  //     bgcolor: "#CB9DF0", // pink
  //   },
  //   {
  //     cName: "Fold laundry",
  //     bgcolor: "#CB9DF0", // pink
  //   },
  //   {
  //     cName: "Water plants",
  //     bgcolor: "#A1EEBD", //blue
  //   },
  //   {
  //     cName: "Feed the pet",
  //     bgcolor: "#A1EEBD", //blue
  //   },
  // ];

  return (
    <div className=" rounded-md border p-4 backdrop-blur-2xl w-full ">
      <h1
        className={`text-md rounded-lg mb-2  font-bold text-center border  text-black border-black backdrop-blur-md p-2 `}
      >
        Master Task List
      </h1>

      <ScrollArea className=" h-[400px] rounded-md border p-2 backdrop-blur-2xl ">
        <div className="flex flex-col  items-center gap-2 p-2 ">
          {taskList.map((task, index) => (
            <button
              style={{ backgroundColor: `${task.color}` }}
              key={index}
              onClick={() => handleTaskClick(task)} 
              className={`text-md rounded-lg w-[250px]  font-bold text-center border border-black backdrop-blur-md p-1 `}
            >
              {task.name}
            </button>
          ))}
        </div>
      </ScrollArea>
 <div className="col-span-12 flex justify-center items-center mt-2">
         <p className="text-black text-sm w-full text-center rounded-lg backdrop-blur-lg py-0.5 bg-[#ffffff85] px-8">*Please add minimum five activities</p>
        </div>
      {/* points Baar ============= */}
      {/* <div className="flex justify-center items-center gap-2 py-2">
        <h2 className="text-md rounded-lg mb-2  font-bold text-center border text-black bg-[#A1EEBD] p-2 ">
          Earn 20 points
        </h2>
        <h2 className="text-md rounded-lg mb-2  font-bold text-center border text-black bg-[#CB9DF0] p-2 ">
          Earn 10 points
        </h2>
      </div> */}
    </div>
  );
};

export default Category;
