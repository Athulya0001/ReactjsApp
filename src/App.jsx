import React, { useContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import ProductList from "./pages/Products/ProductList";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { CartContext } from "./context/CartContext";

const App = () => {
  const {cart} = useContext(CartContext);

  const [productData, setProductData] = useState([]);
  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData() {
    try {
      const products = await axios.get('https://dummyjson.com/products');
    setProductData(products.data?.products);
    } catch (error) {
      console.log("Error fetching data", error)
    }
  }
  // console.log(productData)

  return (
    <div className="flex flex-col">
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home productData={productData}/>} />
        <Route path="/cart" element={<Cart productData={productData}/>} />
        <Route path="/productList" element={<ProductList/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
