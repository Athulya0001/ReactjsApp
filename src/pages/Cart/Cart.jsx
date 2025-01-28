import React from 'react'
import CartCard from '../../components/CartCard/CartCard'

const Cart = ({ productData }) => {
  return (
    <div className='flex justify-center mt-[60px]'>
      <div className='flex flex-3/5 justify-center p-3'>
        {/* left section */}
        {/* <CartCard productData={productData} key={productData.id}/> */}
        <div className='flex flex-col justify-center items-center'>
          <CartCard productData={productData[0]} />
          <CartCard productData={productData[1]} />
          <CartCard productData={productData[2]} />
          <CartCard productData={productData[3]} />
        </div>
      </div>
      <div className="flex flex-2/5">
        <div className="flex flex-col justify-center">
          {/* right section */}
          <h1>Checkout</h1>
          <div className='flex justify-between items-center px-4'>
            <label htmlFor="">Total Quantity</label>
            <input type="text" />
          </div>
          <div className='flex justify-between items-center px-4'>
            <label htmlFor="">Shipping Charge</label>
            <input type="text" />
          </div>
          <div className='flex justify-between items-center px-4'>
            <label htmlFor="">Total Price</label>
            <input type="text" />
          </div>
          <button className='bg-slate-300 text-white hover:bg-slate-200 w-[80%]'>Proceed to Pay</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
