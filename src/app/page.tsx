import Link from 'next/link'
import React from 'react'
import linkData from "@/lib/linkData.json"

const page = () => {
  return (
    <div className=' bg-[url("/bg/bg2.jpg")] bg-no-repeat bg-cover bg-bottom flex justify-center gap-10 items-center min-h-screen w-full flex-col'>
      <h2 className='text-[50px] text-red-800 font-bold '>Hosted Assets</h2>

      <ul className='flex flex-wrap gap-3 justify-center'>
        {
          linkData.map((item,index)=>(

            <Link className='border px-3 rounded-lg py-1 min-w-[100px] text-center bg-red-600 hover:bg-red-700' key={index} href={`/${item.page}`}>{item.page}</Link>
          ))
        }
        <li>

        </li>
      </ul>
      
    </div>
  )
}

export default page
