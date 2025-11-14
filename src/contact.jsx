import React from 'react'
import './contact.css'
import Footer from './footer'
import Navbar from './navbar'
function Contact() {
  return (
    <div>
      <Navbar activMenu="/contact"/>
      <div className='contact-section'>
        <h1>Contact Us Page</h1>
        <div className='contact-content'>
          <p>If you have any questions, feel free to reach out to us through the following contact details:
          </p>
          <ul>
            <li>Email: contact@ourcompany.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Main St, Anytown, USA</li>
          </ul>
        </div>
         <div className='contact-form'>
        <h2>Send Us a Message</h2>
        <form>
            <label>Name:</label>
            <input type="text" name="name" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Message:</label>
            <textarea name="message" required></textarea>
            <button type="submit">Submit</button>
        </form>
        </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Contact
