// types.ts
export type Task = {
  id: number;
  name: string;
  points: number;
  color: string;
};
export type CompletionMatrix = boolean[][];