type myProps = {
  tasksList: {
    dropTask: string;
    matchinId: number;
  }[];
};

type taskItem = {
  dropTask: string;
};
const PickTheAnswer = ({ tasksList }: myProps) => {
  const handleDrag = (e: React.DragEvent, item: taskItem) => {
    e.dataTransfer.setData("task", JSON.stringify(item));
  };

  return (
    <div className="w-full flex justify-center items-center  rounded-lg border-2 bg-sky-100">
      <div className=" grid  grid-cols-12  items-center justify-center w-[600px] gap-5 p-5 ">
        {tasksList.map((item, index) =>
          index === 0 ? (
            ""
          ) : (
            <div
              key={index}
              className=" col-span-4 bg-orange-400 min-h-[40px] rounded-xl font-bold text-center  w-[180px] text-sm p-1  "
              draggable
              onDragStart={(e) => {
                handleDrag(e, item);
              }}
            >
              {item.dropTask}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PickTheAnswer;
