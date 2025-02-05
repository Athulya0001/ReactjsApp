import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        toast.error("Failed to fetch product details.");
      }
    };
    fetchProduct();
  }, [id]);


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center mt-[70px] px-4 mb-[100px]">
      <div className="w-full max-w-3xl flex flex-col items-center mb-5">
        <div className="w-full h-[200px] overflow-hidden rounded-md">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-4 mt-4">
  {product.images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Product ${index}`}
      className="w-20 h-20 object-cover rounded-md border border-gray-300"
    />
  ))}
</div>

      </div>

      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-4">{product.title}</h1>
        <p className="text-lg text-gray-700 text-center">{product.description}</p>
        <p className="text-xl font-semibold text-green-600 text-center mt-2">
          Price: ${product.price}
        </p>
        <p className="text-center text-gray-500">Stock: {product.stock}</p>
        <p className="text-center text-gray-500">
          Category: {product.category}
        </p>
      </div>
      <Link to="/">
          <button className="bg-[#000030] text-white rounded-md px-3 py-1 cursor-pointer">
            Go Back 
          </button>
        </Link>
    </div>
  );
};

export default ProductDetails;
