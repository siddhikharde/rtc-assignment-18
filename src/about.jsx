import React from 'react'
import './about.css'
import Footer from './footer'
import Navbar from './navbar'
function About() {
  return (

    <div>
      <Navbar activMenu="/about"/>
      <div className='about-section'>
        <h1>About Us Page</h1>
        <div className='about-content'>
          <p>we are a company dedicated to providing the best services to our customers.
            Our team is composed of experienced professionals who are passionate about what they do.
            We believe in innovation, quality, and customer satisfaction.
          </p>
        </div>
        <div className='about-cards'>
            <div className='card'>
                <h2>Our Mission</h2>
                <p>To deliver high-quality products that create value for our customers.</p>
            </div>
            <div className='card'>
                <h2>Our Vision</h2>
                <p>To be a global leader in our industry, recognized for our commitment to excellence.</p>
            </div>
            <div className='card'>
                <h2>Our Values</h2>
                <p>Integrity, Innovation, Customer Focus, and Teamwork.</p>
            </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
