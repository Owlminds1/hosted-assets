import React from 'react'

const MyVedio = ({src}:any) => {
  return (
   
     <div className='h-[400px] w-[600px] border shadow-lg'>
     <video src={src} autoPlay   controls  className='w-full h-full object-cover'  />
     </div>
   
  )
}

export default MyVedio
