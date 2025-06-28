"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import SlideData from "@/layout-Positive-Negative-Impact/slidData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const LayoutPositiveNegativeImpact = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
  };

  return (
    <div className="bg-white min-h-screen flex items-center flex-col gap-6 justify-center">
        <h1 className="text-center text-3xl py-4 text-black">
          Positive and Negative Impact
        </h1>
      <div className="w-[500px] ">
        <Swiper
          slidesPerView={1}
          // loop={true}
          allowTouchMove={false}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {SlideData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full flex justify-center items-center  ">
                <Image
                  src={item.image}
                  className="rounded-lg"
                  height={200}
                  width={450}
                  alt="slider image"
                />
                <h1 className="absolute text-xl bg-[#000000b1] text-white w-[350px] p-4 text-center z-10 rounded-lg  bottom-8">
                  {item.text}
                </h1>
              </div>
            </SwiperSlide>
          ))}
          <div className=" py-4 flex items-center justify-center gap-5 text-black">
          {
            lastSlide > 0 ? (
              <IoIosArrowDropleft
                className="text-[40px] cursor-pointer"
                onClick={handlePrev}
              />
            ) : (
              ""
            )
          }

            {lastSlide < SlideData.length - 1 ? (
              <IoIosArrowDropright
                className="text-[40px] cursor-pointer "
                onClick={handleNext}
              />
            ) : (
              ""
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default LayoutPositiveNegativeImpact;
