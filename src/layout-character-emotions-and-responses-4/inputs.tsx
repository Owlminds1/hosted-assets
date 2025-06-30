"use client"
import React from "react";
import carectorData from "@/layout-character-emotions-and-responses-4/character.json";
import { Controller, useForm } from "react-hook-form";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa";

type Question = {
  name: string;
  question: string;
  placeholder?: string;
};

type CharacterCategory = {
  title: string;
  bgcolor: string;
  questions: Question[];
};

// Define the expected structure of the form data dynamically
type FormData = {
  [key: string]: string; // Each question's name will be a key with a string value (user's response)
};
const Inputs = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data:FormData) => {
    createPdf(data);
    console.log("Form Data:", data); // Log the form data to check the structure
  };

  const createPdf = (data:FormData) => {
    const doc = new jsPDF();
    const marginLeft = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - marginLeft * 2;
    let currentY = 10;

    // Title
    doc.setFontSize(15);
    doc.text("Character Emotions and Responses", pageWidth / 2, currentY, { align: "center" });
    currentY += 10;

    // Iterate over carectorData
    ( carectorData as CharacterCategory[]).forEach((item) => {
      doc.setFontSize(12);
      doc.text(`${item.title}:`, marginLeft + 5, currentY);
      currentY += 6;

      // Iterate over each question in the current category
      item.questions.forEach((questionItem) => {
        doc.setFontSize(10);
        doc.text(`${questionItem.question}`, marginLeft + 5, currentY);
        currentY += 6;

        // Get the corresponding answer from the data using the 'name' from each question
        const content = data[questionItem.name] || ""; // Get answer based on the name of the question
        doc.setFontSize(8);
        const eventLines = doc.splitTextToSize(content, contentWidth);
        doc.text(eventLines, marginLeft + 5, currentY);
        currentY += eventLines.length * 6;
      });

      currentY += 6; // Add some space between categories
    });

    // Save the PDF
    doc.save("character_responses.pdf");
  };

  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
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
                  name={qItem.name} // This should be the same name as in your JSON data
                  render={({ field }) => (
                    <textarea
                      {...field}
                      placeholder={qItem.placeholder}
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
          className="relative w-full bg-green-500 py-2 px-5 rounded "
        >
          Save My Responses
          <FaFilePdf  className="absolute top-3 left-[70%] scale-[1.2]" />
        </button>
      </form>
    </>
  );
};

export default Inputs;
