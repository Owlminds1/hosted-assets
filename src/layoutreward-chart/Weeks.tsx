import React from "react"; // Adjust the path as necessary
import { Input } from "@/components/ui/input";
const Weeks = () => {
  const WeeksDay = [
    { day: "S" },
    { day: "M" },
    { day: "T" },
    { day: "W" },
    { day: "TH" },
    { day: "F" },
    { day: "S" },
  ];
  return (
    <div className='flex items-center justify-between gap-3 md:gap-8 p-2'>
    <div >
                <Input
                  type="date"
                  id="Date"
                  placeholder="2-10-2024"
                  className=" bg-transparent w-[140px] md:w-[200px] 2xl:w-[380px] placeholder:text-black md:placeholder:text-lg placeholder:text-sm  border-white rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-300 relative z-10"
                />
    </div>
    <div className="flex items-center justify-end gap-2 md:gap-5 text-center text-white pt-2">
      {WeeksDay.map((day, index) => (
        <div
          key={index}
          className="w-[25px] h-[25px] md:w-[35px] md:h-[30px] 2xl:w-[40px] 2xl:h-[40px] flex justify-center items-center rounded-lg  bg-red-800   border border-black "
        >
          {day.day}
        </div>
      ))}
    </div>
  </div>
  );
};

export default Weeks;
