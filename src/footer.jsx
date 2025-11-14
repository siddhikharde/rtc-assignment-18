import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div className='footer-container'>
       <div className='footer'>
        <div className='logo'>
          <h2>CodeVerse</h2>
        </div>
      <ul className='quick-links'>
         <li>Home</li>
         <li>Contact</li>
         <li>About </li>
      </ul>

      </div>
      <div className='copyRights'>
       © 2025 CodeVerse. All rights reserved.
      </div>
    </div>
  )
}

export default Footer

