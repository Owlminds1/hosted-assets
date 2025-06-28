"use client";

import jsPDF from "jspdf";
import { Controller, useForm } from "react-hook-form";
interface FormData {
  step_1: string;
  step_2: string;
  step_3: string;
  step_4: string;
  step_5: string;
}

const Page = () => {
 const { control, handleSubmit } = useForm<FormData>();

 const onSubmit = (data: FormData) => {
  console.log("data", data);
  createPdf(data);
};

const createPdf = (data: FormData) => {
  const doc = new jsPDF();
  doc.setFontSize(12);

  const marginLeft = 20;
  const pageWidth   = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - marginLeft * 2;
  let currentY = 20;                       // <-- one source of truth

  // ⬇️ helper अब currentY को mutate करता है
  const addMultilineText = (label: string, text: string) => {
    doc.text(label, marginLeft, currentY);
    const lines = doc.splitTextToSize(text, contentWidth) as string[];

    lines.forEach(line => {
      currentY += 6;                       // increment y
      doc.text(line, marginLeft + 5, currentY);
    });

    currentY += 6;                         // extra gap after block
  };

  // ---------- यूज़र inputs ----------
  addMultilineText("1. What is it? This is a _______", data.step_1 || "N/A");
  addMultilineText("2. Who will use it? This can be used by ______", data.step_2 || "N/A");
  addMultilineText("3. What is its use? It can be used to ________", data.step_3 || "N/A");
  addMultilineText("4. Where will it be used? It can be used at ______", data.step_4 || "N/A");
  addMultilineText("5. How does it work? It can _____", data.step_5 || "N/A");

  doc.save("Answer_the_Questions.pdf");
};



  return (
    <div className=" min-h-screen w-full text-black bg-[#F0F4F8]">
      <div className=" p-5 font-bold">
        <h1 className="text-center text-[40px] ">
          Answer the Questions to <br />
          Describe
        </h1>
      </div>
      <div className="  flex items-center justify-center mt-5 p-5 ">
        <div className="bg-white shadow-xl text-black p-5 rounded-lg ">
          <form onSubmit={handleSubmit(onSubmit)} className="min-w-[800px]">
            <div className="flex flex-col text-black p-2 gap-2">
              <label className="text-xl font-bold" htmlFor="step_1">What is it? This is a _______</label>
              <Controller
                control={control}
                defaultValue=""
                name="step_1"
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="step_1"
                    placeholder="Type your answer here..."
                    className="min-h-[60px] rounded-md p-2 border border-1 border-[#3DCCC7] focus:outline-[#3DCCC7] bg-white placeholder:text-slate-600"
                  />
                )}
              />
            </div>
            <div className="flex flex-col text-black p-2 gap-2">
              <label className="text-xl font-bold" htmlFor="step_1">Who will use it? This can be used by ______</label>
              <Controller
                control={control}
                defaultValue=""
                name="step_2"
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="step_1"
                    placeholder="Type your answer here..."
                    className="min-h-[60px] rounded-md p-2 border border-1 border-[#3DCCC7] focus:outline-[#3DCCC7] bg-white placeholder:text-slate-600"
                  />
                )}
              />
            </div>

            <div className="flex flex-col text-black   p-2 gap-2">
              <label className="text-xl font-bold" htmlFor="step_3">
              What is its use? It can be used to ________
              </label>
              <Controller
                defaultValue=""
                name="step_3"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    name="step_3"
                    id="step_3"
                    placeholder="Type your answer here..."
                    className=" min-h-[60px] rounded-md p-2 border border-1 border-[#3DCCC7] focus:outline-[#3DCCC7] bg-white placeholder:text-slate-600"
                  />
                )}
              />
            </div>
            <div className="flex flex-col text-black   p-2 gap-2">
              <label className="text-xl font-bold" htmlFor="step_3">Where will it be used? It can be used at ______</label>
              <Controller
                defaultValue=""
                name="step_4"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    name="step_4"
                    id="step_4"
                    placeholder="Type your answer here..."
                    className=" min-h-[60px] rounded-md p-2 border border-1 border-[#3DCCC7] focus:outline-[#3DCCC7] bg-white placeholder:text-slate-600"
                  />
                )}
              />
            </div>
            <div className="flex flex-col text-black   p-2 gap-2">
              <label className="text-xl font-bold" htmlFor="step_3">How does it work? It can _____</label>
              <Controller
                defaultValue=""
                name="step_5"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    name="step_5"
                    id="step_4"
                    
                    placeholder="Type your answer here..."
                    className=" min-h-[60px] rounded-md p-2 border border-1 border-[#3DCCC7] focus:outline-[#3DCCC7] bg-white placeholder:text-slate-600"
                  />
                )}
              />
            </div>
            <div className="p-5">
              <button className="bg-blue-800 rounded-lg p-2 text-white w-full hover:bg-blue-600 ">
              Print or Save as PDF

              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
