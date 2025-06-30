"use client";
import React from "react";
import carectorData from "@/layout-character-emotions-and-responses-2/character.json";
import { Controller, useForm } from "react-hook-form";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa";

// Step 1: Proper FormData interface
interface FormData {
  I_Notice: string;
  I_Feel: string;
  I_Can: string;
}


const Inputs = () => {
  // Step 2: Type useForm properly
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
    doc.text("Character Emotions and Responses", pageWidth / 2, currentY, { align: "center" });
    currentY += 10;

    carectorData.forEach((item) => {
      doc.setFontSize(12);
      doc.text(`${item.title}`, marginLeft + 5, currentY);
      currentY += 6;

      doc.setFontSize(10);
      doc.text(`${item.questions}`, marginLeft + 5, currentY);
      currentY += 6;

      const content = data[item.name as keyof FormData] || "";
      doc.setFontSize(9);
      const eventLines = doc.splitTextToSize(content, contentWidth);
      doc.text(eventLines, marginLeft + 5, currentY);
      currentY += eventLines.length * 6 + 6;
    });

    doc.save("character_responses.pdf");
  };

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
        {carectorData.map((item, index) => (
          <div
            key={index}
            className="w-full text-black p-3 my-2 rounded-lg "
            style={{ backgroundColor: `${item.bgcolor}` }}
          >
            <h1 className="text-2xl py-2 font-bold">{item.title}</h1>
            <h1 className="text-lg py-2 font-bold">{item.questions}</h1>
            <h1 className="text-md py-2 ">{item.example}</h1>
                <Controller
                  control={control}
                  name={item.name as keyof FormData} // This should be the same name as in your JSON data
                  render={({ field }) => (
                    <textarea
                      {...field}
                      placeholder=""
                      maxLength={100}
                      className="p-1 w-full rounded-md "
                    />
                  )}
                />
              </div>
        
      
        ))}
        <button
          type="submit"
          className="relative w-full bg-green-500 py-2 px-5 rounded "
        >
          Save My Responses
          <FaFilePdf  className="absolute top-3 left-[70%] scale-[1.2]" />
        </button>
      </form>
  );
};

export default Inputs;
