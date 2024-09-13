import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo/Design.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt="" className='logo' /></Link>
      <ul className='navbar-list'>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <button className='login'><Link to='/login'>Log in</Link></button>
      </ul>

    </div>
  )
}

export default Navbar