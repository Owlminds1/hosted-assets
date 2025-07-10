"use client";
import React, { useState } from "react";
import data from "@/layout-mood-meter-2/data.json";
import options from "@//layout-mood-meter-2/options.json";

import Confetti from "react-confetti";
import Diloge from "./diloge";
import CongresDiloge from "./congraseDilog";


const LayoutMoodMeter2 = () => {
  const [start, setStart] = useState(false);
  const [curentIndex, setCurentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCongress, setIsCongress] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleCheck = (option: string) => {
   if(!start)return;
    if (option === data[curentIndex].type) {
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 3000);
      if (curentIndex === data.length - 1) {
        setIsCongress(true); // Show "Game Completed" Dialog
      } else {
        setCurentIndex(curentIndex + 1);
      }

    } else {
      setIsDialogOpen(true);
     
    }
    
  };

  return (
    <div className="bg-gradient-to-r from-red-500  via-yellow-500 to-green-500 via-blue-500  p-5 min-h-screen flex justify-center items-center">
      <div className="bg-white p-3 relative">
        {confetti ? (
          <Confetti
            className="absolute w-full h-full"
            width={500}
            height={500}
          />
        ) : null}
        <div className="text-center text-black">
          <h1 className="text-[30px] font-bold py-2">Mood Meter Game</h1>
          <button
            onClick={() => setStart(true)}
            className={`bg-purple-950 text-white px-3 py-1 rounded-lg ${
              start ? "hidden" : ""
            }`}
          >
            Start Game
          </button>
          {start ? (
            <p className="text-2xl font-bold py-2">{data[curentIndex].name}</p>
          ) : (
            <p className=" py-2">Click the box that matches the emotion</p>
          )}
        </div>

        <div className="flex flex-wrap justify-center items-center w-[600px] gap-5 p-3">
          {options.map((item, index) => (
            <div
              style={{ backgroundColor: `${item.bgColor}` }}
              onClick={() => handleCheck(item.option)}
              key={index}
              className="text-black font-bold text-center shadow-lg text-xl rounded-lg cursor-pointer w-[250px] h-[200px] border flex justify-center items-center p-2 hover:scale-[1.1]"
            >
              <h2>{item.text}</h2>
            </div>
          ))}
        </div>
      </div>
      <Diloge isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <CongresDiloge setCurentIndex={setCurentIndex} setStart={setStart} isCongress={isCongress} setIsCongress={setIsCongress} />
    </div>
  );
};

export default LayoutMoodMeter2;
