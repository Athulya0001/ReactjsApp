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
    const result = await axios.get(`https://dummyjson.com/products?limit=100&skip=0/${id}`);
    const cartItem = result.data;
    toast.success(`${cartItem.title} added to cart`);
    addToCart(cartItem);
  };

  return (
    <div className="flex justify-center items-center bg-slate-200 rounded-md p-4">
  <div className="flex flex-col justify-between items-center w-[280px] h-[400px] p-4 gap-4">
    <Link to={`/product/${product.id}`}>
      <div className="flex justify-center items-center w-full h-[200px] overflow-hidden rounded-md mb-4">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
    </Link>

    <div className="flex flex-col font-serif w-full text-center">
      <p className="text-xl text-[#000030] font-semibold truncate">{product.title}</p>
      <span className="text-lg text-gray-600 truncate mt-1">{product.description}</span>
    </div>

    <div className="flex flex-col justify-center items-center w-full mt-4">
      <span className="text-xl text-[#000030] font-bold">Price: ${product.price}</span>
      {isInCart ? (
        <Link to="/cart">
          <button className="bg-[#000030] text-white rounded-md px-3 py-1 cursor-pointer">
            Go to Cart
          </button>
        </Link>
      ) : (
        <button
          className="bg-[#000030] text-white rounded-md px-3 py-1 cursor-pointer"
          onClick={() => handleAddToCart(product.id)}
        >
          Add to Cart
        </button>
      )}
    </div>
  </div>
</div>

  );
};

export default Cards;
