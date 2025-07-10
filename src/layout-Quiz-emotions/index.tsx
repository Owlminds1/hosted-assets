"use client";
import React, { useState } from "react";
import FirstScreen from "./firstScreen";
import StartQuiz from "./startQuiz";
import Result from "./result";
import ResultContextProvider from "@/layout-Quiz-emotions/context/resultContext"

const QuizEmotions = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("playScreen");
  return (
    <ResultContextProvider >
    <div className="rounded-xl  overflow-hidden shadow-xl flex item-center  justify-center w-[640px]  ">
      {isFirstScreen == "playScreen" && (
        <FirstScreen setIsFirstScreen={setIsFirstScreen} />
      )}
      {isFirstScreen === "startQuiz" && (
        <StartQuiz setIsFirstScreen={setIsFirstScreen} />
      )}
      {isFirstScreen === "Result" && (
        <Result setIsFirstScreen={setIsFirstScreen} />
      )}
    </div>
    </ResultContextProvider>
  );
};

export default QuizEmotions;
