import React, { useEffect, useState } from 'react'
import '../Side.css'
import {Link, Route, Routes} from 'react-router-dom'
import nav from '../Images/nav.png'
import close from '../Images/close.svg'
import Profile from './Profile'
import Main from './Main'
import Pay from './Pay'
import PayHistory from './PayHistory'
import Course from './Course'
import Notice from './Notice'
import Help from './Help'





const StudentPortal = () => {
const [newImage, setnewImage] = useState("")

    const hideSideBar = () => {
        document.querySelector('.sidebar').style.display = 'block';
        document.querySelector('.sidebar').style.zIndex = '2';
    }
    const hideSide = () => {
      document.querySelector('.sidebar').style.display = 'none';
    }
    const dissapear = () => {
      document.querySelector('.sidebar').style.display = 'block';
    }
    let sideBar = document.querySelector('.sidebar');

    //  setnewImage(JSON.parse(localStorage.getItem('myimage')))
    
   
  return (
    <>
            <div className='bg-cyan-800 py-3 flex justify-between pe-3'>
            <button className='block md:hidden lg:hidden rounded  text-white' onClick={hideSideBar}><img className='text-white' src={nav} alt="" width={25}/></button>
                <p className='text-black mx-5 mt-5'>Name</p>
                <img src={newImage} width={50} className=' rounded-full' alt="" />
            </div>
        <div className="app">
        <aside id='sideBar' className="sidebar bg-cyan-800 border border-cyan-500 shadow-2xl sm:w-auto  hidden sm:block">
          <span className='flex justify-between'><h3>menu</h3><button className='block md:hidden lg:hidden' onClick={hideSide}><img src={close} alt="" width={30}/></button></span>
          <nav className="menu">
            <Link to="/" className="item active">Home</Link>
            <Link onClick={dissapear} to="/portal/dash" className="item">Dashboard</Link>
            <Link onClick={dissapear} to="/portal/profile" className="item">Profile</Link>
            <Link onClick={dissapear} to="/portal/pay" className="item">Pay Tuition</Link>
            <Link onClick={dissapear} to="/portal/payhistory" className="item">Payment History</Link>
            <Link onClick={dissapear} to="/portal/course" className="item">Course Registration</Link>
            <Link onClick={dissapear} to="/portal/notice" className="item">Notice Board</Link>
            <Link onClick={dissapear} to="/portal/chat" className="item">Chat With Students</Link>
            <Link onClick={dissapear} to="/portal/help" className="item">Help</Link>
            <Link to="" className="item">Log Out</Link>
          </nav>
        </aside>
        

        <Routes>
          <Route path='/dash' element={<Main/>}/>
          <Route path='/profile' element={<Profile sidebar={sideBar}/>}/>
          <Route path='/pay' element={<Pay/>}/>
          <Route path='/payhistory' element={<PayHistory/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/notice' element={<Notice/>}/>
          <Route path="/help" element={<Help/>}/>
        </Routes>
      </div>
    </>
  )
}

export default StudentPortal