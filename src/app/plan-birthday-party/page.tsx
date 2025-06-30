"use client";

import jsPDF from "jspdf";
import React from "react";
import { Controller, useForm } from "react-hook-form";

// ✅ Define FormData type
interface FormData {
  step_1: string; // Name
  step_2: "Fixed Order" | "Flexible Order" | ""; // Selection
  step_3: string; // List the steps
  step_4: string; // Reason for sequence
}

const Page = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    createPdf(data);
  };

  const createPdf = (data: FormData) => {
    const doc = new jsPDF();
    doc.setFontSize(12);

    const marginLeft = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - marginLeft * 2;
    let currentY = 20;

    doc.text("Birthday Party Plan", pageWidth / 2, currentY, {
      align: "center",
    });
    currentY += 10;

    const addMultilineText = (
      label: string,
      text: string,
      yOffset: number
    ) => {
      doc.text(label, marginLeft, yOffset);
      const lines = doc.splitTextToSize(text, contentWidth);
      lines.forEach((line: string, index: number) => {
        doc.text(line, marginLeft + 5, yOffset + (index + 1) * 6);
      });
      return yOffset + lines.length * 6 + 6;
    };

    currentY = addMultilineText("1. Name", data.step_1 || "N/A", currentY);
    currentY = addMultilineText(
      "2. Would you follow a fixed or flexible order?",
      data.step_2 || "N/A",
      currentY + 4
    );
    currentY = addMultilineText(
      "3. List the steps for planning the birthday party",
      data.step_3 || "N/A",
      currentY + 4
    );
    currentY = addMultilineText(
      "4. Why did you choose this sequence?",
      data.step_4 || "N/A",
      currentY + 4
    );

    doc.save("Plan_Birthday.pdf");
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F4F9]">
      <div className="bg-blue-500 p-5 font-bold">
        <h1 className="text-center text-[40px]">Plan Your Birthday Party</h1>
      </div>

      <div className="flex items-center justify-center mt-5 p-5">
        <div className="bg-white shadow-xl text-black p-5 rounded-lg">
          <h1 className="text-2xl p-3 font-bold text-center">
            Submit Your Birthday Party
          </h1>
          <p>Share your steps and reasoning for organizing a birthday party!</p>

          <form onSubmit={handleSubmit(onSubmit)} className="min-w-[500px]">
            {/* Step 1: Name */}
            <div className="flex flex-col text-black p-2 gap-2">
              <label htmlFor="step_1">Your Name</label>
              <Controller
                control={control}
                defaultValue=""
                name="step_1"
                render={({ field }) => (
                  <input
                    {...field}
                    id="step_1"
                    placeholder="Enter your name here"
                    className="rounded-md p-2 border border-gray-400 focus:outline-green-400"
                  />
                )}
              />
            </div>

            {/* Step 2: Order type */}
            <div className="flex flex-col text-black p-2 gap-2">
              <label htmlFor="step_2">
                Would you follow a fixed or flexible order?
              </label>
              <Controller
                control={control}
                defaultValue=""
                name="step_2"
                render={({ field }) => (
                  <select
                    {...field}
                    id="step_2"
                    className="p-2 rounded-md border border-gray-400 focus:outline-green-400"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="Fixed Order">Fixed Order</option>
                    <option value="Flexible Order">Flexible Order</option>
                  </select>
                )}
              />
            </div>

            {/* Step 3: Steps for planning */}
            <div className="flex flex-col text-black p-2 gap-2">
              <label htmlFor="step_3">
                List the steps for planning the birthday party
              </label>
              <Controller
                control={control}
                defaultValue=""
                name="step_3"
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="step_3"
                    placeholder="Describe your steps and sequence"
                    className="min-h-[100px] p-2 rounded-md border border-gray-400 focus:outline-green-400"
                  />
                )}
              />
            </div>

            {/* Step 4: Reason for sequence */}
            <div className="flex flex-col text-black p-2 gap-2">
              <label htmlFor="step_4">Why did you choose this sequence?</label>
              <Controller
                control={control}
                defaultValue=""
                name="step_4"
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="step_4"
                    placeholder="Explain your reasoning"
                    className="min-h-[100px] p-2 rounded-md border border-gray-400 focus:outline-green-400"
                  />
                )}
              />
            </div>

            {/* Submit Button */}
            <div className="p-5">
              <button
                type="submit"
                className="bg-blue-400 rounded-lg p-2 text-white w-full hover:bg-green-600"
              >
                Submit Plan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
