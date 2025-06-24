"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoMdRefresh } from "react-icons/io";

import Image from "next/image";

import Category from "./Category";
import { useTodo } from "../context/TodoContext";
import { Task } from "./types";

import MainLayout from "./mainLayout";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

function RewardChartPage() {
  const router = useRouter();

  const {
    goal,
    setGoal,
    checkDay,
    setCheckDay,
    masterTasks,
    setMasterTasks,
    slots,
    setSlots,
    completionMatrix,
    setCompletionMatrix,
    setHasRewardShown,
    hasRewardShown,
  } = useTodo();

  // ✅ Task type added
  const assignTaskToSlot = (task: Task) => {
    setCheckDay((prev) => prev + 7);
    setHasRewardShown(false);
    const firstEmptySlotIndex = slots.findIndex((slot) => slot === null);
    if (firstEmptySlotIndex !== -1) {
      const newSlots = [...slots];
      newSlots[firstEmptySlotIndex] = task;
      setSlots(newSlots);
      setMasterTasks(masterTasks.filter((t) => t.id !== task.id));
    }
  };

  const removeTaskFromSlot = (index: number) => {
    setCheckDay((prev) => prev - 7);
    const task = slots[index];
    if (task) {
      const newSlots = [...slots];
      newSlots[index] = null;
      setSlots(newSlots);
      setMasterTasks([...masterTasks, task]);
      const newMatrix = [...completionMatrix];
      newMatrix[index] = Array(7).fill(false);
      setCompletionMatrix(newMatrix);
    }
  };

  const toggleTaskCompletion = (slotIndex: number, dayIndex: number) => {
    const newMatrix = [...completionMatrix];
    newMatrix[slotIndex][dayIndex] = !newMatrix[slotIndex][dayIndex];
    setCompletionMatrix(newMatrix);
  };

  const calculateDayTotal = (dayIndex: number): number =>
    slots.reduce((total, task, slotIndex) => {
      return task && completionMatrix[slotIndex][dayIndex]
        ? total + task.points
        : total;
    }, 0);

  const calculateGrandTotal = (): number =>
    DAYS.reduce((total, _, index) => total + calculateDayTotal(index), 0);

  useEffect(() => {
    const grandTotal = calculateGrandTotal();
    if (grandTotal === checkDay && checkDay > 0 && !hasRewardShown) {
      setHasRewardShown(true);
      setTimeout(() => {
        router.push("/reward-completed");
      }, 5000);
    }
  }, [completionMatrix, checkDay, hasRewardShown]);

  return (
    <div className=' min-h-screen w-full flex flex-col justify-center items-center  bg-[url("/images/background_image.jpg")] bg-no-repeat bg-cover bg-bottom  relative px-2 py-5'>
      <div className=" z-10" id="mainDiv">
        <h1 className="font-Abril text-4xl  rounded-md text-blue-900 ">
          Todo List
        </h1>
      </div>
      {/* ========================= */}
      <div className="flex justify-center items-center max-w-[940px]   w-full md:w-[50%] py-3 gap-4">
        <div className=" text-white  px-2 rounded-lg">
          {/* name input =================== */}
          <div className="flex w-full  items-center relative gap-1 text-black ">
            <label htmlFor="Name" className="text-blue-800 text-3xl mr-2">
              Name
            </label>
            <div className="w-[100%] py-2">
              <div className="relative w-full">
                <input
                  placeholder="Username"
                  type="text"
                  className="w-full bg-transparent text-3xl font-bold aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 dark:text-white placeholder:text-stone-600/60 ring-transparent transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none py-2 px-2.5 duration-100 hover:ring-none focus:ring-none rounded-none border-0 border-b border-gray-400 pr-0.5 shadow-none ring-0 hover:border-gray-900 focus:border-gray-900 dark:border-gray-600 dark:hover:border-gray-50 dark:focus:border-gray-50 peer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= */}
      <div className="grid grid-cols-12 z-10 gap-1 h-full">
        <div className="col-span-12 flex justify-end px-1 items-center">
          <button
            onClick={() => window.location.reload()}
            title="reload"
            className="bg-transparent border border-white p-2 rounded-lg"
          >
            <IoMdRefresh className="text-xl" />
          </button>
        </div>
        <div className=" h-full col-span-12 md:col-span-3 bg-white  rounded-md overflow-hidden p-2">
          <p className="text-md p-2">
            Ron is selected to participate in a sports tournament. Create a
            checklist of activities that he needs to do to improve fitness as
            well as skills in the sport. Make sure you budget time for self care
            activities like sleeping, eating.
          </p>
          <Image
            src="/images/boy_image.jpg"
            width={200}
            height={200}
            alt="girl image"
          />
        </div>
        <div className=" h-full col-span-12 md:col-span-9 gap-3   w-full grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-4  w-full h-full">
            <Category
              taskList={masterTasks}
              handleTaskClick={assignTaskToSlot}
            />
          </div>
          <div className="col-span-12 md:col-span-8  w-full h-full">
            <MainLayout
              slots={slots}
              removeTaskFromSlot={removeTaskFromSlot}
              DAYS={DAYS}
              completionMatrix={completionMatrix}
              toggleTaskCompletion={toggleTaskCompletion}
              calculateDayTotal={calculateDayTotal}
              calculateGrandTotal={calculateGrandTotal}
              goal={goal}
              setGoal={setGoal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardChartPage;
