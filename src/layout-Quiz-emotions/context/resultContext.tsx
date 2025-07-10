import React, { createContext, useState } from "react";

export type ResultItem = {
  qustionId: number;
  value: string;
  isCorrect: boolean;
};

type ResultContextType = {
  resultArray: ResultItem[];
  setResultArray: React.Dispatch<React.SetStateAction<ResultItem[]>>;
};

export const ResultContext = createContext<ResultContextType | undefined>(undefined);

const ResultContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [resultArray, setResultArray] = useState<ResultItem[]>([]);

  return (
    <ResultContext.Provider value={{ resultArray, setResultArray }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
