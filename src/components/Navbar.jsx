import React, { useState } from 'react';
import '../Navbar.css'; // Create a CSS file for stydivng
import {Link, useLocation} from 'react-router-dom'


function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false);
  const hiddenRoutes = ['/portal/','/portal','/portal/dash','/portal/profile','/congrat','/portal/pay','/portal/course','/portal/payhistory','/portal/notice','/portal/help','/portal/chat'];
  const isHidden = hiddenRoutes.includes(location.pathname);


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
    position: 'fixed',
    padding: '10px',
    marginLeft: '-10px',
    marginTop: '20px',
  }

  return isHidden ? null : (
    <>
    <nav className="navbar text-white sm:ms-0 bg-cyan-800 z-10 sticky top-0">
      <span className='font-bold'>UNIVERSITY</span><button className="toggle-button text-white  block md:hidden" onClick={toggleNavbar}>
        &#9776;
      </button>
      <ul className={`navbar-items ${isOpen ? 'active' : ''} sm:ps-3 bg-cyan-800 my-8`}>
        <div className='ms-5 sm:ms-3'><Link to="/">Home</Link></div>
        <div className='ms-5 sm:ms-3'><Link to="/portal/dash">Dashboard</Link></div>
        <ul className='ms-5 flex flex-row'>
        <li onMouseOver={showDropdown}>Portal</li>
        <li style={myPortal} className=" dropdown-content hidden shadow-2xl bg-cyan-800 my-4" onMouseOut={hideDropdown} onMouseOver={showDropdown}>
            <div><Link className='text-white' to="/student/signup">Student</Link></div>
            <div><Link className='text-white' to="">Admin</Link></div>
        </li>
        </ul>
        <div className='ms-5 sm:ms-3'><a href="#">Contact</a></div>
      </ul>
    </nav>
    </>
    
  );
}

export default Navbar;
