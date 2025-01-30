import React from "react";
import MyAudio from "@/components/audio";

const page = () => {
  return (
    // C4-L3-A1
    <div className="min-h-screen bg-slate-50 p-5 flex items-center justify-center">
      <MyAudio src="/audio/C4-L3-A1.mp3" />
    </div>
  );
};

export default page;
