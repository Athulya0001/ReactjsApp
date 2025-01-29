import React, {useContext} from 'react'
// import { products } from '../../utils/data';
import {CartContext} from "../../context/CartContext";
import axios from 'axios';

const Cards = ({productData}) => {

  const {addToCart, cart} = useContext(CartContext)
  const handleAddToCart=async(id)=>{
    const result = await axios.get(`https://dummyjson.com/products/${id}`);
    const cartItem = result.data;
    
    addToCart(cartItem)
  }

  return (
    <div className='flex justify-center items-center  bg-slate-200 rounded-md'>
      <div className='flex flex-col justify-center items-center w-[300px] h-[330px] p-5 gap-y-2 hover:w-[308px] hover:h-[338px]'>
        <div className='flex object-cover w-full h-3/5'>
          <img src={productData?.images[0]} alt="image" className='w-full'/>
        </div>
        <div className='flex flex-col font-serif w-full'>
          <p className='text-xl text-center truncate text-[#000030]'>{productData?.title}</p>
          <span className='truncate text-lg text-blue-[#000030]'>{productData?.description}</span>
        </div>
        <div className="flex gap-x-4">
          <span>Price: {productData?.price}</span>
          <button className='bg-[#000030] text-white rounded-md px-3 py-1 cursor-pointer' onClick={()=>{
            handleAddToCart(productData.id)
          }}>Add to Cart </button>
        </div>
      </div>
    </div>
  )
}

export default Cards;
