import React from "react";
import {  FaArrowRight } from "react-icons/fa";

type myProps = {
  setIsFirstSlide: (val: string) => void;
  isFirstSlide: string;
};

const First = ({ isFirstSlide, setIsFirstSlide }: myProps) => {
  return (
    <div className="w-[90%] bg-white border rounded-lg  p-3">
      <div className="grid grid-cols-12 w-full gap-1">
        <div className="col-span-4 w-full border border-black p-1  ">
          <h3 className="w-full text-center text-xl font-bold text-black">
            Topic
          </h3>
        </div>

        <div className="col-span-4 w-full border border-black p-1  ">
          <h3 className="w-full text-center text-xl font-bold text-black">
            For
          </h3>
        </div>

        <div className="col-span-4 w-full border border-black p-1  ">
          <h3 className="w-full text-center text-xl font-bold text-black">
            Against
          </h3>
        </div>
        {/* ================================ */}
        <div className="col-span-4 w-full p-3 flex justify-center items-center  border border-black ">
          <h3 className="w-full text-center text-2xl font-medium text-black">
            Should junk food be banned in schools?
          </h3>
        </div>

        <div className="col-span-4 w-full p-3  border border-black ">
          <p className="w-full text-center text-lg font-medium text-black">
            Yes, junk food should be banned in schools. Schools are places meant
            to nurture the mind and body. Chips, sodas, and deep-fried snacks
            contradicts that mission. Junk food leads to obesity, poor
            concentration, and long-term health issues. Students spend 6 to 8
            hours at school, amongst mentors and friends. So healthy eating
            habits learned here will have a stronger impact.
          </p>
        </div>

        <div className="col-span-4 w-full p-3   border border-black ">
          <p className="w-full text-center text-lg font-medium text-black">
            Let’s accept that students can and will get junk food outside
            school. Instead of banning, schools should teach about self-control,
            informed choices and include healthy alternatives.
          </p>
        </div>

         <div className="col-span-4 w-full p-3 flex justify-center items-center  border border-black ">
          <h3 className="w-full text-center text-2xl font-medium text-black">
         Closing remarks
          </h3>
        </div>

        <div className="col-span-4 w-full p-3  border border-black ">
          <p className="w-full text-center text-lg font-medium text-black">
           Children’s health is non-negotiable. With rising diabetes and heart conditions even in children, we must take strong measures. Banning junk food in schools will create a healthier generation. We are not taking away freedom, we’re protecting futures.
          </p>
        </div>

        <div className="col-span-4 w-full p-3   border border-black ">
          <p className="w-full text-center text-lg font-medium text-black">
          Banning doesn’t equal learning. Let’s teach students to choose wisely, offer variety and promote balance. That’s how we build habits that last, not through force, but through understanding.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-end items-center mt-5">
        <div
          className={`${
            isFirstSlide
              ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
              : ""
          } hover:scale-90`}
        >
          <FaArrowRight
            className={` text-[40px] cursor-pointer text-black`}
            onClick={() => setIsFirstSlide("Secound")}
          />
        </div>
      </div>
    </div>
  );
};

export default First;
