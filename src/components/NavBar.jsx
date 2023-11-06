import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='text-center bg-green-700 p-4'>
      <Link to="home" className=' text-yellow-400 hover:text-orange-500' >Home</Link>
      <Link to="about" className='ml-4  text-yellow-400 hover:text-orange-500'>About</Link>
      <Link to="products" className='ml-4  text-yellow-400 hover:text-orange-500'>Products</Link>
      <Link to="gallery" className='ml-4  text-yellow-400 hover:text-orange-500'>Gallery</Link>
      <Link to="contacts" className='ml-4  text-yellow-400 hover:text-orange-500'>Contacts</Link>
    </div>
  )
}

export default NavBar