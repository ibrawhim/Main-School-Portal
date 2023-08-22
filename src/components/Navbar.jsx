import React, { useState } from 'react';
import '../Navbar.css'; // Create a CSS file for stydivng
import {Link} from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const showDropdown = () => {
    document.querySelector('.dropdown-content').style.display = 'block';
  }

  const hideDropdown = () => {
    document.querySelector('.dropdown-content').style.display = 'none';
  }

  let myPortal = {
    position: 'absolute',
    right: '90px'
  }

  return (
    <>
    <nav className="navbar text-white sm:ms-0 bg-cyan-800">
      <span className='font-bold'>UNIVERSITY</span><button className="toggle-button text-white  block md:hidden" onClick={toggleNavbar}>
        &#9776;
      </button>
      <ul className={`navbar-items ${isOpen ? 'active' : ''} sm:ps-3`}>
        <div className='ms-5 sm:ms-3'><Link to="/">Home</Link></div>
        <div className='ms-5 sm:ms-3'><Link to="/student/portal">Dashboard</Link></div>
        <div className='ms-5 sm:ms-3' onMouseOver={showDropdown}><a href="#">Portal</a>
        </div>
        <div className='ms-5 sm:ms-3'><a href="#">Contact</a></div>
      </ul>
    </nav>
      <div style={myPortal} className="dropdown-content hidden" onMouseOut={hideDropdown}>
            <div><Link to="/student/signup">Student</Link></div>
            <div><Link to="">Admin</Link></div>
      </div>
    </>
    
  );
}

export default Navbar;
