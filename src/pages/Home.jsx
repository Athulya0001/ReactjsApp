import React, {useState, useContext} from "react";
import Cards from "../components/Cards/Cards";

const Home = ({ productData }) => {

  // Extract unique categories
  const categories = ["all", ...new Set(productData.map((product) => product.category))];

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  return (
    <div className='my-[60px]'>
      {/* Dropdown to select category */}
      <div className="flex justify-center mt-5">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-md p-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Render filtered products */}
      <div className="flex flex-wrap gap-10 justify-center items-center mt-[20px]">
        {filteredProducts.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
