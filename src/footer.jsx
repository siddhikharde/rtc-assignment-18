import React from 'react'
import "./footer.css"
import { Link } from 'react-router'
function Footer() {
  return (
    <div className='footer-container'>
       <div className='footer'>
        <div className='logo'>
          <h2>CodeVerse</h2>
        </div>
      <div className='quick-links'>
         <Link to="/" className="color:">Home</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/about">About</Link>
      </div>

      </div>
      <div className='copyRights'>
       © 2025 CodeVerse. All rights reserved.
      </div>
    </div>
  )
}

export default Footer

