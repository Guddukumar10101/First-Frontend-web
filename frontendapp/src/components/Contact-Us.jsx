import React from 'react'
import Header from './Header'

export default function Contact() {
  return (
    <div>

        <Header/>
        <div className="contact-us">
  <h1>Contact Us</h1>
  <form>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <label>
      Email:
      <input type="email" name="email" />
    </label>
    <label>
      Message:
      <textarea name="message" />
    </label>
    <button type="submit">Send</button>
  </form>
</div>  
    </div>
  )
}
