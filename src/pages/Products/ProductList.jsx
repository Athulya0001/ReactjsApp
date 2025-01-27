import React from 'react'
import Cards from '../../components/Cards/Cards'

const ProductList = ({productData}) => {
  return (
    <div className='mt-[60px]'>
      <Cards products={productData}/>
    </div>
  )
}

export default ProductList
