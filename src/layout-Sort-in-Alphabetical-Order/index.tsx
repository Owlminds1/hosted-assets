"use client";
import data from "@/layout-Sort-in-Alphabetical-Order/data.json";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { LuArrowBigDownDash, LuArrowBigUpDash } from "react-icons/lu";
export default function LayoutSortInAlphabeticalOrder() {
  const [items, setItems] = useState(data);
  const [indexItem, setIndexItem] = useState(Number);
  const [message, setMessage] = useState(String);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClick = (index: number) => {
    setIndexItem(index);
  };

  const moveUp = () => {
    if (indexItem === null || indexItem === 0) return;
    const newItem = [...items];
    // swap indexs
    // apple index 0    =====   banana index 1 =====
    [newItem[indexItem - 1], newItem[indexItem]] = [
      newItem[indexItem],
      newItem[indexItem - 1],
    ];
    setItems(newItem);
    setIndexItem(indexItem - 1);
  };

  const moveDown = () => {
    if (indexItem === null || indexItem === items.length - 1) return;
    const newItem = [...items];
    [newItem[indexItem + 1], newItem[indexItem]] = [
      newItem[indexItem],
      newItem[indexItem + 1],
    ];
    setItems(newItem);
    setIndexItem(indexItem + 1);
  };

  const checkResult = () => {
    const isStored = items.every(
      (item, i, arr) => i == 0 || arr[i - 1].Name <= item.Name
    );
    if (isStored) {
      setMessage("Great job! You got the right order!");
    } else {
      setMessage("Oops! The order is wrong. Try again!");
    }
    setIsCorrect(isStored);
  };

  useEffect(() => {
    function shuffleTasks(arry: typeof data) {
      return arry.sort(() => Math.random() - 0.5);
    }
    const shuffleData = shuffleTasks([...data]);
    setItems(shuffleData);
  }, []);

  return (
    <div className=" py-8 min-h-screen bg-[#F8FAFC] flex items-center justify-center gap-3 pt-5 flex-col">
      <h1 className="text-4xl text-center text-black mb-8">
        Sort in Alphabetical Order
      </h1>

      <div className="flex justify-center item-center flex-wrap px-8 gap-4">
        <button
          className="bg-yellow-600 text-lg rounded py-2 px-8 flex items-center gap-3"
          onClick={moveUp}
        >
          <LuArrowBigUpDash className="text-2xl" />
          <span>Move up</span>
        </button>
        <button
          onClick={moveDown}
          className="bg-yellow-600 text-lg rounded py-2 px-8 flex gap-3 items-center"
        >
          <LuArrowBigDownDash className="text-2xl" />
          <span>Move down</span>
        </button>
        <button
          onClick={checkResult}
          className="bg-green-600 text-lg rounded py-2 px-5"
        >
          Check result
        </button>
      </div>

      <p className="text-xl">{message}</p>

      {items.map((item, index) => (
        <h1
          key={item.id}
          onClick={() => handleClick(index)}
          className={`${indexItem === index ? " border-2 border-black" : ""} ${
            isCorrect ? "bg-green-600" : "bg-fuchsia-600"
          }  cursor-pointer w-[400px] text-white text-center rounded py-1 shadow-sm shadow-black`}
        >
          {item.Name}
        </h1>
      ))}
      {isCorrect ? <Confetti className="w-full" /> : ""}
    </div>
  );
}
