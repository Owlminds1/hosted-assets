import React from 'react'
interface MyVideoProps {
  src: string;
};
const MyVedio: React.FC<MyVideoProps> = ({src}) => {
  return (
   
     <div className='h-[400px] w-[600px] border shadow-lg'>
     <video src={src} autoPlay   controls  className='w-full h-full object-cover'  />
     </div>
   
  )
}

export default MyVedio
