import React from 'react'
import nav from '../Images/nav.png'

const Profile = (sidebar) => {
//   const hideSideBar = () => {
//     console.log(sidebar);
    
//     document.querySelector('.sidebar').style.width = '100%';
//     document.querySelector('.content').style.display = 'none';
// }
  return (
    <>
      <main className="content grid border border-cyan-500 p-0">
            {/* <div className='bg-cyan-800 py-3 mb-0 flex justify-between pe-3 h-12'>
            <button className='block md:hidden lg:hidden rounded  text-white' onClick={hideSideBar}><img className='text-white' src={nav} alt="" width={25}/></button>
                <p className='text-white'>Name</p>
                <p className='text-white'>image</p>
            </div> */}
            <h1 className='font-bold'>PROFILE</h1>
            <div className='border p-0 m-0 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-40 gap-10'>
                <div className='border-t border-cyan-800'>Lorem ipsum dolor sit amet.</div>
                <div className='border-t border-cyan-800'>Lorem ipsum dolor sit amet.</div>
                <div className='border-t border-cyan-800'>Lorem ipsum dolor sit amet.</div>
                <div className='border-t border-cyan-800'>Lorem ipsum dolor sit amet.</div>
                <div className='border-t border-cyan-800'>Lorem ipsum dolor sit amet.</div>
                <div className='border-t border-cyan-800'>Lorem ipsum dolor sit amet.</div>
            </div>
        </main>
        
    </>
  )
}



export default Profile