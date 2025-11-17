import React from 'react'
import './navbar.css'
import { Link } from "react-router";
function Navbar({activMenu}) {
  return (
    <div>
        <div className="navbar">
            <div className="logo">CodeVerse</div>
            <div className="links">
                <Link to="/" className={`menu ${activMenu==="/" ? "menu-active" : ""}`}>Home</Link>
                <Link to="/about" className={`menu ${activMenu==="/about" ? "menu-active":""}`}>About</Link>
                <Link to="/contact" className={`menu ${activMenu==="/contact" ?"menu-active":""}`}>Contact</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
