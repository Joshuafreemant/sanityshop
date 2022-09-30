import React from 'react'
import { useStateContext } from '../context/StateContext'

import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import {Cart} from './index'
const Navbar = () => {
  const {showCart, setShowCart, totalQuantities}=useStateContext()
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">
          Qraimo Store
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=>setShowCart((prevState) => !prevState)
}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

    {showCart && <Cart/>}
    </div>
  )
}

export default Navbar