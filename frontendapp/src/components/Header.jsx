import React from 'react'
import '../App.css'
// import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='head'>
      
    <ul>
      <li><a href='#'>Home</a></li>
      <li><a href="#">About</a></li>
    </ul>

       {/* <ul>
        <li className='active' > <Link to="/">Home</Link> </li>
        
        <li><Link to={"/about"}>About-Us</Link> </li>
        <li><Link to={"/contact/"}>Contact-Us</Link> </li>
        <li><Link to={"/enquiry"}>Enquiry</Link> </li>
        <li><Link to={"/signup/"}>Signup/Login</Link></li>

         </ul> */}
      
    </div>
  )
}
