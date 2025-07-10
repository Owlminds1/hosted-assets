import { ResultContext } from "@/layout-Quiz-emotions/context/resultContext";
import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { GrNext } from "react-icons/gr";

const Result = ({
  setIsFirstScreen,
}: {
  setIsFirstScreen: (val: string) => void;
}) => {
  const [like, setLike] = useState(false);
  const [Star, setStar] = useState(0);

  const context = useContext(ResultContext);

  if (!context) {
    throw new Error("Result must be used within a ResultContextProvider");
  }

  const { resultArray, setResultArray } = context;

  const result = resultArray.filter((answer) => answer.isCorrect).length;

  useEffect(() => {
    setStar(result >= 4 ? 3 : 2);
  }, [result]);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="rounded-xl bg-[url(/images/bg/result.jpeg)] w-full p-8 flex justify-center items-center flex-col bg-cover">
      <div className="w-full flex relative justify-center items-center h-[200px]">
        {[...Array(Star)].map((_, index) => (
          <FaStar
            key={index}
            className="animStar text-yellow-300 text-[55px] mx-1"
          />
        ))}
        <h1 className="absolute bottom-6 text-lg font-bold">score : {result}</h1>
      </div>

      {/* bottom navigation */}
      <div className="flex justify-center items-center p-8 w-full gap-8 h-[100px]">
        <button
          className="text-[30px] bg-blue-400 rounded-full p-2 text-white hover:scale-[1.2] transition-all ease-in-out"
          title="Back to Home"
        >
          <IoMdRefresh onClick={() => setIsFirstScreen("playScreen")} />
        </button>
        <button
          className="text-[30px] bg-green-400 rounded-full p-2 text-white scale-[1.5] border-2 border-white hover:scale-[1.1] transition-all ease-in-out"
          title="Start Quiz"
        >
          <GrNext
            onClick={() => {
              setResultArray([]);
              setIsFirstScreen("startQuiz");
            }}
          />
        </button>
        <button
          className="text-[28px] bg-blue-400 rounded-full p-2 text-white hover:scale-[1.2] transition-all ease-in-out"
          title="Like"
          onClick={handleLike}
        >
          <FaHeart className={like ? "text-red-500" : "text-white"} />
        </button>
      </div>
    </div>
  );
};

export default Result;
