import React from 'react'
import './navbar.css'
function Navbar({activMenu}) {
  return (
    <div>
        <div className="navbar">
            <div className="logo">CodeVerse</div>
            <div className="links">
                <a href="/" className={`menu ${activMenu==="/" ? "menu-active" : ""}`}>Home</a>
                <a href="/about" className={`menu ${activMenu==="/about" ? "menu-active":""}`}>About</a>
                <a href="/contact" className={`menu ${activMenu==="/contact" ?"menu-active":""}`}>Contact</a>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
