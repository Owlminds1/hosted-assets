"use client";

import jsPDF from "jspdf";
import React from "react";
import { Controller, useForm } from "react-hook-form";

// ✅ Define FormData type for form fields
interface FormData {
  step_1: string; // User's name
  step_2: "Fixed Sequence" | "Flexible Sequence" | ""; // Sequence type
  step_3: string; // Steps and sequence
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
    let currentY = 10;

    doc.text("My Picnic Plan", pageWidth / 2, currentY, { align: "center" });
    currentY += 10;

    const addMultilineText = (
      label: string,
      text: string,
      yOffset: number
    ): number => {
      doc.text(label, marginLeft, yOffset);
      const lines = doc.splitTextToSize(text, contentWidth);
      lines.forEach((line:string, index:number) => {
        doc.text(line, marginLeft + 5, yOffset + (index + 1) * 6);
      });
      return yOffset + lines.length * 6 + 6;
    };

    currentY = addMultilineText("1. Your Name", data.step_1, currentY);
    currentY = addMultilineText("2. Sequence Type", data.step_2, currentY + 4);
    currentY = addMultilineText(
      "3. Steps and Sequence",
      data.step_3,
      currentY + 4
    );

    doc.save("Picnic_Plan.pdf");
  };

  return (
    <>
      <div className="bg-blue-500 p-5 font-bold">
        <h1 className="text-center text-[40px]">🧺 Plan Your Picnic!</h1>
        <p className="text-center">Think, plan, and share your fun picnic ideas!</p>
      </div>
      <div className="min-h-screen w-full bg-[#F4F4F9] flex items-center justify-center">
        <div className="bg-white shadow-xl text-black p-5 rounded-lg">
          <h1 className="text-2xl p-3 font-bold">Submit Your Picnic Plan</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="min-w-[500px]">
            {/* Step 1: Name */}
            <div className="flex flex-col text-black p-2 gap-2">
              <label htmlFor="step_1">🎉 Your Name</label>
              <Controller
                control={control}
                defaultValue=""
                name="step_1"
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="step_1"
                    placeholder="Enter your name here"
                    className="rounded-md p-2 border border-gray-400 focus:outline-green-400"
                  />
                )}
              />
            </div>

            {/* Step 2: Sequence Type */}
            <div className="flex flex-col text-black p-2 gap-2">
              <label htmlFor="step_2">🌀 Sequence Type</label>
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
                      Select Sequence Type
                    </option>
                    <option value="Fixed Sequence">Fixed Sequence</option>
                    <option value="Flexible Sequence">Flexible Sequence</option>
                  </select>
                )}
              />
            </div>

            {/* Step 3: Steps */}
            <div className="flex flex-col text-black p-2 gap-2">
              <label htmlFor="step_3">📝 Steps and Sequence</label>
              <Controller
                defaultValue=""
                name="step_3"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="step_3"
                    placeholder="Describe your steps and sequence"
                    className="p-2 rounded-md border border-gray-400 focus:outline-green-400 min-h-[100px]"
                  />
                )}
              />
            </div>

            <div className="p-5">
              <button
                type="submit"
                className="bg-green-400 rounded-lg p-2 text-black w-full hover:bg-green-600"
              >
                Submit My Picnic Plan
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="text-center bg-[#F4F4F9] text-gray-400 p-5">
        <span>© 2024 Fun Learning Zone | Keep Exploring & Having Fun!</span>
      </div>
    </>
  );
};

export default Page;
