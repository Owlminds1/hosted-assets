"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [playerSymbol, setplayerSymbol] = useState<string | null>(null);
  const [computerSymbol, setComputerSymbol] = useState("O");
  const [winnerIndex, setWinnerIndex] = useState<number[] | null>(null);
  const [drwo, setDrwo] = useState(false);
  const [click, setClick] = useState(true);

  const handleCheckSymbol = (symbol: string | null) => {
    setplayerSymbol(symbol);
    setComputerSymbol(symbol == "X" ? "O" : "X");
    setIsX(symbol === "X");
    setClick(false)
    
  };

  //  User ki move

  const handleUserMove = (index: number) => {
    if (board[index] || winner || !playerSymbol || drwo) return;

    const newBorad = [...board];
    newBorad[index] = playerSymbol;
    setBoard(newBorad);
    setIsX(false);
  };


  const findBlockingMove = (board: (string | null)[], symbol: string) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];
  
    for (const [a, b, c] of winningCombinations) {
      const values = [board[a], board[b], board[c]];
      const emptyIndex = values.indexOf(null);
      
      if (emptyIndex !== -1 && values.filter(v => v === symbol).length === 2) {
        return [a, b, c][emptyIndex]; // Block karne ke liye empty index return karega
      }
    }
  
    return null; // Agar koi blocking move nahi mili toh null return karega
  };
  
  //  Computer ki move
  const computerMove = (board: (string | null)[]) => {
    const newBoard = [...board];
  
    // Pehle check karo ki user jeetne wala hai ya nahi
    const blockingMove = findBlockingMove(newBoard, playerSymbol!);
    
    if (blockingMove !== null) {
      newBoard[blockingMove] = computerSymbol; // Block the user's winning move
    } else {
      // Agar user jeet nahi raha toh random move kare
      const emptyCells = newBoard.map((val, idx) => (val === null ? idx : null)).filter(idx => idx !== null) as number[];
      if (emptyCells.length > 0) {
        const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        newBoard[randomIndex] = computerSymbol;
      }
    }
  
    return newBoard;
  };
  

  const checkWinner = (board: (string | null)[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] == board[b] && board[a] == board[c]) {
        setWinnerIndex([a, b, c]);
        return board[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      setWinner(winner);
    } else if (board.every((cell) => cell !== null)) {
      setDrwo(true);
    } else if (!isX) {
      setTimeout(() => {
        setBoard((prevBord: (string | null)[]) => {
          const newBoard = computerMove(prevBord);
          setIsX(true);
          return newBoard ?? prevBord; // Agar undefined ho toh prevBoard hi return karo
        });
      }, 600);
    }
  }, [board]);

  return (
    <div className="bg-[#C6E7FF] min-h-screen flex flex-col justify-center items-center">
      <div className="flex gap-3">
        <span
          className={` ${!click ? "pointer-events-none":""} text-2xl font-bold mb-4 text-black bg-orange-400 rounded-lg px-5 py-2 cursor-pointer`}
          onClick={() => handleCheckSymbol("X")}
        >
          X
        </span>
        <span
          className={` ${!click ? "pointer-events-none":""} text-2xl font-bold mb-4 text-black bg-orange-400 rounded-lg px-5 py-2 cursor-pointer`}
          onClick={() => handleCheckSymbol("O")}
        >
       
          O
        </span>
      </div>

      {drwo ? (
        <h1 className="py-3 text-lg text-red-500 ">
          {drwo ? "match is draw" : ""}
        </h1>
      ) : null}
      <div className="grid grid-cols-3 gap-3">
        {board.map((value, index) => (
          <div
            key={index}
            onClick={() => handleUserMove(index)}
            className={`w-[100px] h-[100px] ${
              winnerIndex?.includes(index)
                ? "bg-green-600 shadow-black shadow"
                : "bg-red-300"
            }  flex justify-center items-center text-2xl font-bold text-black border border-black cursor-pointer`}
          >
            {value}
          </div>
        ))}
      </div>
      {
        <button
          onClick={() => {
            setBoard(Array(9).fill(null));
            setWinner(null);
            setIsX(true);
            setWinnerIndex(null);
            setClick(true)
            setDrwo(false)
          }}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Restart
        </button>
      }
    </div>
  );
};

export default Page;
