"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

// JSON imports
import sentences from "@/layout-C2-L1-A3/sentences.json";
import sentences2 from "@/layout-C2-L1-A3/sentences2.json";
import sentences3 from "@/layout-C2-L1-A3/sentences3.json";
import suggestion from "@/layout-C2-L1-A3/suggestion.json";
import suggestion2 from "@/layout-C2-L1-A3/suggestion2.json";
import suggestion3 from "@/layout-C2-L1-A3/suggestion3.json";

const LayoutC2L1A3 = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSuggestion2, setShowSuggestion2] = useState(false);
  const [showSuggestion3, setShowSuggestion3] = useState(false);

  // calculate total slides dynamically
const totalSlides =
  1 + // Intro slide
  sentences.length +
  (showSuggestion ? 1 : 0) +
  sentences2.length +
  (showSuggestion2 ? 1 : 0) +
  sentences3.length +
  (showSuggestion3 ? 1 : 0);


  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] flex justify-center items-center gap-5 flex-col p-5 ">
      <div>
        <h1 className="text-3xl font-bold text-center">
        REPEAT THE LAST WORD
        </h1>
       
      </div>

      <div className="w-[80%] flex justify-center items-center flex-col">
        <div className="w-full shadow-lg rounded-lg">
          <Swiper
            autoHeight={true}
            loop={false}
            allowTouchMove={false}
            autoplay={false}
            modules={[Navigation]}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >

<SwiperSlide>
  <div className="flex flex-col justify-center items-center gap-6 min-h-[350px] p-6">
    <ul className="list-disc text-lg font-medium text-left space-y-4">
      <li className="text-xl">I will give you a series of statements with some answers.</li>
      <li className="text-xl">You repeat each answer three times.</li>
      <li className="text-xl">Then there’s a surprise!</li>
    </ul>

    <div className="text-left w-[50%]">
      <h3 className="font-bold w-full text-left">Example:

</h3>
<ul className="list-disc text-lg font-medium text-left space-y-4">
      <li className="text-xl">You carry your books in a schoolbag.</li>
    </ul>
    </div>
  </div>
</SwiperSlide>


            {/* Slide 1–4 */}
            {sentences.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center gap-10 p-5 min-h-[350px]">
                  {/* LHS image */}
                  <div className="w-[40%] flex justify-center">
                    <Image
                      src={item.img}
                      alt="slide"
                      width={250}
                      height={250}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  {/* RHS text */}
                  <div className="w-[60%] flex flex-col gap-6">
                    <p className="text-xl font-medium">{item.text}</p>

                    {/* Agar ye last slide hai tabhi button dikhega */}
                    {index === sentences.length - 1 && (
                      <div className="text-center w-full">
                        <button
                          onClick={() => {
                            setShowSuggestion(true);
                            handleNext();
                          }}
                          className="px-6 py-3 bg-violet-900 text-white font-bold rounded-xl shadow cursor-pointer"
                        >
                          Check Suggestion
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Suggestion Slide */}
            {showSuggestion && (
              <SwiperSlide>
                <div className="flex justify-center items-center gap-10 p-5 min-h-[350px]">
                  <div className="w-[40%] flex justify-center">
                    <Image
                      src={suggestion.img}
                      alt="suggestion"
                      width={250}
                      height={250}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  <div className="w-[60%]">
                    <p className="text-lg font-medium whitespace-pre-line">
                      {suggestion.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )}


                        {sentences2.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center gap-10 p-5 min-h-[350px]">
                  {/* LHS image */}
                  <div className="w-[40%] flex justify-center">
                    <Image
                      src={item.img}
                      alt="slide"
                      width={350}
                      height={250}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  {/* RHS text */}
                  <div className="w-[60%] flex flex-col gap-6">
                    <p className="text-xl font-medium">{item.text}</p>

                    {/* Agar ye last slide hai tabhi button dikhega */}
                    {index === sentences.length - 1 && (
                      <div className="text-center w-full">
                        <button
                          onClick={() => {
                            setShowSuggestion2(true);
                            handleNext();
                          }}
                          className="px-6 py-3 bg-violet-900 text-white font-bold rounded-xl shadow cursor-pointer"
                        >
                          Check Suggestion
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Suggestion Slide */}
            {showSuggestion2 && (
              <SwiperSlide>
                <div className="flex justify-center items-center gap-10 p-5 min-h-[350px]">
                  <div className="w-[40%] flex justify-center">
                    <Image
                      src={suggestion2.img}
                      alt="suggestion"
                      width={350}
                      height={250}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  <div className="w-[60%]">
                    <p className="text-lg font-medium whitespace-pre-line">
                      {suggestion2.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )}

                         {sentences3.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center gap-10 p-5 min-h-[350px]">
                  {/* LHS image */}
                  <div className="w-[40%] flex justify-center">
                    <Image
                      src={item.img}
                      alt="slide"
                      width={350}
                      height={250}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  {/* RHS text */}
                  <div className="w-[60%] flex flex-col gap-6">
                    <p className="text-xl font-medium">{item.text}</p>

                    {/* Agar ye last slide hai tabhi button dikhega */}
                    {index === sentences.length - 1 && (
                      <div className="text-center w-full">
                        <button
                          onClick={() => {
                            setShowSuggestion3(true);
                            handleNext();
                          }}
                          className="px-6 py-3 bg-violet-900 text-white font-bold rounded-xl shadow cursor-pointer"
                        >
                          Check Suggestion
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Suggestion Slide */}
            {showSuggestion3 && (
              <SwiperSlide>
                <div className="flex justify-center items-center gap-10 p-5 min-h-[350px]">
                  <div className="w-[40%] flex justify-center">
                    <Image
                      src={suggestion3.img}
                      alt="suggestion"
                      width={350}
                      height={250}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  <div className="w-[60%]">
                    <p className="text-lg font-medium whitespace-pre-line">
                      {suggestion3.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        {/* slide buttons */}
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
              activeSlide < totalSlides - 1? "visible" : "invisible"
            } cursor-pointer text-4xl border border-black rounded-full p-3 bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LayoutC2L1A3;
