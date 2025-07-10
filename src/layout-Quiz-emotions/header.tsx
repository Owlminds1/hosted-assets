import React from 'react'
import { MdOutlinePlayCircle } from "react-icons/md"; //play
import { PiMusicNotesFill } from "react-icons/pi"; //music
import { IoMdResize } from "react-icons/io"; //size
import { IoMdRefresh } from "react-icons/io";



const Header = () => {
  return (
    <div className="flex items-center justify-between mb-2 pr-2">
        <div>
          <MdOutlinePlayCircle size={24} className="cursor-pointer bg-white rounded-[5px]" />
          </div>
       <div className='flex items-center gap-2'>
       <PiMusicNotesFill size={22} className="cursor-pointer  bg-white rounded-[5px]" />
        <IoMdResize size={22} className="cursor-pointer  bg-white rounded-[5px]" />
        <IoMdRefresh size={22} className="cursor-pointer  bg-white rounded-[5px]" />
       </div>
      </div>
  )
}

export default Header
