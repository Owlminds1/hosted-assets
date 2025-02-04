import React from "react";
const page = () => {
  return (
    // C2-L3-PCA
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <iframe
        width="900"
        height="700"
        src="https://www.youtube.com/embed/JwmnHOzytIU?si=fDq8J66VJDAPiM16"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default page;
