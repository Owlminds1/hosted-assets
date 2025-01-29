"use client";

const MyAudio = ({ src, text }: any) => {
  return (
    <div>
    
      <audio  className="invert shadow-md" src={src} controls></audio>
    </div>
  );
};

export default MyAudio;
