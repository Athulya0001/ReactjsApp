import React from "react";


const Home = (productData) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-[60px]">
      <div></div>
      {/* <div className='flex justify-center items-center'>
        {products.map((product)=>
        <Cards product= {product.product} price={product.price} image={product.image}/>)}
        </div> */}
      <p className="flex text-center">{productData.description}</p>
    </div>
  );
};

export default Home;
