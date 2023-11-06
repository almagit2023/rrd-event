import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
      <Link to="oldproducts" className='bg-slate-900 m-2 text-white p-3'>Old Products</Link>
      <Link to="newproducts" className='bg-slate-900 m-2 text-white p-3'>New Products</Link>
      <div className='mt-3'>
        <Outlet />
      <h1>Products</h1>
      <ul>
        <li>Tables</li>
        <li>Chairs</li>
        <li>Pencils</li>
        <li>Shoe</li>
      </ul>
      </div>

    </div>
  )
}

export default Products