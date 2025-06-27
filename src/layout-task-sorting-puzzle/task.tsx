"use client";
import taskData from "@/layout-task-sorting-puzzle/taskData.json";


const Tasks = ({ tasks }: { tasks: typeof taskData }) => {
  const handleDregStart = (
    e: React.DragEvent<HTMLHeadingElement>,
    task: string,
    value: string
  ) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.setData("value", JSON.stringify(value));
  };

  return (
    <div className="bg-gray-400 py-1 px-3 rounded">
      {tasks.map((task, index) => (
        <h2
          key={index}
          draggable="true"
          onDragStart={(e) => handleDregStart(e, task.tasks, task.value)}
          className=" my-2 text-black border border-black p-2 text-center rounded hover:bg-yellow-500 transition-all ease-in"
        >
          {task.tasks}
        </h2>
      ))}
    </div>
  );
};

export default Tasks;

