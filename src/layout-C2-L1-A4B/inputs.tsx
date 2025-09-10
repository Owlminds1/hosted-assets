"use client";
import React from "react";
import carectorData from "@/layout-C2-L1-A4B/character.json";
import { Controller, useForm } from "react-hook-form";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa";

// ✅ Step 1: FormData interface based on JSON keys
interface FormData {
  feeling: string;
  reasonFeeling: string;
  whatHappened: string;
  whatMakesYouFeel: string;
  moodMeterPosition: string;
  feelingName: string;
  characterAction: string;
  yourAction: string;
  characterRegulation: string;
  helpFriend: string;
  personalRegulation: string;
}

const Inputs = () => {
  // ✅ Step 2: Proper useForm typing
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    createPdf(data);
    console.log("Form Data:", data);
  };

  const createPdf = (data: FormData) => {
    const doc = new jsPDF();
    const marginLeft = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - marginLeft * 2;
    let currentY = 10;

    doc.setFontSize(15);
    doc.text("Applying RULER", pageWidth / 2, currentY, {
      align: "center",
    });
    currentY += 10;

    carectorData.forEach((item) => {
      doc.setFontSize(12);
      doc.text(`${item.title}:`, marginLeft + 5, currentY);
      currentY += 6;

      item.questions.forEach((questionItem) => {
        doc.setFontSize(10);
        doc.text(`${questionItem.question}`, marginLeft + 5, currentY);
        currentY += 6;

        const content = data[questionItem.name as keyof FormData] || "";
        doc.setFontSize(8);
        const eventLines = doc.splitTextToSize(content, contentWidth);
        doc.text(eventLines, marginLeft + 5, currentY);
        currentY += eventLines.length * 6;
      });

      currentY += 6;
    });

    doc.save("Applying_RULER.pdf");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[60%]">
      {carectorData.map((item, index) => (
        <div
          key={index}
          className="w-full text-black p-3 my-2 rounded-lg "
          style={{ backgroundColor: `${item.bgcolor}` }}
        >
          <h1 className="text-2xl py-2 font-bold">{item.title}</h1>
          {item.questions.map((qItem, qIndex) => (
            <div key={qIndex} className="flex flex-col gap-2 mb-4">
              <h2 className="font-medium">{qItem.question}</h2>
              <Controller
                control={control}
                name={qItem.name as keyof FormData}
                // This should be the same name as in your JSON data
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Enter your response"
                    maxLength={100}
                    className="p-1 w-full rounded-md "
                  />
                )}
              />
            </div>
          ))}
        </div>
      ))}
      <button
        type="submit"
        className="relative w-full bg-green-500 text-white py-2 px-5 rounded "
      >
        Save My Responses
        <FaFilePdf className="absolute top-3 left-[70%] scale-[1.2]" />
      </button>
    </form>
  );
};

export default Inputs;
