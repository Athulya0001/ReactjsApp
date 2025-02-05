import React from "react";
import OrderSuccess from "../../assets/OrderSuccess.jpg"

const Payment = () => {
  return (
    <div className="flex justify-center items-center mt-[80px]">
      <div className="flex flex-col justify-center items-center">
      <img
        src={OrderSuccess}
        className="w-full h-full"
      />
      <h1>Order successfull</h1>
      </div>
    </div>
  );
};

export default Payment;