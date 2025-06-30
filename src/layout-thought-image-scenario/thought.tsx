"use client";

import React from "react";
import myThoughts from "@/layout-thought-image-scenario/ourThought.json";
import othersThought from "@/layout-thought-image-scenario/otherThought.json";
import { Controller, useForm } from "react-hook-form";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";

// Define each item in form as a key-value map
interface DynamicEntry {
  [key: string]: string;
}

// Define FormData structure
interface FormData {
  myThoughts: DynamicEntry[];
  othersThought: DynamicEntry[];
}

const Thought = () => {
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      myThoughts: myThoughts.map(() => ({})),
      othersThought: othersThought.map(() => ({})),
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    createPdf(data);
  };

  const createPdf = (data: FormData) => {
    const doc = new jsPDF();
    doc.setFontSize(15);

    const marginLeft = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - marginLeft * 2;
    let currentY = 10;

    doc.text("Event and Thoughts", pageWidth / 2, currentY, {
      align: "center",
    });
    currentY += 10;

    // My Thoughts Section
    doc.setFontSize(12);
    doc.text("My Responses", pageWidth / 2, currentY, { align: "center" });
    currentY += 6;

    myThoughts.forEach((item, index) => {
      doc.setFontSize(12);
      doc.text(`${item.Text}:`, marginLeft + 5, currentY);
      currentY += 6;
      doc.setFontSize(10);
      const content = data.myThoughts?.[index]?.[item.name] || "";
      const eventLines = doc.splitTextToSize(content, contentWidth);
      doc.text(eventLines, marginLeft + 5, currentY);
      currentY += eventLines.length * 6;
    });

    // Others Thoughts Section
    doc.setFontSize(12);
    doc.text("Others Responses", pageWidth / 2, currentY, { align: "center" });
    currentY += 6;

    othersThought.forEach((item, index) => {
      doc.setFontSize(12);
      doc.text(`${item.Text}:`, marginLeft + 5, currentY);
      currentY += 6;
      doc.setFontSize(10);
      const content = data.othersThought?.[index]?.[item.name] || "";
      const eventLines = doc.splitTextToSize(content, contentWidth);
      doc.text(eventLines, marginLeft + 5, currentY);
      currentY += eventLines.length * 6;
    });

    doc.save("image_scenario.pdf");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-12  gap-1 w-full"
    >
      {/* My Responses */}
      <div className="col-span-6 w-full">
        <h1 className="text-lg text-black py-2">My Responses</h1>
        <div className="bg-[#546C84] p-3 rounded-lg flex flex-col gap-1">
          {myThoughts.map((item, index) => (
            <Controller
              key={index}
              control={control}
              name={`myThoughts.${index}.${item.name}` as const}
              render={({ field }) => (
                <>
                  <label className="text-left text-white">{item.Text}</label>
                  <Textarea
                    maxLength={200}
                    placeholder={item.placeHolder}
                    className="placeholder:text-white"
                    {...field}
                  />
                </>
              )}
            />
          ))}
        </div>
      </div>

      {/* Others Responses */}
      <div className="col-span-6 w-full">
        <h1 className="text-lg text-black py-2">Others Responses</h1>
        <div className="bg-[#AA8D9B] p-3 rounded-lg flex flex-col gap-1">
          {othersThought.map((item, index) => (
            <Controller
              key={index}
              control={control}
              name={`othersThought.${index}.${item.name}` as const}
              render={({ field }) => (
                <>
                  <label className="text-left text-white">{item.Text}</label>
                  <Textarea
                    maxLength={200}
                    placeholder={item.placeHolder}
                    className="placeholder:text-white"
                    {...field}
                  />
                </>
              )}
            />
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="col-span-12 w-full flex justify-center mt-4">
        <button
          type="submit"
          className="relative w-[500px] bg-[#F46A49] text-white rounded-lg p-2"
        >
          Save My Responses
          <FaFilePdf className="absolute top-3 left-[70%] scale-[1.2]" />
        </button>
      </div>
    </form>
  );
};

export default Thought;
