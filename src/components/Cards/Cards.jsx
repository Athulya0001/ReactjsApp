import React, { useContext } from "react";
// import { products } from '../../utils/data';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  const { cart, handleAddToCart } = useContext(CartContext);

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="flex flex-col bg-slate-50 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[300px] h-[420px]">
      <Link to={`/product/${product.id}`} className="relative ">
        <div className="w-full h-[220px] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </Link>

      <div className="flex flex-col p-4 gap-3 h-full">
        <div className="text-center">
          <p className="text-lg text-gray-800 font-semibold truncate">
            {product.title}
          </p>
          <p className="text-sm text-gray-600 truncate mt-1">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg text-[#000030] font-bold">
            ${product.price}
          </span>
          {isInCart ? (
            <Link to="/cart">
              <button className="bg-[#000033] text-white rounded-md px-4 py-2 hover:bg-[#5858a8d3] transition-colors">
                Go to Cart
              </button>
            </Link>
          ) : (
            <button
              onClick={() => handleAddToCart(product.id)}
              className="bg-[#000033] text-white rounded-md px-4 py-2 hover:bg-[#5858a8d3] transition-colors"
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
