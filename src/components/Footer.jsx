import React from 'react'
// import twitter from '../Images/twitter.svg'

// let myFooter = {
//   height: '10vh'
// }
const Footer = () => {
  return (
    <>
        <footer className="flex flex-wrap justify-between align-center border-top bg-cyan-800">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
      </a>
      <span className="mb-3 mb-md-0 text-white">&copy; 2023 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
    </ul>
  </footer>
    </>
  )
}

export default Footer