"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Task = {
  id: number;
  name: string;
  points: number;
  color: string;
};

type TodoContextType = {
  goal: string;
  setGoal: (goal: string) => void;
  checkDay: number;
 setCheckDay: React.Dispatch<React.SetStateAction<number>>;

  masterTasks: Task[];
  setMasterTasks: (tasks: Task[]) => void;
  slots: (Task | null)[];
  setSlots: (slots: (Task | null)[]) => void;
  completionMatrix: boolean[][];
  setCompletionMatrix: (matrix: boolean[][]) => void;
  hasRewardShown: boolean;
  setHasRewardShown: (val: boolean) => void;
};

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [goal, setGoal] = useState<string>("");
  const [checkDay, setCheckDay] = useState<number>(0);
   const [masterTasks, setMasterTasks] = useState([
    { id: 1, name: "Eat a fruit", points: 1, color: "#CB9DF0" },
    { id: 2, name: "Eat healthy snacks", points: 1, color: "#CB9DF0" },
    { id: 3, name: "Eat high protein diet", points: 1, color: "#CB9DF0" },
    { id: 4, name: "Watch matches of team to learn tactics", points: 1, color: "#CB9DF0" },
    { id: 5, name: "Sleep for 9-10 hours", points: 1, color: "#CB9DF0" },
    { id: 6, name: "Running", points: 1, color: "#CB9DF0" },
    { id: 7, name: "Deep Breathing to focus", points: 1, color: "#CB9DF0" },
    { id: 8, name: "Exercise for 30 mins", points: 1, color: "#CB9DF0" },
    { id: 9, name: "Practice sports for 2 hours", points: 1, color: "#CB9DF0" },
  ]);
  const [slots, setSlots] = useState<(Task | null)[]>(Array(7).fill(null));
  const [completionMatrix, setCompletionMatrix] = useState<boolean[][]>(
    Array(7).fill(null).map(() => Array(7).fill(false))
  );
  const [hasRewardShown, setHasRewardShown] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem("hasRewardShown");
    if (stored === "true") setHasRewardShown(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("hasRewardShown", hasRewardShown ? "true" : "false");
  }, [hasRewardShown]);

  return (
    <TodoContext.Provider
      value={{
        goal,
        setGoal,
        checkDay,
        setCheckDay,
        masterTasks,
        setMasterTasks,
        slots,
        setSlots,
        completionMatrix,
        setCompletionMatrix,
        hasRewardShown,
        setHasRewardShown,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
