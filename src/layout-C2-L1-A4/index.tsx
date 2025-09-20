"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import MasterList from "@/layout-C2-L1-A4/data.json";
import Data from "@/layout-C2-L1-A4/answer.json";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";
import "@/layout-C2-L1-A4/shak.css";
import Welldone from "../components/wellDone";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

const LayoutC2L1A4 = () => {
  const { width, height } = useWindowSize();
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [showBtn, setShowBtn] = useState(false);
  const [open, setOpen] = useState(false);

  // ✅ answers per slide
  const [answers, setAnswers] = useState<string[][]>(
    Array(Data.length).fill([])
  );

  // ✅ global selected answers
  const [usedAnswers, setUsedAnswers] = useState<string[]>([]);

  // ✅ completed status per slide
  const [completedSlides, setCompletedSlides] = useState<boolean[]>(
    Array(Data.length).fill(false)
  );

  const [isCorrect, setIsCorrect] = useState<HTMLAudioElement>();
  const [isWrong, setIsWrong] = useState<HTMLAudioElement>();
  const [wrongShake, setWrongShake] = useState<string>("");

  useEffect(() => {
    setIsCorrect(new Audio("/audio/correct.mp3"));
    setIsWrong(new Audio("/audio/wrong_buzzer.mp3"));
  }, []);

  // ✅ Confetti auto hide after 5s
  useEffect(() => {
    if (showBtn) {
      const timer = setTimeout(() => setShowBtn(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [showBtn]);

  const handlePrev = () => swiperRef?.current?.slidePrev();
  const handleNext = () => swiperRef?.current?.slideNext();

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);

    // ✅ agar slide already complete hai toh button show karo
    if (completedSlides[swiper.activeIndex]) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }

    setWrongShake("");
  };

  // ✅ Master item click
  const handleCheck = (selected: string, slideIndex: number) => {
    const correctAnswers = Data[slideIndex].val;

    if (correctAnswers.includes(selected)) {
      if (answers[slideIndex].includes(selected)) return;

      const newAnswers = [...answers];
      newAnswers[slideIndex] = [...newAnswers[slideIndex], selected];
      setAnswers(newAnswers);

      // ✅ add to global usedAnswers
      setUsedAnswers((prev) => [...prev, selected]);

      isCorrect?.play();

      // ✅ check completion
      if (newAnswers[slideIndex].length === correctAnswers.length) {
        setShowBtn(true);
        setOpen(true);

        // ✅ mark slide as completed
        const newCompleted = [...completedSlides];
        newCompleted[slideIndex] = true;
        setCompletedSlides(newCompleted);
        swiperRef.current?.updateAutoHeight()
      }
    } else {
      isWrong?.play();
      setWrongShake("shake");
      setTimeout(() => setWrongShake(""), 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] flex flex-col items-center p-5">
      <div>
        <h1 className="text-3xl font-bold text-center">
          Learn to Regulate Emotions.
        </h1>
        <p className="text-lg my-3 font-medium text-center">
          {activeSlide === 0
            ? "Identifying how your body behaves allows to initiate the process of understanding emotions"
            : activeSlide === 1
            ? "Spotting the causes of your feelings is essential to understanding emotions."
            : activeSlide === 2
            ? "Naming allows us to feel like we are able to explain how we feel."
            : activeSlide === 3
            ? "Even though there are many, some forms of expressions are more effective than others to show our feelings"
            : activeSlide === 4
            ? "Understanding how to manage our feelings is an important task."
            : ""}
        </p>

        <p className="text-lg my-3 font-medium text-center">
          {activeSlide === 0
            ? "Select the correct words from the bubble to refer to physical behavior."
            : activeSlide === 1
            ? "Select the correct words from the bubble to refer to causes."
            : activeSlide === 2
            ? "Select the correct words from the bubble to refer to methods of naming."
            : activeSlide === 3
            ? "Select the correct words from the bubble to refer to what can impact our expression"
            : activeSlide === 4
            ? "Select the correct words from the bubble to refer to what can impact our expression."
            : ""}
        </p>
      </div>

      <div className="w-[80%] flex flex-col items-center">
        <div className="w-full shadow-lg rounded-lg ">
          <Swiper
            autoHeight
            allowTouchMove={false}
            modules={[Navigation]}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {Data.map((item, index) => {
              const filteredList = MasterList.filter(
                (val) => !usedAnswers.includes(val) // ✅ global filter
              );

              return (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-12 gap-5 p-5 min-h-[400px] place-items-center">
                    {/* Left side MasterList */}
                    {filteredList.length > 0 && (
                      <div
                        className={`col-span-4 flex flex-col gap-2 justify-center ${wrongShake}`}
                      >
                        {filteredList.map((val, MasterIndex) => (
                          <h3
                            key={MasterIndex}
                            onClick={() => handleCheck(val, index)}
                            className="text-sm px-2 py-1 font-medium rounded-lg border text-center cursor-pointer transition hover:bg-violet-200"
                          >
                            {val}
                          </h3>
                        ))}
                      </div>
                    )}

                    {/* Right side answers */}
                    <div
                      className={`${
                        filteredList.length > 0 ? "col-span-8" : "col-span-12"
                      } w-full flex flex-col items-center gap-4`}
                    >
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={100}
                      />
                      <h2 className="text-xl font-medium text-center">
                        {item.question}
                      </h2>

                      <div className="bg-violet-200 w-[70%] p-3 min-h-[80px] rounded-lg flex flex-wrap gap-2 justify-center items-center">
                        {answers[index].map((ans, i) => (
                          <span
                            key={i}
                            className="bg-white border px-2 py-1 rounded-md text-sm font-medium"
                          >
                            {ans}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            <SwiperSlide>
              <div className="min-h-[200px] flex justify-center items-center p-5">

                <Image src="/C2Images/ruler_img.webp" alt="Ruler" width={350} height={100} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-5 w-full mt-8">
          <span
            onClick={handlePrev}
            className={`${
              activeSlide === 0 ? "invisible" : "visible"
            } cursor-pointer text-4xl border border-black rounded-full p-3 bg-yellow-400`}
          >
            <FaArrowLeft />
          </span>
          <span
            onClick={handleNext}
            className={` ${
              activeSlide < Data.length && completedSlides[activeSlide]
                ? "visible"
                : "invisible"
            } cursor-pointer text-4xl border border-black rounded-full p-3 bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>

      {/* Well Done Dialog */}
      <Welldone
        open={open}
        setOpen={setOpen}
        text={Data[activeSlide]?.text ?? ""}
      />

      {/* Confetti */}
      {showBtn && (
        <Confetti
          width={width}
          height={height}
          style={{ position: "fixed", top: 0, left: 0 }}
        />
      )}
    </div>
  );
};

export default LayoutC2L1A4;
