"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import emotinData from "@/layout-Quiz-emotions/emotionData.json";
import Confetti from "react-confetti";
import { ResultContext } from "@/layout-Quiz-emotions/context/resultContext";

const EmotionSideBaar = ({ answer }: { answer: string }) => {
  const [wrong, setWrong] = useState<number | null>(null);
  const [right, setRight] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const wrongBg = new Audio("/quiz-emotions/sound/wrong.mp3");
  const rightbg = new Audio("/quiz-emotions/sound/claping.mp3");

  const context = useContext(ResultContext);
  if (!context) {
    throw new Error("ResultContext must be used inside a ResultContextProvider");
  }

  const {  setResultArray } = context;

  const handleCheckAnswer = (
    value: string,
    answerIndex: number,
    qustionId: number
  ) => {
    // Add result in a React-friendly way
    setResultArray((prev) => [
      ...prev,
      {
        qustionId,
        value,
        isCorrect: value === answer,
      },
    ]);

    if (value === answer) {
      rightbg.play();
      setRight(answerIndex);
      setShowConfetti(true);

      setTimeout(() => {
        rightbg.pause();
        setShowConfetti(false);
      }, 4000);
    } else {
      setWrong(answerIndex);
      wrongBg.play();
    }

    // remove bg after 4 sec
    setTimeout(() => {
      setWrong(null);
      setRight(null);
    }, 4000);
  };

  return (
    <>
      {emotinData.map((item, index) => (
        <button
          onClick={() =>
            handleCheckAnswer(item.value, index, item.qustionId)
          }
          key={index}
          className={`w-[180px] curser-pointer py-2 ${
            wrong === index
              ? "bg-red-600"
              : right === index
              ? "bg-green-600"
              : "bg-white"
          } px-5 rounded-[5px] flex justify-center items-center gap-2 hover:shadow-lg hover:border hover:border-black hover:bg-yellow-400`}
        >
          <Image src={item.emojis} width={70} height={70} alt="emojis" />
          <div>
            <h1 className="text-2xl ">{item.emotion}</h1>
          </div>
        </button>
      ))}
      {showConfetti && <Confetti />}
    </>
  );
};

export default EmotionSideBaar;
