import React, { useContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import ProductList from "./pages/Products/ProductList";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "./context/CartContext";
import AuthTabs from "./pages/Auth/Auth";
import Payment from "./components/Payment/Payment";
import BuyNow from "./components/BuyNow/BuyNow";
import ProductDetails from './components/ProductDetails/ProductDetails';


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

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home productData={productData}/>} />
        <Route path="/cart" element={<Cart productData={productData}/>} />
        <Route path="/productList" element={<ProductList/>} />
        <Route path="/auth" element={<AuthTabs/>} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path='/BuyNow' element={<BuyNow/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />


      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
