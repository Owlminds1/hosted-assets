import data from "@/layout-emotion-games/data.json";
import { useState } from "react";
import taskData from "@/layout-emotion-games/task.json";
const Slots = ({
  remainingTiles,
  setRemainingTiles,
}: {
  remainingTiles: typeof taskData;
  setRemainingTiles: React.Dispatch<React.SetStateAction<typeof taskData>>;
}) => {
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>({});
  const handleDrop = (e: React.DragEvent, val: string, index: number) => {
    e.preventDefault();
    const dragData = e.dataTransfer.getData("drag");
    const item = JSON.parse(dragData);
    if (val === item.val) {
      setDropItems((prev) => ({
        ...prev,
        [index]: prev[index] ? [...prev[index], item.name] : [item.name],
      }));
       const updatedTiles = remainingTiles.filter(
    (tile) => tile.name !== item.name
  );
   setRemainingTiles(updatedTiles)
    }
  };
  return (
    <>
      {data.map((item, index) => (
        <div
          className="quadrant flex justify-center items-center flex-col gap-3  "
          id={item.id}
          key={index}
        >
          <h3>{item.title}</h3>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, item.id, index)}
            className="min-h-[120px] bg-[#ffffff52] w-[90%] border border-black border-dashed flex items-center justify-center gap-1 flex-wrap"
          >
            {dropItems[index]?.map((dropItem, dropIndex) => (
              <div key={dropIndex} className="tile">
                {dropItem}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Slots;
