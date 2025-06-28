import React from 'react'
import { MdDeleteSweep } from "react-icons/md";
type DeleteBtnProps = {
  handleRemove: (index: number) => void;
  index: number;
}
const DeleteBtn = ({handleRemove,index}:DeleteBtnProps) => {
  return (
    <button
    title='delete task'
    onClick={() => handleRemove(index)}
    className=" text-red-600 border border-red-600 text-2xl py-1 px-3 rounded-lg hover:text-white hover:bg-red-600"
  >
    <MdDeleteSweep />
  </button>
  )
}

export default DeleteBtn
