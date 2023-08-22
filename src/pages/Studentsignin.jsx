import React from 'react';
// import fully from '../Images/fully.jpg'
import photo from '../Images/photo.jpeg'

const Studentsignin = () => {

    let myDiv = {
        minWidth: '100vw',
        marginBottom: '10%',
        // height: '60vh',
    }
  return (
    <>
    <div style={myDiv} className='overflow-hidden'>
        <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center '>
            <div className='grid justify-center mt-20'>
                <form action="" className='flex flex-col w-96 shadow-2xl p-6 rounded-2xl'>
                <h1 className='text-cyan-400'>SIGN IN</h1>
                    <input type="text" placeholder='name@mail.com' className='border border-2 my-2 p-2 rounded border-cyan-400'/>
                    <input type="text" placeholder='Password' className='border border-2 my-2 p-2 rounded border-cyan-400'/>
                    <button className='bg-cyan-900 p-2 rounded text-white'>Sign In</button>
                </form>
            </div>
            <div className='me-10'>
                <img src={photo} className='rounded-2xl m-4 sm:m-2 md:m-8 lg:m-6 xl:m-10' alt=""/>
            </div>
        </section>
    </div>
    </>
  )
}

export default Studentsignin