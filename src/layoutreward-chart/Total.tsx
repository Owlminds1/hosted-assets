import React from "react";

interface TotalProps {
  DAYS: string[];
  calculateDayTotal: (dayIndex: number) => number;
  calculateGrandTotal: () => number;
}

const Total: React.FC<TotalProps> = ({
  DAYS,
  calculateDayTotal,
  calculateGrandTotal,
}) => {
  return (
    <div>
      {/* Day Total */}
      <div className="flex justify-between text-center text-white items-center">
        <div className="p-2">
          <h1 className="text-md rounded-lg font-bold text-center w-[200px] bg-red-800 p-2">
            Day Total
          </h1>
        </div>

        <div className="px-2 flex items-center justify-end gap-5 text-center text-white">
          {DAYS.map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[35px] h-[35px] rounded-lg bg-red-800 px-2"
            >
              {calculateDayTotal(index)}
            </div>
          ))}
        </div>
      </div>

      {/* Grand Total */}
      <div className="Grand_Total flex justify-between items-center w-full px-2">
        <div className="w-[72%]">
          <h1 className="text-white text-md rounded-lg font-bold text-center bg-red-800 p-2">
            Grand Total
          </h1>
        </div>

        <div className="bg-red-800 text-white rounded-lg p-2 w-1/4">
          <h1 className="text-left text-md text-bold">
            Total:{" "}
            <span className="text-sm text-bold">
              {calculateGrandTotal()}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Total;
