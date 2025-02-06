import React, {useContext, useEffect} from 'react'
import CartCard from '../../components/CartCard/CartCard'
import {CartContext} from '../../context/CartContext'
// import { Link } from "react-router-dom";


const Cart = () => {
  const {cart, handlePayment} = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCharge = 16;


  return (
    // left section
    <div className='flex justify-center mt-[60px]'>
          <div className="bg-[#fee] flex w-3/5  mt-[60px] text-center min-h-screen">
          <div className="flex flex-col items-center ">
          {cart && cart.length !== 0 ? (
          cart.map((item, index) => <CartCard key={index} productData={item} />)
        ) : (
          <h1>Your cart is empty Purchase some products <a href="/"> click here</a></h1>
        )}
        </div>
      </div>
      <div className="flex w-2/5 justify-center">
        <div className="flex flex-col">
          {/* right section */}
          <h1 className='text-center text-slate-600 text-3xl p-3 font-bold'>Checkout</h1>
          <div className='flex justify-between gap-4 items-center px-4 my-2'>
            <label htmlFor="">Total Quantity</label>
            <input
            className="border rounded-md border-slate-500 p-1"
            type="text"
            value={totalQuantity}
          />          </div>
          <div className='flex justify-between gap-4 items-center px-4 my-2'>
            <label htmlFor="">Shipping Charge</label>
            <input
            className="border rounded-md border-slate-500 p-1"
            type="text"
            value={`$${shippingCharge}`}
          />
          </div>
          <div className='flex justify-between gap-4 items-center px-4 my-2'>
            <label htmlFor="">Total Price</label>
            <input
            className="border rounded-md border-slate-500 p-1"
            type="text"
            value={`$${(totalPrice + shippingCharge).toFixed(2)}`}
          />          </div>
          <div className='flex justify-center items-center'>
            {/* <Link to={"/payment"}> */}
            <button onClick={handlePayment} className='bg-slate-600 text-white hover:bg-slate-400 rounded-md w-[80%] mt-[50px] p-2'>Proceed to Pay</button>

            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
