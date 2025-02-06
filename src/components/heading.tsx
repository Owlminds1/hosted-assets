import React from 'react'


type myProps = {
    headings :string 
}
const Heading = ({headings}:myProps) => {
  return (
    <h2 className="text-lg font-bold">
     {headings} 
    </h2>
  )
}

export default Heading
