import React from 'react'

const Card = ({titulo,img,precio}) => {
  return (
    <div className='flex flex-col items-center w-[150px] bg-gray-400 rounded-2xl' >
      <img className='w-[200px]' src={img} alt="" />
      <h2 className='font-extrabold' >{titulo}</h2>
      <h3>${precio}</h3>
    </div>
  )
}

export default Card
