import Image from 'next/image'
import React from 'react'
interface MyImageProps{
src:string
}
const MyImage :React.FC<MyImageProps> = ({src}) => {
  return (
   
     <div className=' border shadow-lg'>
     <Image src={src} width={900} height={800} alt="iamge" className='w-full h-full object-cover'  />
     </div>
   
  )
}

export default MyImage
