"use client";
import React, {  useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

import "@/layout-C2-L1-A1/shak.css"
import Link from "next/link";
import Inputs from "./inputs";

const LayoutC2L1A4B = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
 

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
    
  };

  




  return (
    <div className="min-h-screen bg-[#F8FCFA] flex justify-center items-center gap-5 flex-col p-5 ">
      <div>
        <h1 className="text-3xl font-bold text-center">{
          activeSlide === 0 ? "Blueprint for Regulating Emotions" :activeSlide === 1 ? "Let’s apply RULER":""}</h1>
      
      </div>
      <div className="w-[80%]  flex justify-center items-center flex-col">
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
           <SwiperSlide>
            <div className="min-h-[300px] flex justify-center items-center flex-col gap-8 p-8">
              <Link href="https://www.storywizard.ai/s/bd58c6ceb4c64fc0"  target="_blank" className="text-lg bg-violet-900 px-8 py-1 rounded-lg text-white font-bold">Read This Story</Link>
              <Image src="/C2Images/ruler_img.webp" alt="ruler" width={300} height={200} className="rounded-lg" />
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className="min-h-[300px] w-full flex justify-center items-start p-5">
<Inputs/>
            </div>
           </SwiperSlide>


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
              activeSlide < 1 ? "visible" : "invisible"
            }  cursor-pointer text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>

    </div>
  );
};

export default LayoutC2L1A4B;
