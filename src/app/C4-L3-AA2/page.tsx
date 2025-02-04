import React from "react";
const page = () => {
  return (
    // C4-L3-AA2
    <div className="min-h-screen bg-slate-50 p-5 flex items-center justify-center">
      <iframe
        width="900"
        height="700"
        src="https://bandcamp.com/EmbeddedPlayer/album=2755962295/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=3509582908/transparent=true/"
        seamless
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default page;
