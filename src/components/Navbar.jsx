import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-yellow-500 flex justify-center items-center p-4 w-[100vw]'>
      <div className='w-full flex justify-between items-center mx-5'>
      <div className='flex justify-center items-center font-macondo'>
        <h1 className='fontfam text-blue-800 text-4xl hover:text-blue-600'>Munchkins</h1>
      </div>
      <div className='flex justify-evenly items-center gap-2 font-serif font-bold'>
        <a href="#Home" className='text-blue-800 hover:text-blue-500 text-xl'>Home</a>
        <a href="#About" className='text-blue-800 hover:text-blue-500 text-xl'>About</a>
        <a href="#Cart" className='text-blue-800 hover:text-blue-500 text-xl'>Cart</a>
        <a href="#Account" className='text-blue-800 hover:text-blue-500 text-xl'>Account</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar;
