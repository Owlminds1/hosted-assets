"use client";
import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";


const Slide = () => {
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
    window.scrollTo(0, 0);
  };
  return (
    <div className="min-h-screen bg-[#F8FCFA] flex justify-center items-center gap-5 flex-col p-5 ">
      <div>
        <h1 className="text-3xl font-bold text-center">
          Mood Meter
        </h1>
      </div>
      <div className="w-[100%] ">
        <div className=" w-full rounded-lg shadow-lg ">
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
              <div className="min-h-[200px] flex justify-center items-center  p-5">
               <Image src="/C2Images/mood_meater.webp" width={500} height={100} alt="mood meter"/>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-[200px] flex justify-center items-center flex-col  p-5">
               <div className="flex flex-col gap-3 justify-start items-start p-5">
                <ul className="list-disc space-x-1 p-2">
                    <li className="text-lg text-black font-medium">Sadness is  an unpleasant, but a low energy emotion</li>
                    <li className="text-lg text-black font-medium">What makes you feel that way?</li>
                </ul>

                 <ul className="list-disc space-x-1 p-2">
                    <li className="text-lg text-black font-medium">Anger is unpleasant, but high energy! </li>
                    <li className="text-lg text-black font-medium">When do you get angry?</li>
                </ul>


                <ul className="list-disc space-x-1 p-2">
                    <li className="text-lg text-black font-medium">Being happy is a high energy, pleasant emotion.</li>
                    <li className="text-lg text-black font-medium">What makes you happy?</li>
                </ul>


                  <ul className="list-disc space-x-1 p-2">
                    <li className="text-lg text-black font-medium">Being calm is still a pleasant, but low energy emotion.</li>
                    <li className="text-lg text-black font-medium">When do you feel calm?</li>
                </ul>
               </div>
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div>

        {/* slide buttons  */}
        <div className="flex justify-between items-center gap-5 w-full mt-8  ">
          <span
            onClick={handlePrev}
            className={`${
              activeSlide <= 0 ? "invisible" : "visible"
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

export default Slide;
