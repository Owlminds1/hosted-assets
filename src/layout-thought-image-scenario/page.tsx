"use client";

import Image from "next/image";
import Thought from "./thought";

const LayoutThoughtImageScenario = () => {
  return (
   <div className="text-center text-white bg-[#F8FCFA] min-h-screen w-full grid grid-cols-12 place-items-center gap-2 px-5">
      <div className="col-span-12 w-full ">
       <h1 className=" font-bold text-3xl text-black  "> Image Scenario</h1>
       <h1 className=" font-bold text-xl  text-black py-2">You fell from your bike and everyone laughed.</h1>
       <p className="text-black">Write down things in your control inside the person and things that are not in your control outside the person.</p>
      </div>
     
      <div className=" col-span-12 md:col-span-3 bg-[#F1DBC7]  w-[300px] h-[440px] rounded-lg overflow-hidden relative   ">
        <Image
          src="/thougth-img-scenario/senerio_image.png"
          fill
          alt="image"
          className="object-contain rounded-lg  "
        />
      </div>
      <div className="p-5 rounded-lg col-span-12 md:col-span-9 w-full bg-[#F1DBC7]  shadow-xl shadow-[#00000044] px-2">
        <Thought />
      </div>
    </div>
  )
}

export default LayoutThoughtImageScenario
