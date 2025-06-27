"use client"
import SideLine from "@//layout-emotion-games/sideLine";
import Slots from "@//layout-emotion-games/slots";
import Tiles from "@/layout-emotion-games/tiles";
import { useState } from "react";
import taskData from "@/layout-emotion-games/task.json";


const LayoutEmotionGames = () => {
    const [started, setStarted] =useState(false);
    const [remainingTiles, setRemainingTiles] = useState(taskData);
  return (
    <div className="bg-sky-200 ">
      <div
        id="game-container"
        className=" flex text-center  pt-3 h-screen md:block md:max-w-[1200px] m-auto md:p-3"
      >
        {
            !started ?  
        <button onClick={() => setStarted(true)} id="startBtn" className="start-btn ">
          Start Game
        </button>:  <div className=" min-h-[120px]">
         <Tiles  remainingTiles={remainingTiles}/>
       </div>
        }
     
        <div id="quadrants-container">
          <SideLine />
          <Slots  remainingTiles={remainingTiles} setRemainingTiles={setRemainingTiles}/>
        </div>
      </div>
    </div>
  );
};

export default LayoutEmotionGames;
