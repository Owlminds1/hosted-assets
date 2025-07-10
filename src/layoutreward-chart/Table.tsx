"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { CompletionMatrix, Task } from "./types";


interface TableProps {
  slots: (Task | null)[];
  removeTaskFromSlot: (index: number) => void;
  DAYS: string[];
  completionMatrix: CompletionMatrix;
  toggleTaskCompletion: (slotIndex: number, dayIndex: number) => void;
}

const Table: React.FC<TableProps> = ({slots, removeTaskFromSlot, DAYS, completionMatrix, toggleTaskCompletion}) => {




  return (
    < >


      {/* {
        [...Array(7)].map((_, index) => (
          <div key={index} className='flex items-center justify-between gap-8 p-2'>
            <div >
              <h1 className=' text-md rounded-lg  font-bold text-center border w-[200px] h-[35px] border-black  bg-[#FCC737] ' ></h1>
            </div>

            <div className=" flex gap-5" >
              <Checkbox className="w-[35px] h-[30px] "  />
              <Checkbox className="w-[35px] h-[30px] " />
              <Checkbox className="w-[35px] h-[30px] " />
              <Checkbox className="w-[35px] h-[30px] " />
              <Checkbox className="w-[35px] h-[30px] " />
              <Checkbox className="w-[35px] h-[30px] " />
              <Checkbox className="w-[35px] h-[30px] " />
            </div>


          </div>
        ))
      } */}

{
  slots.map((task, slotIndex) => (
    <div key={slotIndex} className='flex items-center justify-between gap-3  md:gap-8 2xl:gap-12  p-2 '>
      <div>
        <button onClick={() => removeTaskFromSlot(slotIndex)} >
        <h1 className={`text-md flex justify-center items-center p-1 rounded-lg font-bold text-center border w-[140px] md:w-[200px] 2xl:w-[380px] 2xl:min-h-[40px]  min-h-[35px] border-black ${task ? (task.color ? `bg-[${task.color}]` : 'bg-[#FCC737]') : 'bg-[#FCC737]'}`}>{task ? task.name : ""}</h1>
        </button>
      </div>
      <div className="flex gap-2 md:gap-5">
        {DAYS.map((day, dayIndex) => (
          <Checkbox
            key={dayIndex}
            checked={completionMatrix[slotIndex][dayIndex]}
            onCheckedChange={() => task && toggleTaskCompletion(slotIndex, dayIndex)}
            className="w-[35px] h-[30px]"
            disabled={!task}
          />
        ))}
    </div>
    </div>
  ))
}
    </>


  )
}

export default Table
