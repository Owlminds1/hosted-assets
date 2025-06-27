"use client"
import Image from "next/image";
import React from "react";
import { IoIosRefresh } from "react-icons/io";
import TaskSection from "./taskSection";


const LayoutMatchingTables = () => {
      const handleRefrash =()=>{
    window.location.reload()
  }
  return (
  <div className="bg-white text-black  relative p-5 rounded-lg shadow-xl">
      
     <div className=" flex flex-col justify-center items-center gap-2 pb-2">
     <h1 className="text-center font-bold text-4xl text-red-400 my-3">
        Growth Ladder
      </h1>
     <button title="refresh" onClick={handleRefrash} className="text-center bg-orange-400 px-5 py-2 rounded-lg text-white">
       <IoIosRefresh/>
      </button>
     </div>

      <div className="absolute  bottom-0 left-[200px] flex justify-center item-center ">
        <Image src="/maching-table/images/ladder.png" width={220} height={300} alt="ladder" />
      </div>

      <TaskSection />
    </div>
  )
}

export default LayoutMatchingTables;
