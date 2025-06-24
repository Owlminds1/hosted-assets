"use client";

import React from "react";
import { CompletionMatrix, Task } from "./types";
import Weeks from "./Weeks";
import Table from "./Table";


interface MainLayoutProps {
  slots: (Task | null)[];
  removeTaskFromSlot: (index: number) => void;
  DAYS: string[];
  completionMatrix: CompletionMatrix;
  toggleTaskCompletion: (slotIndex: number, dayIndex: number) => void;
  calculateDayTotal: (dayIndex: number) => number;
  calculateGrandTotal: () => number;
  goal: string;
  setGoal: (goal: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  slots,
  removeTaskFromSlot,
  DAYS,
  completionMatrix,
  toggleTaskCompletion,
  
}) => {
  return (
    <>
      <div
        className="  rounded-lg border border-#FACC15-500 h-full w-full "
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="flex items-center justify-center h-full w-full  gap-6">
            <div>
              <Weeks />
              <div>
                <Table
                  slots={slots}
                  removeTaskFromSlot={removeTaskFromSlot}
                  DAYS={DAYS}
                  completionMatrix={completionMatrix}
                  toggleTaskCompletion={toggleTaskCompletion}
                />
                {/* <Total
                  DAYS={DAYS}
                  calculateDayTotal={calculateDayTotal}
                  calculateGrandTotal={calculateGrandTotal}
                /> */}
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default MainLayout;
