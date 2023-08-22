import React from 'react'
import '../Side.css'

const SideBar = () => {
  return (
    <>
    <div className="app">
        

    <aside className="sidebar bg-cyan-800 border borde-cyan-500 shadow-2xl hidden sm:block">

      <h3>menu</h3>
      <nav className="menu">
        <a href="" className="item active">Home</a>
        <a href="" className="item">About</a>
        <a href="" className="item">Dashboard</a>
        <a href="" className="item">Settings</a>
      </nav>
    </aside>
    <main className="content border border-cyan-500 p-0">
        <div className='bg-cyan-800 py-3 flex justify-between'>
        <button className='block md:hidden lg:hidden rounded p-1 mt-px bg-black text-white'>here</button>
            <p className='text-white'>Name</p>
            <p className='text-white'>Matric No</p>
            <p className='text-white'>image</p>
        </div>
      <h1>Main page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate, dolores accusamus dolore quae atque nam neque magni odit, harum inventore temporibus tempora consequatur in incidunt nihil eum illo labore.</p>
    </main>
  </div>
    </>
  )
}

export default SideBar