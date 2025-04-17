import React from 'react'

interface prop{
    heading:string
}
const Heading = ({heading}:prop) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-red-500 text-4xl font-semibold p-12' >{heading}</h1>
    </div>
  )
}

export default Heading
