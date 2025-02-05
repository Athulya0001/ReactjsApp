import React, { useContext } from "react";
// import { products } from '../../utils/data';
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  const { addToCart, cart } = useContext(CartContext);

  const isInCart = cart.some((item) => item.id === product.id);
  const handleAddToCart = async (id) => {
    const result = await axios.get(`https://dummyjson.com/products/${id}`);
    const cartItem = result.data;
    console.log(cartItem, "cart items");
    toast.success("Item added to cart");
    addToCart(cartItem);
  };

  return (
    <div className="flex justify-center items-center  bg-slate-200 rounded-md">
      <div className="flex flex-col justify-center items-center w-[300px] h-[330px] p-5 gap-y-2">
        <div className="flex object-cover w-full h-3/5">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full hover:"
          />
        </div>
        <div className="flex flex-col font-serif w-full">
          <p className="text-xl text-center truncate text-[#000030]">
            {product.title}
          </p>
          <span className="truncate text-lg text-blue-[#000030]">
            {product.description}
          </span>
        </div>
        <div className="flex gap-x-4">
          <span>Price: {product.price}</span>
          {isInCart ? (
            <Link to={'/cart'}>
              <button className="bg-[#000030] text-white rounded-md px-3 py-1 cursor-pointer">
                Go to Cart{" "}
              </button>
            </Link>
          ) : (
            <button
              className="bg-[#000030] text-white rounded-md px-3 py-1 cursor-pointer"
              onClick={() => {
                handleAddToCart(product.id);
              }}
            >
              Add to Cart{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
