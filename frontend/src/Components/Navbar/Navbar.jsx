import React, { useState } from 'react'
import "./Navbar.css"
import Logo  from "../Assets/logo.png"
import cardIcon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

function Navbar() {
    const [menu ,setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={Logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-manu'>
        <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{textDecoration:"none"}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("menu")}}><Link to="/mens" style={{textDecoration:"none"}}>Men</Link>{menu==="menu"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link to="/womens" style={{textDecoration:"none"}}>Women</Link> {menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to="/kids" style={{textDecoration:"none"}}>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-card'>
       <Link to="/login" style={{textDecoration:"none"}}><button>Login</button></Link> 
        <Link to="/cart" style={{textDecoration:"none"}}><img src={cardIcon} alt="" /></Link>
        <div className="nav-card-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
