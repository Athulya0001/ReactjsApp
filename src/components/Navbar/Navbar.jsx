import React, { useContext } from "react";
// import Logo from '../../assets/logo.jpg'
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const Navbar = ({ productData }) => {
  const { selectedCategory, setSelectedCategory } = useContext(ProductContext);

  const categories = [
    "all",
    ...new Set(productData.map((product) => product.category)),
  ];

  return (
    <div className=" flex justify-center bg-[#000033] mx-auto  items-center p-4 h-[50px] absolute right-0 left-0 top-0">
      <div className="w-full flex justify-between items-center max-w-[90%] mx-auto">
        <Link to={"/"}>
          <div className="flex justify-center items-center font-macondo cursor-pointer">
            <h1 className="fontfam text-yellow-500 text-4xl">Munchkins</h1>
          </div>
        </Link>

        <div className="flex justify-evenly items-center gap-4">
          <div className="flex justify-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-md p-2 text-white"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-[#000033]">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <Link to={"/"}>
            <span className="text-white hover:text-yellow-400 text-lg cursor-poniter">
              Home
            </span>
          </Link>
          <a href="#About" className="text-white hover:text-yellow-400 text-lg">
            About
          </a>
          <Link to={"/cart"}>
            <span className="text-white hover:text-yellow-400 text-lg cursor-poniter">
              Cart
            </span>
          </Link>
          <Link to={"/productList"}>
            <span className="text-white hover:text-yellow-400 text-lg cursor-poniter">
              Products
            </span>
          </Link>
          <a href="/auth" className="text-white hover:text-yellow-400 text-lg">
            Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
