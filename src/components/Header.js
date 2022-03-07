import React from 'react'
import logo from "../images/logo.png"
//import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import Cart from './Cart'
import { Link } from 'react-router-dom'


const Header = () => {
 
 return (
 <nav className="navbar navbar-expand-lg sticky-top">
  <div className="container-fluid">
     <a className="navbar-brand ms-5" href="#"> 
        <img src= {logo} alt ="Logo" />
     </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav me-5">
        <Link className="nav-link active m-2" aria-current="page" to="/home">Home</Link>
        <button type="button" className="btn text-white position-relative" >
        
        <Cart />
        
        </button>
        
        
        <a className="badgeIcon nav-link" href="#">
            <CgProfile />
        </a>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header