import React, { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const [contact, setContact] = useState({name: '', email: '', mobile: '', message: ''});
  const handleOnChange = (e)=>{
    setContact({...contact, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Message Sent");
  }
  return (
    <div className='Contact'>
      <div className="contactHeading">
        <i class="fas fa-headset"></i>
        <div className="contactHeadingContent">
          Get in Touch
        </div>
      </div>
      <div className="contactMain">
        <div className="contactMain-content">
          <div className="contact-img">
            <div className="contact-img-image"></div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input type="text" id='Name' name='name' value={contact.name} placeholder='Name' onChange={handleOnChange} />
              <label htmlFor="Name"><i class="fa-solid fa-user"></i></label>
              <input type="enail" id='Email' name='email' value={contact.email} placeholder='Email' onChange={handleOnChange} />
              <label htmlFor="Email"><i class="fa-solid fa-envelope"></i></label>
              <input type="text" id='Mobile' name='mobile' value={contact.mobilee} placeholder='Mobile No.' onChange={handleOnChange} />
              <label htmlFor="Mobile"><i class="fa-solid fa-phone"></i></label>
              <textarea name="message" id="Message" value={contact.message} placeholder='Message' onChange={handleOnChange}></textarea>
              <label htmlFor="Message" id='textarea'><i class="fa-solid fa-message"></i></label>
              <button id='contact-form-btn' type="submit">Submit &nbsp;<i class="fa-solid fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
