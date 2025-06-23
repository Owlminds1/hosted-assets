import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    // C2-L3-RF4
    <div className="min-h-screen bg-[#F8FCFA] gap-5 flex items-center justify-start p-8 flex-col">
      <h2 className="text-black font-bold text-3xl text-center">
        Weather Forecast Emotions
      </h2>
      <div className="w-[90%]">
        <div className="grid grid-cols-12 w-full  border border-b-0 border-black   ">
          <div className="col-span-4 w-full   ">
            <h3 className="text-black font-bold text-xl w-full bg-yellow-300 text-center p-1 border border-black   ">
              Feeling
            </h3>
          </div>

          <div className="col-span-4 w-full   ">
            <h3 className="text-black font-bold text-xl w-full bg-yellow-300 text-center p-1 border border-black   ">
              When I Feel This Way
            </h3>
          </div>

          <div className="col-span-4 w-full   ">
            <h3 className="text-black font-bold text-xl w-full bg-yellow-300 text-center p-1 border border-black   ">
              How Others Can Tell
            </h3>
          </div>

          {/* =============================== */}
        </div>


        <div className="grid grid-cols-12 w-full  border-t-0 border border-black  ">
          <div className="col-span-4 w-full flex justify-center items-center gap-3 border-r border-black p-3   ">
            <h3 className="text-gray-800 font-medium text-xl p-1 min-w-[100px] ">
              Furious
            </h3>
            <Image
              src="/images/Furious.png"
          
              width={100}
              height={100}
              alt="image"
            />
          </div>
          <div className="col-span-4 w-full flex justify-center items-center gap-3 border-r border-black p-3   ">
            <h3 className="text-gray-800 font-normal text-xl p-1 ">
              When my friend was mean.
            </h3>
          </div>

          <div className="col-span-4 w-full flex justify-center items-center gap-3  p-3     ">
            <h3 className="text-gray-800 font-normal text-xl p-1 ">
              I am yelling and my face is red.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full  border-t-0 border border-black  ">
          <div className="col-span-4 w-full flex justify-center items-center gap-3 border-r border-black p-3   ">
            <h3 className="text-gray-800 font-medium text-xl p-1 min-w-[100px] ">
              Angry
            </h3>
            <Image
              src="/images/angry.png"
            
              width={100}
              height={100}
              alt="image"
            />
          </div>
          <div className="col-span-4 w-full flex justify-center items-center gap-3 border-r border-black p-3   ">
            <h3 className="text-gray-800 font-normal text-xl p-1 ">
              When I lost a footboll match.
            </h3>
          </div>

          <div className="col-span-4 w-full flex justify-center items-center gap-3  p-3  ">
            <h3 className="text-gray-800 font-normal text-xl p-1 ">
              My head is down and I am grumpy.{" "}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full  border-t-0 border border-black  ">
          <div className="col-span-4 w-full flex justify-center items-center gap-3 border-r border-black p-3   ">
            <h3 className="text-gray-800 font-medium text-xl p-1 min-w-[100px] ">
              Frustrated
            </h3>
            <Image
              src="/images/Frustrated.png"
             
              width={100}
              height={100}
              alt="image"
            />
          </div>
          <div className="col-span-4 w-full flex justify-center items-center gap-3 border-r border-black p-3   ">
            <h3 className="text-gray-800 font-normal text-xl p-1 ">
              When my friends do not listen to me.
            </h3>
          </div>

          <div className="col-span-4 w-full flex justify-center items-center gap-3  p-3  ">
            <h3 className="text-gray-800 font-normal text-xl p-1 ">
              I start to whine and grind my teeth.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full  border-t-0 border border-black  ">
          <div className="col-span-4 w-full flex justify-center items-center gap-3 border-r border-black p-3   ">
            <h3 className="text-gray-800 font-medium text-xl p-1 min-w-[100px] ">
              Bothered
            </h3>
            <Image
              src="/images/Bothered.png"
            
              width={100}
              height={100}
              alt="image"
            />
          </div>
          <div className="col-span-4 w-full flex justify-center items-center gap-3 border-r border-black p-3   ">
            <h3 className="text-gray-800 font-normal text-xl p-1 ">
              When my friends do not call me to play.{" "}
            </h3>
          </div>

          <div className="col-span-4 w-full flex justify-center items-center gap-3  p-3  ">
            <h3 className="text-gray-800 font-normal text-xl p-1 ">
              When I sigh loudly.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full  border-t-0 border border-black    ">
          <div className="col-span-4 w-full flex justify-center items-center gap-3 border-r border-black p-3   ">
            <h3 className="text-gray-800 font-medium text-xl p-1 min-w-[100px] ">
              Calm
            </h3>
            <Image
              src="/images/Calm.png"
            
              width={100}
              height={100}
              alt="image"
            />
          </div>
          <div className="col-span-4 w-full flex justify-center items-center gap-3 border-r border-black p-3   ">
            <h3 className="text-gray-800 font-normal text-xl p-1 ">
              When I am eating my favourite food.
            </h3>
          </div>

          <div className="col-span-4 w-full flex justify-center items-center gap-3  p-3  ">
            <h3 className="text-gray-800 font-normal text-xl p-1 ">
              I am smiling.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
