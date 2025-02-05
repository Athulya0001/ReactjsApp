import React from "react";
import OrderSuccess from "../../assets/OrderSuccess.jpg"
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="flex justify-center items-center mt-[80px]">
      <div className="flex flex-col justify-center items-center">
      <img
        src={OrderSuccess}
        className="w-full h-full"
      />
      <h1>Order successfull</h1>
      <Link to={'/'}>
      <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 cursor-pointer">Continue Shopping</button>
      </Link>
      </div>
    </div>
  );
};

export default Payment;