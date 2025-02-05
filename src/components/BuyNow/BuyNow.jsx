import React, {useContext} from 'react'
import {CartContext} from '../../context/CartContext'

const BuyNow = () => {
    const { selectedProduct, handleSinglePayment } = useContext(CartContext);
  
    if (!selectedProduct) {
      return <div>No product selected for purchase.</div>;
    }
  
    const shippingCharge = 16;
    const totalPrice = selectedProduct.price * selectedProduct.quantity + shippingCharge;
  
    return (
      <div className="flex justify-center items-center mt-[65px]">
        <div className="flex flex-col">
            <h1>{selectedProduct.title}</h1>
        <div className='flex justify-between gap-4 items-center px-4 my-2'>
            <label htmlFor="">Total Quantity</label>
            <input
            className="border rounded-md border-slate-500 p-1"
            type="text"
            value={selectedProduct.quantity}
          />          </div>
          <div className="flex justify-between gap-4 items-center px-4 my-2">
            <label htmlFor="">Total Price</label>
            <input
              className="border rounded-md border-slate-500 p-1"
              type="text"
              value={`$${totalPrice}`}
              readOnly
            />
          </div>
          <button onClick={handleSinglePayment} className='bg-slate-600 text-white hover:bg-slate-400 rounded-md w-[80%] mt-[50px] p-2'>Proceed to Pay</button>

        </div>
      </div>
    );
  };
  

export default BuyNow
