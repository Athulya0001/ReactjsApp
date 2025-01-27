import React from 'react'
import Logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' flex justify-center bg-slate-200  items-center p-4 h-[50px] absolute right-0 left-0 top-0'>
      <div className='w-full flex justify-between items-center mx-5'>
      <Link to={'/'}>
      <div className='flex justify-center items-center font-macondo'>
        <img src={Logo} alt="logo_image" width={25} />
        <h1 className='fontfam text-blue-800 text-4xl hover:text-blue-600'>Munchkins</h1>
      </div>
      </Link>
      <div className='flex justify-evenly items-center gap-2 font-serif font-bold'>
      <Link to={'/'}>
        <span className='text-blue-800 hover:text-blue-500 text-xl cursor-poniter'>Home</span>
        </Link>
        <a href="#About" className='text-blue-800 hover:text-blue-500 text-xl'>About</a>
        <Link to={'/cart'}>
        <span className='text-blue-800 hover:text-blue-500 text-xl cursor-poniter'>Cart</span>
        </Link>
        <Link to={'/productList'}>
        <span className='text-blue-800 hover:text-blue-500 text-xl cursor-poniter'>Products</span>
        </Link>
        <a href="#Account" className='text-blue-800 hover:text-blue-500 text-xl'>Account</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar;
