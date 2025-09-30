"use client";
import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  
  const handleSlideChange = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="min-h-screen bg-[#F8FCFA] flex justify-center items-center gap-5 flex-col p-5 ">
      <div>
        <h1 className="text-3xl font-bold text-center">Mood Meter</h1>
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
              <div className="min-h-[200px] grid grid-cols-12 place-items-center  p-5">
                <div className="col-span-6 w-full">
                  <Image
                    src="/C2Images/mood_meater.webp"
                    width={500}
                    height={100}
                    alt="mood meter"
                  />
                </div>
                <div className="col-span-6 flex flex-col gap-3 justify-start items-start p-5">
                  <ul className="list-disc space-x-1 p-2">
                    <li className="text-lg text-black font-normal">
                      Sadness is an <span className="font-bold">unpleasant</span>, but a <span className="font-bold">low energy</span> emotion
                    </li>
                    <li className="text-lg text-black font-normal">
                      What makes you feel that way?
                    </li>
                  </ul>

                  <ul className="list-disc space-x-1 p-2">
                    <li className="text-lg text-black font-normal">
                      Anger is <span className="font-bold">unpleasant</span>, but <span className="font-bold">high energy!</span>
                    </li>
                    <li className="text-lg text-black font-normal">
                      When do you get angry?
                    </li>
                  </ul>

                  <ul className="list-disc space-x-1 p-2">
                    <li className="text-lg text-black font-normal">
                      Being happy is a <span className="font-bold">high energy</span>, <span className="font-bold">pleasant</span> emotion.
                    </li>
                    <li className="text-lg text-black font-normal">
                      What makes you happy?
                    </li>
                  </ul>

                  <ul className="list-disc space-x-1 p-2">
                    <li className="text-lg text-black font-normal">
                      Being calm is still a <span className="font-bold">pleasant</span>, but <span className="font-bold">low energy</span> emotion.
                    </li>
                    <li className="text-lg text-black font-normal">
                      When do you feel calm?
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* slide buttons  */}
        {/* <div className="flex justify-between items-center gap-5 w-full mt-8  ">
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
        </div> */}
      </div>
    </div>
  );
};

export default Slide;
