"use client";
import React from "react";
import data from "@/layout-weather-forecast-of-emotions/data.json";
import { Controller, useForm } from "react-hook-form";
import jsPDF from "jspdf";

// Dynamic and type-safe form data
type FormDataType = Record<string, string>;

const LayoutWeatherForecastEmotions = () => {
  const { handleSubmit, control } = useForm<FormDataType>();

  const createPdf = (formData: FormDataType) => {
    const doc = new jsPDF();
    doc.setFontSize(16);

    // Page setup
    const marginLeft = 20;
    const marginTop = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const contentWidth = pageWidth - marginLeft * 2;
    let currentY = marginTop;

    // Add title
    doc.text("Weather Forecast of Emotions", pageWidth / 2, currentY, {
      align: "center",
    });
    currentY += 10;

    data.forEach((item, index) => {
      doc.setFontSize(14);
      if (currentY + 30 > pageHeight) {
        doc.addPage();
        currentY = marginTop;
      }

      doc.text(`${index + 1}. Feeling: ${item.text}`, marginLeft, currentY);
      currentY += 6;

      doc.setFontSize(12);
      const whenResponse = formData[item.name] || "N/A";
      doc.text("When I feel this way:", marginLeft, currentY);
      currentY += 6;

      doc.setFontSize(10);
      const whenLines = doc.splitTextToSize(whenResponse, contentWidth);
      doc.text(whenLines, marginLeft + 5, currentY);
      currentY += whenLines.length * 6;

      if (currentY + 20 > pageHeight) {
        doc.addPage();
        currentY = marginTop;
      }

      doc.setFontSize(12);
      const howResponse = formData[item.name2] || "N/A";
      doc.text("How others can tell:", marginLeft, currentY);
      currentY += 6;

      doc.setFontSize(10);
      const howLines = doc.splitTextToSize(howResponse, contentWidth);
      doc.text(howLines, marginLeft + 5, currentY);
      currentY += howLines.length * 6;

      currentY += 4;
    });

    doc.save("weather-forecast-of-emotions.pdf");
  };

  const onSubmit = (formData: FormDataType) => {
    createPdf(formData);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-black  p-5 ">
      <h1 className="text-center text-4xl py-5">
        Weather Forecast of Emotions
      </h1>
      <div className="text-white flex w-full justify-between items-center gap-2 text-center  px-8">
        <h2 className="w-[20%] bg-green-400 p-2 rounded-lg">Feeling</h2>
        <h2 className="w-[40%] bg-green-400  p-2 rounded-lg">
          When I feel this way
        </h2>
        <h2 className="w-[40%] bg-green-400 p-2  rounded-lg">
          How others can tell
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg mt-2 flex w-full justify-between items-center gap-2 text-center px-8"
          >
            <div className="w-[20%] flex items-center justify-center flex-col">
              <img src={item.image} className="w-[80px]" alt="" />
              <h2>{item.text}</h2>
            </div>

            <Controller
              name={item.name}
              defaultValue=""
              control={control}
              render={({ field }) => (
                <textarea
                  placeholder={item.placeholder}
                  className="w-[40%] p-5 outline-black border border-black rounded-md"
                  {...field}
                />
              )}
            />

            <Controller
              name={item.name2}
              defaultValue=""
              control={control}
              render={({ field }) => (
                <textarea
                  placeholder={item.placeholder2}
                  className="w-[40%] p-5 outline-black border border-black rounded-md"
                  {...field}
                />
              )}
            />
          </div>
        ))}
        <div className="w-full text-center py-6">
          <button
            type="submit"
            className="bg-green-400 rounded-md text-white px-5 py-2"
          >
            Generate PDF
          </button>
        </div>
      </form>
    </div>
  );
};

export default LayoutWeatherForecastEmotions;
