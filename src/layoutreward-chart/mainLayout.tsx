




import React from "react";
import Weeks from "./Weeks";

import Total from "./Total";
import Table from "./Table";
import FooterBar from "./FooterBar";

type Task = {
  id: number;
  name: string;
  points: number;
  color: string;
};

type Props = {
  slots: (Task | null)[];
  removeTaskFromSlot: (index: number) => void;
  DAYS: string[];
  completionMatrix: boolean[][];
  toggleTaskCompletion: (slotIndex: number, dayIndex: number) => void;
  calculateDayTotal: (dayIndex: number) => number;
  calculateGrandTotal: () => number;
  goal: number;
  setGoal: React.Dispatch<React.SetStateAction<number>>;
};

const MainLayout = ({
  slots,
  removeTaskFromSlot,
  DAYS,
  completionMatrix,
  toggleTaskCompletion,
  calculateDayTotal,
  calculateGrandTotal,
  setGoal,
  goal,
}: Props) => {
  return (
    <div
      className="rounded-lg border border-#FACC15-500"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div>
        <div className="flex items-center justify-center gap-6 p-2">
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
              <Total
                DAYS={DAYS}
                calculateDayTotal={calculateDayTotal}
                calculateGrandTotal={calculateGrandTotal}
              />
            </div>
          </div>
        </div>
      </div>
      <FooterBar goal={goal} setGoal={setGoal} />
    </div>
  );
};

export default MainLayout;
