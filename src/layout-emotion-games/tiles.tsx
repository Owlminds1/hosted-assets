import React, { useEffect, useState } from "react";

type Task = {
  name: string;
  val: string;
};

type MyProps = {
  remainingTiles: Task[];
};

const Tiles = ({ remainingTiles }: MyProps) => {
  const [shuffled, setShuffled] = useState<Task[]>([]);

  useEffect(() => {
    const shuffledTiles = [...remainingTiles].sort(() => Math.random() - 0.5);
    setShuffled(shuffledTiles);
  }, [remainingTiles]); // ⬅️ Re-run shuffle whenever `remainingTiles` updates

  const handleDrag = (e: React.DragEvent, dragItem: Task) => {
    e.dataTransfer.setData("drag", JSON.stringify(dragItem));
  };

  return (
    <div id="tiles-container" className="mb-3">
      {shuffled.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDrag(e, item)}
          className="tile"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Tiles;
