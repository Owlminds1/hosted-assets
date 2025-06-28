import BlaloonForm from "./blaloonForm";

const LayoutAnxiousThoughts = () => {
  return (
    <div className="min-h-screen overflow-y-hidden pt-5 bg-[url(/anxious-thoughts/images/bg_2.jpg)] flex justify-between items-center  w-full bg-cover bg-center flex-col">
      <div className=" z-10 absolute w-full h-full  bg-[#00000043] top-0"></div>
      <div className="z-20 text-white  text-center  px-2">
        <h1 className="text-3xl">Learning to Let Go!</h1>
        <p>
          Think about what upsets you. Recall times when you felt hurt or
          expected another reaction. Write these thoughts on the
          balloons and let it go!
        </p>
      </div>

      <BlaloonForm />
    </div>
  );
};

export default LayoutAnxiousThoughts;
