import React from "react";
import Cards from "../components/Cards/Cards";

const Home = ({ productData }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center mt-[60px]">
        {productData.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      
    </div>
  );
};

export default Home;
