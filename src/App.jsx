import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import ProductList from "./pages/Products/ProductList";
import axios from "axios";

const App = () => {

  const [productData, setProductData] = useState([]);
  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData() {
    const products = await axios.get('https://dummyjson.com/products');
    setProductData(products.data.products);
  }
  // console.log(productData)

  return (
    <div className="flex flex-col bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home productData={productData}/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/productList" element={<ProductList productData={productData}/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
