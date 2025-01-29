import React from "react";
import MyAudio from "@/components/audio";

const page = () => {
  return (
    // C1-L2-RF2
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <MyAudio src="/audio/C1-L2-RF2.mp3" />
    </div>
  );
};

export default page;
