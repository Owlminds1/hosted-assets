import React from "react";
import {  FaArrowLeft} from "react-icons/fa";

type myProps = {
  setIsFirstSlide: (val: string) => void;

};

const Secound = ({  setIsFirstSlide }: myProps) => {
  return (
    <div className="w-[90%] bg-white border  p-3 rounded-lg">
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
      Should parents beat kids to discipline?
          </h3>
        </div>

        <div className="col-span-4 w-full p-3  border border-black ">
          <p className="w-full text-center text-lg font-medium text-black">
         {` Yes, sometimes, when kids do something really wrong - like being rude or lying and don’t listen -  a small smack can help them understand that what they did was serious. It might stop us from doing something worse in the future. Some parents say that it worked for them when they were kids.`}
          </p>
        </div>

        <div className="col-span-4 w-full p-3   border border-black ">
          <p className="w-full text-center text-lg font-medium text-black">
         {`No, parents should not beat kids. Hitting is violence and can make kids scared, sad, and angry. In some cases, it turns them into a bully! Instead, parents can talk to explain what was wrong or use other techniques like give a timeout by taking away screen time, or talk about consequences. Beating teaches fear, not kindness and responsibility.`}
          </p>
        </div>
  {/* ================================ */}
        <div className="col-span-4 w-full p-3 flex justify-center items-center  border border-black ">
          <h3 className="w-full text-center text-2xl font-medium text-black">
     Closing remarks
          </h3>
        </div>

        <div className="col-span-4 w-full p-3  border border-black ">
          <p className="w-full text-center text-lg font-medium text-black">
         {` Parents don’t hit us because they hate us, but because they want us to learn. Their intention is to teach right from wrong.`}
          </p>
        </div>

        <div className="col-span-4 w-full p-3   border border-black ">
          <p className="w-full text-center text-lg font-medium text-black">
         {`Discipline should come with kindness and respect. Talking, listening, and guiding are better ways to help kids do better.`}
          </p>
        </div>
        
      </div>

      <div className="w-full flex justify-between items-center mt-5">
        <div
          className={` border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90`}
        >
          <FaArrowLeft
            className={` text-[40px] cursor-pointer text-black`}
            onClick={() => setIsFirstSlide("first")}
          />
        </div>
      
      </div>
    </div>
  );
};

export default Secound;
