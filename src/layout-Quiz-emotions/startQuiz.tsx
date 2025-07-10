import Image from "next/image";
import React, {   useRef, useState } from "react";
import EmotionSideBaar from "./emotionSideBaar";
import quizData from "@/layout-Quiz-emotions/quizData.json";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Header from "./header";
import NavigationSlid from "./navigationSlid";


// interface QuizItem {
//   bgImage: string;
//   mainImage: string;
//   text: string;
//   answer: string;
//   voice: string;
// }

const StartQuiz = ({ setIsFirstScreen }: {setIsFirstScreen:(val:string)=>void}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const curruntQuiz = quizData[slideIndex];
  const lastIndexSlide = slideIndex == quizData.length - 1





  
  return (
    <>
      <Swiper
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setSlideIndex(swiper.activeIndex);
          console.log("slide change", swiper.activeIndex);
        }}
        modules={[Navigation]}
        allowTouchMove={false}
        onSwiper={(swipe) => (swiperRef.current = swipe)}
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <audio src={curruntQuiz.voice} autoPlay hidden />
            <div
              style={{
                backgroundImage: `url(${curruntQuiz.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
              }}
              className="rounded-xl bg-cover overflow-hidden bg-[url(/images/bg/first_bg.jpg)] h-full px-8 py-5"
            >
              <Header />
              <div className=" relative  grid grid-cols-12 gap-1 w-full items-center  ">
                {/* task side =================== */}
                <div className="col-span-8 flex justify-center items-center flex-col bg-white h-[400px] px-[50px] rounded-[5px]">
                  <Image
                    src={curruntQuiz.mainImage}
                    width={200}
                    height={100}
                    alt="imageQuiz"
                  />
                  <h1 className="text-lg text-center font-bold">
                    {curruntQuiz.text}
                  </h1>
                </div>

                {/* emotion baar =============== */}

                <div className=" col-span-4 flex justify-between items-center flex-col  h-[400px] ">
                  <EmotionSideBaar
                    answer={curruntQuiz.answer}
                   
                  />
                </div>
              </div>

              {/* navigation Buttons */}
              <NavigationSlid swiperRef={swiperRef} lastIndexSlide={lastIndexSlide} setIsFirstScreen={setIsFirstScreen}
          />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default StartQuiz;
