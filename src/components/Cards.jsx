import React from 'react'

const Cards = ({ product, price, image }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col w-[350px] p-5'>
        <div className='flex'>
          <img src={image} alt="image" className='w-full h-[350px]'/>
        </div>
        <div className='flex flex-col bg-yellow-200 font-serif'>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p className='text-xl text-center'> <span className='text-blue-900 hover:text-blue-700 cursor-pointer'>{product} </span>
            <br />
            <span className='text-lg text-gray-700 hover:text-gray-500 cursor-pointer'>Price: {price}</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Cards;
