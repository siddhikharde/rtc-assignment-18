import React from 'react'
import './home.css'
import Navbar from './navbar'
import Footer from './footer'
function Home() {
  return (
     <div>
      <Navbar activMenu="/"/>
        <div className="home">
      <div className="content">
        <h1>Welcome to CodeVerse</h1>
        <p>Your gateway to coding knowledge and resources.</p>
      </div>
    </div>
    <Footer/>
     </div>
  )
}

export default Home 
