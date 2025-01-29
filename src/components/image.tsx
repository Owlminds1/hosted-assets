import Image from 'next/image'
import React from 'react'

const MyImage = ({src}:any) => {
  return (
   
     <div className=' border shadow-lg'>
     <Image src={src} width={600} height={400} alt="iamge" className='w-full h-full object-cover'  />
     </div>
   
  )
}

export default MyImage
