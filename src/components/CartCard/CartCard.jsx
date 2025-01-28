import React from 'react'

const CartCard = ({productData}) => {
    return (
        <div className="grid grid-col-4 p-2 items-center w-full h-[100px]">
            <div className='flex justify-center items-center'>
                <img src={productData.images} alt="image" />
            </div>
            <div className='flex justify-center items-center'>
                {productData.title}
            </div>
            <div className='flex justify-center items-center'>
                {productData.stock}
            </div>
            <div className='flex justify-center items-center'>
                {productData.price}
            </div>
        </div>
    )
}

export default CartCard
