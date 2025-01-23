import React from 'react'
import Cards from '../components/cards'
import { products } from '../utils/data'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
        <div>
        <Navbar/>
        </div>
        <div className='flex justify-center items-center'>
        {products.map((product)=>
        <Cards product= {product.product} price={product.price} image={product.image}/>)}
        </div>
    </div>
  )
}

export default Home
