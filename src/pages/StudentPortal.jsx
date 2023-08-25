import React from 'react'
import '../Side.css'
import {Link, Route, Routes} from 'react-router-dom'
import nav from '../Images/nav.png'
import close from '../Images/close.svg'
import Dashdiv from '../components/Dashdiv'
import Profile from './Profile'
import Main from './Main'
import Pay from './Pay'
import PayHistory from './PayHistory'
import Course from './Course'
import Notice from './Notice'
import Help from './Help'




const StudentPortal = () => {
    const hideSideBar = () => {
        document.querySelector('.sidebar').style.display = 'block';
        // document.querySelector('.sidebar').style.width = '100%';
        document.querySelector('.content').style.display = 'none';
    }
    const hideSide = () => {
      document.querySelector('.sidebar').style.display = 'none';
      // document.querySelector('.content').style.display = 'block';
    }
    const dissapear = () => {
      // document.querySelector('.content').style.display = 'none';
      document.querySelector('.sidebar').style.display = 'none';
    }
    let sideBar = document.querySelector('.sidebar');
   
  return (
    <>
            <div className='bg-cyan-800 py-3 flex justify-between pe-3'>
            <button className='block md:hidden lg:hidden rounded  text-white' onClick={hideSideBar}><img className='text-white' src={nav} alt="" width={25}/></button>
                <p className='text-white'>Name</p>
                <p className='text-white'>image</p>
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
            <Link onClick={dissapear} to="/portal/help" className="item sm:text-black">Help</Link>
            <Link to="" className="item">Log Out</Link>
          </nav>
        </aside>
        {/* <main className="content border border-cyan-500 p-0">
          <h1>Main page</h1>
          <section>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-6 my-3 gap-1'>
            <Dashdiv id='Lorem ipsum dolor sit' level='level 1' style='shadow p-2'/>
            <Dashdiv id='sit amet consectetur adipisicing' level='level 2' style='shadow p-2'/>
            <Dashdiv id='Fugiat voluptate, dolores' level='level 3' style='shadow p-2'/>
            <Dashdiv id='dolores accusamus dolore quae' level='level 4' style='shadow p-2'/>
            <Dashdiv id='Lorem ipsum dolor sit' level='level 5' style='shadow p-2'/>
            <Dashdiv id='sit amet consectetur adipisicing' level='level 6' style='shadow p-2'/>
            <Dashdiv id='Fugiat voluptate, dolores' level='level 7' style='shadow p-2'/>
            <Dashdiv id='dolores accusamus dolore quae' level='level 8' style='shadow p-2'/>
            </div>
          </section>
          <section className='mx-5 py-2'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3  rounded'>
              <div className=' shadow p-2 border'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta autem laboriosam modi libero, fugiat voluptates accusantium eum a cumque laborum sint architecto ipsa animi soluta atque vero adipisci dolorem id eos, excepturi rerum expedita similique possimus ea! Aliquid beatae, architecto dolores quis nostrum quisquam corporis eius ducimus repudiandae officiis debitis!</div>
              <div className=' shadow p-2 border'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat possimus vitae, iusto consectetur atque id accusamus. Tenetur aliquid unde possimus.
              </div>
            </div>
          </section>
          <section className='m-5 shadow'>
            <div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum velit, sunt eius facilis minus quae quia tenetur magni incidunt distinctio quis? Qui harum facilis incidunt adipisci voluptates quae ipsam? Voluptate reprehenderit delectus harum eius architecto quaerat optio ab nisi iste tempora enim nobis, a cum necessitatibus? Possimus vero asperiores iure, quam quaerat mollitia ut exercitationem tempore! Veritatis optio suscipit praesentium officiis fugit consectetur, culpa voluptas ea repellendus. Ex maiores ipsa alias tempore quidem. Aspernatur error unde obcaecati nisi consequuntur iusto labore quibusdam dicta maiores iure. Ex obcaecati accusamus perferendis ab mollitia labore repudiandae. Pariatur voluptate cumque eveniet dicta omnis obcaecati!
              </div>
            </div>
          </section>
        </main> */}

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