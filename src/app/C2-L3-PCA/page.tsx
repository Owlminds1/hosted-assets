

import React from "react";
import MyImage from "@/components/image";
import MyVedio from "@/components/vedio";

const page = () => {
  return (
// C2-L3-PCA
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
<iframe width="560"  height="315" src="https://www.youtube.com/embed/JwmnHOzytIU?si=fDq8J66VJDAPiM16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default page;
