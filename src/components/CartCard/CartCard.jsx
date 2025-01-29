import React from "react";

const CartCard = ({ productData }) => {
  return (
    <div className="grid grid-cols-4 p-4 items-center w-full h-[120px] border-b border-gray-300">
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
        ${productData.price.toFixed(2)}
      </div>
    </div>
  );
};

export default CartCard;
