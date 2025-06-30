import React from 'react'
import Inputs from './inputs'

const LayoutCharacterEmotionsAndResponses2 = () => {

  
  return (
   <div className='p-5 flex justify-center items-center min-h-screen bg-[#F8FCFA]'>
     <div className='bg-white p-5 w-[600px] shadow-2xl rounded-xl'>
      <h1 className='text-2xl font-bold  text-black py-5 text-center'>Character Emotions and Responses</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JwmnHOzytIU?si=mzaS400iT_MJ8GJt" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
     <Inputs/>
    </div>
   </div>
  )
}

export default LayoutCharacterEmotionsAndResponses2
