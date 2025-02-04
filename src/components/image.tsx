import Image from 'next/image'
import React from 'react'
interface MyImageProps{
src:string
}
const MyImage :React.FC<MyImageProps> = ({src}) => {
  return (
   
     <div className=' border shadow-lg w-[900px] h-[650px] relative '>
     <Image src={src} fill alt="iamge" className=' w-full h-full object-fill '  />
     </div>
   
  )
}

export default MyImage
