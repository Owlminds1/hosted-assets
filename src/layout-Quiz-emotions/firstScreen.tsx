
const FirstScreen = ({ setIsFirstScreen }: {setIsFirstScreen:(val:string)=>void}) => {

  const handleStart = () => {
    setIsFirstScreen("startQuiz");
   
  };

  return (
    <div className="shadow-xl flex item-center justify-center w-[640px] h-[480px] bg-[url(/quiz-emotions/images/start_bg.jpg)] bg-cover rounded-xl">
      <div className="flex justify-center items-center  ">
        <div
          className=" bg-white p-2 text-center flex justify-center items-center flex-col rounded-xl shadow-2xl shadow-black pointer cursor-pointer scale-[1] hover:scale-[1.1] transition ease-in "
          onClick={handleStart}
        >
          <img
            src="https://static.tinytap.com/media/images/player/logo_tinytap.svg"
            alt="start btn"
          />
          <h1 className="text-[#7DC5EE] text-lg font-bold">Tiny Tap</h1>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
