import React from 'react'
// import { products } from '../../utils/data';

const Cards = ({productData}) => {
  return (
    <div className='flex justify-center items-center  bg-slate-200 rounded-md'>
      <div className='flex flex-col justify-center items-center w-[300px] h-[330px] p-5 gap-y-2'>
        <div className='flex object-cover w-full h-3/5'>
          <img src={productData.images} alt="image" className='w-full'/>
        </div>
        <div className='flex flex-col font-serif w-full'>
          <p className='text-xl text-center truncate text-[#000030]'>{productData.title}</p>
          <span className='truncate text-lg text-blue-[#000030]'>{productData.description}</span>
        </div>
        <div className="flex gap-x-4">
          <span>Price: {productData.price}</span>
          <button className='bg-[#000030] text-white rounded-md px-3 py-1'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cards;
