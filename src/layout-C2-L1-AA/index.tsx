"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Data from "@/layout-C2-L1-AA/data.json";
import ImageData from "@/layout-C2-L1-AA/answer.json";
import Image from "next/image";
const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});
import { useWindowSize } from "react-use";
import dynamic from "next/dynamic";

import "@/layout-C2-L1-A1/shak.css"

const LayoutC2L1AA = () => {
      const { width, height } = useWindowSize();
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [showBtn, setShowBtn] = useState(false);
  const [answers, setAnswers] = useState<string[]>(Array(Data.length).fill(""));
  const [isCorrect,setIsCorrect]=useState<HTMLAudioElement>();
  const [isWrong,setIsWrong]=useState<HTMLAudioElement>();
  const [correctIndex, setCorrectIndex] = useState<number[]>([]);
const [wrongIndex, setWrongIndex] = useState<number | null>(null);
  useEffect(()=>{
    setIsCorrect(new Audio("/audio/correct.mp3"))
    setIsWrong(new Audio("/audio/wrong_buzzer.mp3"))
  },[])

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    setShowBtn(false);
    setCorrectIndex([])
    setWrongIndex(null)

  };

  

const handleCheck = (answer: string, val: string, index: number, imgIndex: number) => {
  if (val === answer) {
    setCorrectIndex((prev) => [...prev, imgIndex]);
    const newAnswer = [...answers];
    newAnswer[index] = answer;
    setAnswers(newAnswer);

    isCorrect?.play();
    setShowBtn(true);
  } else {
    isWrong?.play();
    setWrongIndex(imgIndex);

    // shake + red border remove after animation
    setTimeout(() => {
      setWrongIndex(null);
    }, 600);
  }
};


  return (
<div className="min-h-screen bg-[#F8FCFA] flex justify-center items-center gap-5 flex-col p-5 overflow-hidden">
      <div>
        <h1 className="text-3xl font-bold text-center">Guess Emotions</h1>
        <p className="text-lg my-3 font-medium text-center">
        Are you emotionally smart? Guess what emotion by selecting the correct label.
        </p>
      </div>
      <div className="w-[70%]  flex justify-center items-center flex-col">
        <div className=" w-full shadow-lg  rounded-lg ">
          <Swiper
            autoHeight={true}
            loop={false}
            allowTouchMove={false}
            autoplay={false}
            modules={[Navigation]}
            slidesPerView={1}
            // navigation
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {Data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="min-h-[350px] p-5  grid grid-cols-12 w-full">
                  <div className="col-span-8 bg-violet-100 rounded-lg w-full flex flex-col gap-5 justify-center items-center">
                    <div className="w-[300px] h-[300px] relative overflow-hidden">
                                          <Image src={item.images} fill alt="C2images"  className="rounded-lg object-contain"/>
                    </div>
                  <h3 className="text-xl font-bold text-black w-[80%] text-center ">
                    {item.text} {  answers[index] ? <span className="text-green-600 border-b border-black ">{ answers[index]} </span>: "________"}
                  </h3>

                  </div>
                  <div className="col-span-4 w-full flex flex-col gap-2 justify-center items-center">
                    {ImageData.map((i, imgIndex) => (
<div
  key={imgIndex}
  onClick={() => handleCheck(i.ans, item.val, index, imgIndex)}
  className={`
    col-span-6 active:scale-95 transition-all duration-300 active:shadow-lg  
    w-[100px] h-[100px] relative rounded-lg overflow-hidden
    ${correctIndex.includes(imgIndex) && item.val === i.ans ? "border-4 border-green-500" : ""}
    ${wrongIndex === imgIndex ? "border-4 border-red-500 shake" : ""}
  `}
>
  <Image
    className="hover:scale-105 cursor-pointer transition-all duration-300"
    src={i.image}
    fill
    alt={i.ans}
  />
</div>

                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* slide buttons  */}
        <div className="flex justify-between items-center gap-5 w-full mt-8  ">
          <span
            onClick={handlePrev}
            className={`${
              activeSlide === 0 ? "invisible" : "visible"
            }  cursor-pointer text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowLeft />
          </span>
          <span
            onClick={handleNext}
            className={` ${
              activeSlide < 5 && showBtn ? "visible" : "invisible"
            }  cursor-pointer text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>

     {showBtn ? (
  <Confetti
    width={width}
    height={height}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
    }}
  />
) : ""}

    </div>
  );
};

export default LayoutC2L1AA;
