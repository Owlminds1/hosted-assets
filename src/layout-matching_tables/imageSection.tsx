import Image from "next/image";
import React from "react";

const ImageSection = () => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <Image
          src="/maching-table/images/cloud_1.png"
          width={320}
          height={200}
          alt="cloudeImag"
        />
        <h1 className="absolute mt-5 text-lg font-bold">Instead of saying</h1>
      </div>
      <div className="relative flex items-center justify-center">
        <Image
          src="/maching-table/images/cloud_2.png"
          width={200}
          height={200}
          alt="cloudeImag"
        />
        <h1 className="absolute  text-lg font-bold">Say This...</h1>
      </div>
    </>
  );
};

export default ImageSection;
