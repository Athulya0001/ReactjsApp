import React from 'react'
import Logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' flex justify-center bg-[#000032]  items-center p-4 h-[50px] absolute right-0 left-0 top-0'>
      <div className='w-full flex justify-between items-center mx-5'>
      <Link to={'/'}>
      <div className='flex justify-center items-center font-macondo'>
        <img src={Logo} alt="logo_image" width={25} />
        <h1 className='fontfam text-white text-4xl hover:text-blue-600'>Munchkins</h1>
      </div>
      </Link>
      <div className='flex justify-evenly items-center gap-2 font-bold'>
      <Link to={'/'}>
        <span className='text-white hover:text-blue-500 text-lg cursor-poniter'>Home</span>
        </Link>
        <a href="#About" className='text-white hover:text-blue-500 text-lg'>About</a>
        <Link to={'/cart'}>
        <span className='text-white hover:text-blue-500 text-lg cursor-poniter'>Cart</span>
        </Link>
        <Link to={'/productList'}>
        <span className='text-white hover:text-blue-500 text-lg cursor-poniter'>Products</span>
        </Link>
        <a href="#Account" className='text-white hover:text-blue-500 text-lg'>Account</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar;
