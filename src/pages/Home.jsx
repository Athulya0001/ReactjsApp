import React, { useContext} from "react";
import Cards from "../components/Cards/Cards";
import { ProductContext } from "../context/ProductContext";

const Home = ({ productData }) => {
  const {selectedCategory}=useContext(ProductContext);


  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  return (
    <div className='my-[60px]'>
      {/* Dropdown to select category */}
      

      {/* Render filtered products */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-[100vw] mx-20 gap-10 items-center mt-[20px]">
        {filteredProducts.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
