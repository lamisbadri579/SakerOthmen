import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo/Design.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu when a link is clicked (mobile UX)
  };

  return (
    <nav className='navbar'>
      {/* Logo */}
      <Link to='/'><img src={logo} alt="Logo" className='logo' /></Link>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation List */}
      <ul className={`navbar-list ${menuOpen ? 'show' : ''}`}>
        <li><Link to='/' onClick={handleLinkClick}>Home</Link></li>
        <li><Link to='/products' onClick={handleLinkClick}>Products</Link></li>
        <li><Link to='/services' onClick={handleLinkClick}>Services</Link></li>
        <li><Link to='/contact' onClick={handleLinkClick}>Contact</Link></li>
        <li>
          <Link to='/login' onClick={handleLinkClick}>
            <button className='login'>Log in</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
