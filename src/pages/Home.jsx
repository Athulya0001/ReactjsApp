import React from 'react'
import { products } from '../utils/data'
import Cards from '../components/Cards/Cards'

const Home = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-[60px]">
        <div>
        </div>
        <div className='flex justify-center items-center'>
        {products.map((product)=>
        <Cards product= {product.product} price={product.price} image={product.image}/>)}
        </div>
    </div>
  )
}

export default Home
