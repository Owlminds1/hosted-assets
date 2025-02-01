"use client";
interface MyAudioProps{
  src:string
}
const MyAudio :React.FC<MyAudioProps> = ({ src }) => {
  return (
    <div>
    
      <audio  className="invert shadow-md" src={src} controls></audio>
    </div>
  );
};

export default MyAudio;
