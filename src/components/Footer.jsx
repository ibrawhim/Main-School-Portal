import React from 'react'
import { useLocation } from 'react-router-dom'
// import twitter from '../Images/twitter.svg'


// let myFooter = {
//   height: '10vh'
// }
const Footer = () => {
  const location = useLocation()
  const hiddenRoutes = ['/congrat'];
  const isHidden = hiddenRoutes.includes(location.pathname);  

  return isHidden ? null :  (
    <>
  {/* <footer classNameName="flex flex-wrap justify-between align-center border-top bg-cyan-800">
    <div classNameName="col-md-4 flex items-center">
      <a href="/" classNameName="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg classNameName="bi" width="30" height="24"></svg>
      </a>
      <span classNameName="mb-3 mb-md-0 text-white">&copy; 2023 Company, Inc</span>
    </div>

    <ul classNameName="nav col-md-4 justify-content-end list-unstyled flex">
      <li classNameName="ms-3"><a classNameName="text-body-secondary" href="#"><svg classNameName="bi" width="24" height="24"></svg></a></li>
      <li classNameName="ms-3"><a classNameName="text-body-secondary" href="#"><svg classNameName="bi" width="24" height="24"></svg></a></li>
      <li classNameName="ms-3"><a classNameName="text-body-secondary" href="#"><svg classNameName="bi" width="24" height="24"></svg></a></li>
    </ul>
  </footer> */}

  
<div className=" bg-cyan-800 container-fluid shadow-2xl py-10">
  <footer className=" grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 border-top">
    <div className="mb-3">
      <a href="/" className="flex items-center mb-3 link-body-emphasis decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
      </a>
      <p className="text-body-secondary">&copy; 2023</p>
    <div className="mb-3"></div>
    </div>

    <div className="mb-3">
      <h5>Section</h5>
      <ul className="nav flex-col">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div className="mb-3">
      <h5>Section</h5>
      <ul className="nav flex-col">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div className="mb-3">
      <h5>Section</h5>
      <ul className="nav flex-col">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer