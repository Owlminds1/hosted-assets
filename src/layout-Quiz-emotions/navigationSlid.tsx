import React from "react";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";
import type { SwiperClass } from "swiper/react";
import type { RefObject } from "react";
type NavigationSlidProps = {
swiperRef: RefObject<SwiperClass | null>;
  lastIndexSlide: boolean;
  setIsFirstScreen: (val: string) => void;
};

const NavigationSlid = ({
  swiperRef,
  lastIndexSlide,
  setIsFirstScreen,
}: NavigationSlidProps) => {
  const handleNext = () => {
    swiperRef.current?.slideNext();
    if (lastIndexSlide) {
      setIsFirstScreen("Result");
    }
  };

  const handleprev = () => {
    swiperRef.current?.slidePrev();
  };
  return (
    <div className="  text-white w-full flex justify-between item-center ">
      <div onClick={handleprev}>
        <MdArrowCircleLeft className="text-3xl cursor-pointer" />
      </div>
      <div onClick={handleNext}>
        <MdArrowCircleRight className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default NavigationSlid;
