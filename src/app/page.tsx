import Link from 'next/link'
import React from 'react'
import linkData from "@/lib/linkData.json"

const page = () => {
  return (
    <div className="min-h-screen h-screen overflow-y-scroll flex flex-col gap-4 items-center justify-start  bg-[url(/bg/bg2.jpg)] bg-cover bg-bottom p-5 w-full">
      <h2 className='text-[50px] text-red-800 font-bold '>Hosted Assets</h2>
      <div className="grid grid-cols-12 gap-4 min-w-[500px] place-items-center text-center">
        <div className="col-span-3 min-w-[100px] font-bold border border-black bg-purple-500 py-1 px-4 rounded-lg">
          Sr. no.
        </div>
        <div className="col-span-6 min-w-[500px] font-bold border border-black bg-purple-500 py-1 px-4 rounded-lg">
          Activity Name
        </div>
        <div className="col-span-3 w-full min-w-[300px] border font-bold  border-black bg-purple-500 py-1 px-4 rounded-lg">
          Activity Link
        </div>
      </div>

      {
        linkData.map((item,index)=>(
          <div key={index} className="grid grid-cols-12 gap-4 min-w-[500px] place-items-center text-center">
          <div className="col-span-3 min-w-[100px] border border-black bg-red-400 py-1 px-4 text-black rounded-lg">
            {index + 1}
          </div>
          <div  className="col-span-6 min-w-[500px] border border-black bg-red-400 py-1 px-4 rounded-lg">
            {`Activity ${index + 1}`}
          </div>
          <div className="col-span-3  min-w-[300px] w-full border text-black border-black bg-red-400 py-1 px-4 rounded-lg">
          <Link  href={`/${item.page}`}>{item.page}</Link>
          </div>
        </div>
        ))
      }
      
    </div>
  )
}

export default page
