"use client";
import React, { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import BalloonData from "@/layout-anxious-thoughts/balloonData.json";
import { Controller, useForm } from "react-hook-form";
import jsPDF from "jspdf";
import gsap from "gsap";

type FormDataType = {
  [key: string]: string; // Allow dynamic keys
};
const BlaloonForm = () => {
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [showMessege, setShowMessage] = useState(false);
  const [pullBtn, setPullBtn] = useState(true);
  const balloonRef = useRef<HTMLDivElement>(null);
  const { handleSubmit, control } = useForm<FormDataType>();

  const onSubmit = (formData: FormDataType) => {
    createPdf(formData);
    setMessages(formData);
    setShowMessage(true);
    gsap.to(".balloon", {
      y: -500,
      duration: 4,
      stagger: 0.8,
      ease: "power2.out",
    });
    setPullBtn(false);
  };
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

    // Add title, centered
    doc.text("Learning to Let Go!", pageWidth / 2, currentY, {
      align: "center",
    });
    currentY += 10;

    BalloonData.forEach((item) => {
      doc.setFontSize(14);
      // Check if there's enough space for the next section, add a new page if needed
      if (currentY + 30 > pageHeight) {
        doc.addPage();
        currentY = marginTop;
      }

      // Feeling Title
      doc.text(`  ${item.text}`, marginLeft, currentY);
      currentY += 6;

      // "When I feel this way"
      doc.setFontSize(12);
      const whenResponse = formData[String(item.name)] || "N/A";
      currentY += 6;

      doc.setFontSize(10);
      const whenLines = doc.splitTextToSize(whenResponse, contentWidth);
      doc.text(whenLines, marginLeft + 5, currentY);
      currentY += whenLines.length * 6;

      // Check for page space after "When I feel this way"
      if (currentY + 20 > pageHeight) {
        doc.addPage();
        currentY = marginTop;
      }

      // Add spacing between items
      currentY += 4;
    });

    // Save the PDF
    doc.save("anxious-thoughts.pdf");
  };

  const handlePull = () => {
    gsap.to(".balloon", {
      y: 0,
      duration: 4,
      stagger: 0.8,
      ease: "power2.out",
    });
  };

  const isDisabled = BalloonData.some((item) => !messages[item.name]?.trim());
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="z-20">
        <div className="flex justify-center items-end">
          {BalloonData.map((i, index) => (
            <div
              ref={balloonRef}
              key={index}
              style={{
                top: `${i.top}`,
                backgroundImage: `url('${i.image}')`,
              }}
              className={` balloon relative rounded-full flex items-center justify-center  w-[150px]  h-[450px] bg-cover bg-center `}
            >
              {showMessege ? (
                <ScrollArea className=" h-[100px] w-full  border bg-[#ef444476] backdrop-blur-lg  ml-2 mb-[130px] text-white px-2 rounded-lg">
                  {messages[i.name]}
                </ScrollArea>
              ) : (
                <Controller
                  name={String(i.name)}
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      className="  text-blue-500 px-2 bg-white w-[130px] ml-2 mb-[150px] min-h-[50px] border border-blue-400  rounded-[32px] "
                      placeholder=" your message ."
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        field.onChange(e);
                        setMessages((prev) => ({
                          ...prev,
                          [i.name]: e.target.value,
                        }));
                      }}
                    />
                  )}
                />
              )}
            </div>
          ))}
        </div>

        <div className="w-full text-center pb-3 ">
          {pullBtn ? (
            <button
              className="bg-orange-600 border-double btn cursor-pointer  text-white px-5 py-2 rounded-lg hover:bg-orange-700 "
              type="submit"
              disabled={isDisabled}
            >
              Submit My Thoughts
            </button>
          ) : (
            <button
              onClick={handlePull}
              className="bg-orange-600 border-double btn cursor-pointer  text-white px-5 py-2 rounded-lg hover:bg-orange-700 "
              type="button"
            >
              Pull the balloon down
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default BlaloonForm;
