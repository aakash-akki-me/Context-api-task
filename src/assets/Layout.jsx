import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


function Layout() {
  return (
    <>
    <nav className='flex justify-between items-center py-4 px-28 text-xl'>
      <div className='text-green-400 font-bold text-2xl'>Shop <span className='text-purple-800'>now!</span></div>
      <ul className='flex list-none gap-5'>
        <li><Link to='/' className='cursor-pointer font-semibold hover:text-[#91c9c9]'>Home</Link></li>
        <li><Link to='checkout' className='cursor-pointer font-semibold hover:text-[#73c2c2]'>Checkout</Link></li>
        <li><Link  className='cursor-pointer font-semibold hover:text-[#73c2c2]'>About</Link></li>
        <li><Link  className='cursor-pointer font-semibold hover:text-[#73c2c2]'>Contact Us</Link></li>
      </ul>
    </nav>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout