"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { MdDoubleArrow } from "react-icons/md";
import { useRouter } from "next/navigation";
import swiperData from "@/layout-Biomimicry-2/data.json";

export default function LayoutBiomimicry2() {
  const MySwipe = useRef<SwiperClass | null>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const router = useRouter();

  // for handleClick Swiper Button Manual
  const handleClick = () => {
    if (!isLastSlide) {
      MySwipe.current?.slideNext();
    } else {
      router.push("/great-work");
    }
  };

  return (
    <>
      <Swiper
        onSlideChange={(swiper) => {
          setIsLastSlide(swiper.activeIndex == swiperData.length - 1);
        }}
        onSwiper={(swipe) => {
          MySwipe.current = swipe;
        }}
        modules={[Navigation]}
        allowTouchMove={false}
      >
        {swiperData.map((item, index) => (
          <SwiperSlide className="relative" key={index}>
            {/* YE APNA CONTAINT SLIDE KA  */}
            <div className="text-center md:absolute  py-5 w-full ">
              <h1 className="text-3xl font-bold">Biomimicry</h1>
              <p className="text-sm max-w-full px-8 ">Copy the Nature.</p>
            </div>
            <div className=" h-screen w-full flex  justify-around items-center flex-col md:flex-row ">
              {/* first image ============================ */}

              <div className="bg-[#79DAFF] h-full w-full flex items-center justify-center">
                <div className=" w-[300px] h-[300px] sm:w-[500px] sm:h-[400px] relative rounded-2xl overflow-hidden shadow-md shadow-black">
                  <Image
                    src={item.Image1}
                    layout="fill"
                    objectFit="cover"
                    alt="image"
                  />
                  <h1 className="absolute bottom-0 text-center w-full py-2 bg-white text-3xl  text-black ">
                    {item.firstHeading}
                  </h1>
                </div>
              </div>

              {/* secound image ============================ */}

              <div className="bg-[#99A1B3] h-full w-full flex items-center justify-center ">
                <div className=" w-[300px] h-[300px] sm:w-[500px] sm:h-[400px] relative rounded-2xl overflow-hidden shadow-md shadow-black">
                  <Image
                    src={item.Image2}
                    layout="fill"
                    objectFit="cover"
                    alt="image"
                  />
                  <h1 className="absolute bottom-0 text-center w-full py-2 bg-white text-3xl  text-black ">
                    {item.SecoundHeading}
                  </h1>
                </div>
              </div>
            </div>

            {/* YE APNA BTN   */}
            <div className="bottom-[39%] right-[35%] absolute md:bottom-0 md:right-[45%] text-center pb-8">
              <div className="relative myBtn">
                <Button
                  variant="outline"
                  onClick={handleClick}
                  className="bg-black  text-white  hover:bg-transparent   h-[50px] py-2 px-10 btn "
                >
                  Next <MdDoubleArrow />
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
