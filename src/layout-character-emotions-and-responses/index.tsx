import React from 'react'
import Image from 'next/image'
import Inputs from './inputs'

const LayoutCharacterEmotionsAndResponses = () => {

  
  return (
   <div className='p-5 flex justify-center items-center min-h-screen bg-[#F8FCFA]'>
     <div className='bg-white p-5 w-[600px] shadow-2xl rounded-xl'>
      <h1 className='text-2xl text-black py-2 text-center'>Character Emotions and Responses</h1>
      <Image src="/carector-response/kid_image.jpg" width={600} height={600} alt='kid image'/>
     <Inputs/>
    </div>
   </div>
  )
}

export default LayoutCharacterEmotionsAndResponses
