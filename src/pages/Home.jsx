import React, { useContext} from "react";
import Cards from "../components/Cards/Cards";
import { ProductContext } from "../context/ProductContext";

const Home = ({ productData }) => {
  const { selectedCategory, setSelectedCategory } = useContext(ProductContext);
  const { searchQuery } = useContext(ProductContext);

  const categories = ["all", ...new Set(productData.map((product) => product.category))];

  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter((product) => {
        product.category === selectedCategory;
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
      });

  return (
    <div className="flex justify-center items-center my-16 px-5 sm:px-10 lg:px-20">
      <div className="flex flex-wrap justify-center items-center gap-6">
        {filteredProducts.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default Home;
