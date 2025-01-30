import React from "react";
import MyVedio from "@/components/vedio";

const page = () => {
  return (
    // C7-L3-A1
    // in this the vedio is same is this => TRL-L2-A3
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <MyVedio src="/vedios/TRL-L2-A3.mp4" />
    </div>
  );
};

export default page;
