"use client";

import jsPDF from "jspdf";
import { Controller, useForm } from "react-hook-form";

interface FormData {
    step_1: string;
    step_2: string;
    step_3: string;
}

const Page = () => {
    const { control, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
        createPdf(data);
    };

    const createPdf = (data: FormData) => {
        const doc = new jsPDF();
        const marginLeft = 20;
        const pageWidth = doc.internal.pageSize.getWidth();
        const contentWidth = pageWidth - marginLeft * 2;
        let currentY = 10;

        doc.setFontSize(15);
        doc.text("Event and Thoughts", pageWidth / 2, currentY, { align: "center" });
        currentY += 10;

        doc.setFontSize(12);
        doc.text("1. Event:", marginLeft, currentY);
        const eventLines = doc.splitTextToSize(data.step_1, contentWidth);
        doc.text(eventLines, marginLeft + 5, (currentY += 6));
        currentY += eventLines.length * 6;

        doc.text("2. First thought about the event:", marginLeft, (currentY += 10));
        const firstThoughtLines = doc.splitTextToSize(data.step_2, contentWidth);
        doc.text(firstThoughtLines, marginLeft + 5, (currentY += 6));
        currentY += firstThoughtLines.length * 6;

        doc.text("3. Second thought about the event:", marginLeft, (currentY += 10));
        const secondThoughtLines = doc.splitTextToSize(data.step_3, contentWidth);
        doc.text(secondThoughtLines, marginLeft + 5, (currentY += 6));
        currentY += secondThoughtLines.length * 6;

        doc.save("Event_and_Thoughts.pdf");
    };

    return (
        <div className="h-screen min-h-screen w-full bg-[#F8FCFA] flex items-center justify-center">
            <div className="bg-white shadow-xl text-black p-5 rounded-lg">
                <h1 className="text-2xl p-3 font-bold">
                    Write an Event and Consider Two Alternate Ways to Think About It
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col text-black p-5 gap-2">
                        <label htmlFor="step_1">Step 1: Write the Event:</label>
                        <Controller
                            control={control}
                            defaultValue=""
                            name="step_1"
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="step_1"
                                    placeholder="e.g. I was not called at a birthday party"
                                    className="rounded-md p-1 min-h-[60px] border border-gray-400 focus:outline-green-400"
                                />
                            )}
                        />
                    </div>

                    <div className="flex flex-col text-black p-5 gap-2">
                        <label htmlFor="step_2">Step 2: Write your first thought:</label>
                        <Controller
                            control={control}
                            defaultValue=""
                            name="step_2"
                            render={({ field }) => (
                                <textarea
                                    {...field}
                                    id="step_2"
                                    placeholder="e.g. They forgot to call me"
                                    className="p-1 rounded-md min-h-[60px] border border-gray-400 focus:outline-green-400"
                                />
                            )}
                        />
                    </div>

                    <div className="flex flex-col text-black p-5 gap-2">
                        <label htmlFor="step_3">Step 3: Write the second thought:</label>
                        <Controller
                            control={control}
                            defaultValue=""
                            name="step_3"
                            render={({ field }) => (
                                <textarea
                                    {...field}
                                    id="step_3"
                                    placeholder="e.g. It’s not that big a deal"
                                    className="p-1 rounded-md min-h-[60px] border border-gray-400 focus:outline-green-400"
                                />
                            )}
                        />
                    </div>

                    <div className="p-5">
                        <button
                            type="submit"
                            className="bg-green-400 rounded-lg p-2 text-white w-full hover:bg-green-600"
                        >
                            Create Document
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
