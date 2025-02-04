import React from "react";

const CartCard = ({ productData }) => {
  console.log(productData, "products after adding to cart")
  return (
    <div className="grid grid-cols-6 p-4 items-center w-full h-[120px] border-b border-gray-300">
      <div className="flex justify-center items-center">
        <img
          src={productData.images}
          alt="product image"
          className="w-16 h-16 object-cover rounded-md"
        />
      </div>
      <div className="flex justify-center items-center text-lg font-medium">
        {productData.title}
      </div>
      <div className="flex justify-center items-center text-sm text-gray-600">
        {productData.stock}
      </div>
      <div className="flex justify-center items-center text-xl font-bold text-green-600">
        ${productData.price}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#920105] hover:bg-[#820004] text-white rounded-md px-3 py-1 cursor-pointer">Remove</button>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#206617] hover:bg-[#820004] text-white rounded-md px-3 py-1 cursor-pointer">Buy Now</button>
      </div>
    </div>
  );
};

export default CartCard;
