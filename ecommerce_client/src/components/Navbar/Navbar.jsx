import React, { useState } from 'react'
import { ChevronDownIcon , MagnifyingGlassIcon , UserIcon , HeartIcon, ShoppingCartIcon} from '@heroicons/react/24/outline'
import  flag from '../../assets/flag.png'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {


  const [open,setOpen] = useState(false)
  const productslen = useSelector((state) => state.cart.products.length);

  return (
    <div className="navbar">
    <div className="wrapper">
      <div className="left">
        <div className="item">
          <img src={flag} alt="" className='flagimg'/>
          <ChevronDownIcon className='navicons'/>
        </div>
        <div className="item">
          <span>USD</span>
          <ChevronDownIcon className='navicons' />
        </div>
        <div className="item">
          <NavLink className ={({isActive}) => isActive ? ' link linkactive':"link"} to="/products/1">Women</NavLink>
        </div>
        <div className="item">
          <NavLink className ={({isActive}) => isActive ? 'link linkactive':"link"} to="/products/2">Men</NavLink>
        </div>
        <div className="item">
          <NavLink className ={({isActive}) => isActive ? 'link linkactive':"link"} to="/products/3">Children</NavLink>
        </div>
      </div>
      <div className="center">
        <Link className ="link" to="/">Imperiall</Link>
        <span>TM</span>
      </div>
      <div className="right">
        <div className="item">
          <Link className ="link" to="/">Home</Link>
        </div>
        <div className="item">
          <Link className ="link" to='/#'>About</Link>
        </div>
        <div className="item">
          <Link className ="link" to='/#'>Contact</Link>
        </div>
        <div className="item">
          <Link className ="link" to='/#'>Stores</Link>
        </div>
        <div className="icons">
          <MagnifyingGlassIcon className='navicons'/>
          <UserIcon className='navicons'/>
          <HeartIcon className='navicons'/>
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <ShoppingCartIcon className='navicons'/>
            <span>{productslen}</span>
          </div>
        </div>
      </div>
    </div>
    {open && <Cart setOpen={setOpen}/>}
  </div>
  )
}

export default Navbar