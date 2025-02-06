import React from 'react'


type myProps = {
    paraContent :string 
}
const Pera = ({paraContent}:myProps) => {
  return (
    <p className='py-2 '>
     {paraContent} 
    </p>
  )
}

export default Pera
