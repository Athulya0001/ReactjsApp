import React from "react";
import Cards from "../components/Cards/Cards";

const Home = ({ productData }) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-[60px]">
      <div className="grid grid-col-4 gap-3">
        {productData.forEach(productData => {
          <Cards productData={productData} />
        })}
      </div>
    </div>
  );
};

export default Home;
