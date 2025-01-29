import React from 'react'
import CartCard from '../../components/CartCard/CartCard'

const Cart = ({ productData }) => {
  return (
    <div className='flex justify-center mt-[60px]'>
      <div className='flex flex-3/5 justify-center p-3'>
        {/* left section */}
        {/* <CartCard productData={productData} key={productData.id}/> */}
        <div className='flex flex-col justify-center items-center'>
          {
            <CartCard/>
          }
        </div>
      </div>
      <div className="flex flex-2/5 justify-center">
        <div className="flex flex-col">
          {/* right section */}
          <h1 className='text-center text-slate-600 text-3xl p-3 font-bold'>Checkout</h1>
          <div className='flex justify-between gap-4 items-center px-4 my-2'>
            <label htmlFor="">Total Quantity</label>
            <input className='border rounded-md border-slate-500 p-1' type="text"  />
          </div>
          <div className='flex justify-between gap-4 items-center px-4 my-2'>
            <label htmlFor="">Shipping Charge</label>
            <input className='border rounded-md border-slate-500 p-1' type="text" />
          </div>
          <div className='flex justify-between gap-4 items-center px-4 my-2'>
            <label htmlFor="">Total Price</label>
            <input className='border rounded-md border-slate-500 p-1' type="text" />
          </div>
          <div className='flex justify-center items-center'>
          <button className='bg-slate-600 text-white hover:bg-slate-400 rounded-md w-[80%] mt-[50px] p-2'>Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
