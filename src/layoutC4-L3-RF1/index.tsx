"use client";
import React, { useState } from "react";
import First from "./first";
import Secound from "./secound";


const LayoutC4L3RF1 = () => {
  const [isFirstSlide, setIsFirstSlide] = useState("first");
  return (
    <div className="min-h-screen w-full bg-[#F8FCFA] flex  justify-center items-center gap-2 p-5">
      {isFirstSlide == "first" && <First isFirstSlide={isFirstSlide} setIsFirstSlide={setIsFirstSlide} />}
      {isFirstSlide == "Secound" && <Secound setIsFirstSlide={setIsFirstSlide} />}
    
    </div>
  );
};

export default LayoutC4L3RF1;
