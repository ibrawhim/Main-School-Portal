import React from 'react'
import '../Side.css'
import {Link} from 'react-router-dom'
import nav from '../Images/nav.png'
import x from '../Images/x.png'
import close from '../Images/close.svg'




const StudentPortal = () => {
    const hideSideBar = () => {
        document.querySelector('.sidebar').style.display = 'block';
        document.querySelector('.sidebar').style.width = '100%';
        document.querySelector('.content').style.display = 'none';
    }
    const hideSide = () => {
      document.querySelector('.sidebar').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }
  return (
    <>
        <div className="app">
        <aside id='sideBar' className="sidebar bg-cyan-800 border border-cyan-500 shadow-2xl sm:w-auto  hidden sm:block">
          <span className='flex justify-between'><h3>menu</h3><button className='block md:hidden lg:hidden' onClick={hideSide}><img src={close} alt="" width={30}/></button></span>
          <nav className="menu">
            <Link to="/" className="item active">Home</Link>
            <a href="" className="item">About</a>
            <a href="" className="item">Dashboard</a>
            <a href="" className="item">Profile</a>
            <a href="" className="item">Notice Board</a>
            <a href="" className="item">Log Out</a>
          </nav>
        </aside>
        <main className="content border border-cyan-500 p-0">
            <div className='bg-cyan-800 py-3 flex justify-between pe-3'>
            <button className='block md:hidden lg:hidden rounded  text-white' onClick={hideSideBar}><img className='text-white' src={nav} alt="" width={25}/></button>
                <p className='text-white'>Name</p>
                {/* <p className='text-white'>Matric No</p> */}
                <p className='text-white'>image</p>
            </div>
          <h1>Main page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate, dolores accusamus dolore quae atque nam neque magni odit, harum inventore temporibus tempora consequatur in incidunt nihil eum illo labore.</p>
        </main>
      </div>
    </>
  )
}

export default StudentPortal