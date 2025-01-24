import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import ProductList from "./pages/Products/ProductList";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/productList" element={<ProductList/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
