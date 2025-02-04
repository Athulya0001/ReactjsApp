import React,{useContext} from "react";
import {CartContext} from "../../context/CartContext";


const CartCard = ({ productData }) => {
  const {removeFromCart, incrementQuantity, decrementQuantity} = useContext(CartContext);
  console.log(productData, "products after adding to cart")
  return (
    <div className="grid grid-cols-6 p-4 items-center w-full h-[120px] border-b border-gray-300">
      <div className="flex justify-center items-center">
        <img
          src={productData.images[0]}
          alt="product image"
          className="w-16 h-16 object-cover rounded-md"
        />
      </div>
      <div className="flex justify-center items-center text-lg font-medium">
        {productData.title}
      </div>
      <div className="flex justify-center items-center space-x-2">
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-black rounded-md px-2 py-1"
                    onClick={() => decrementQuantity(productData.id)}
                >
                    -
                </button>
                <span className="text-lg font-medium">{productData.quantity}</span>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-black rounded-md px-2 py-1"
                    onClick={() => incrementQuantity(productData.id)}
                >
                    +
                </button>
            </div>
      <div className="flex justify-center items-center text-xl font-bold text-green-600">
        ${productData.price}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#920105] hover:bg-[#820004] text-white rounded-md px-3 py-1 cursor-pointer" onClick={() => removeFromCart(productData.id)} > Remove</button>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#206617] hover:bg-[#206630] text-white rounded-md px-3 py-1 cursor-pointer">Buy Now</button>
      </div>
    </div>
  );
};

export default CartCard;
