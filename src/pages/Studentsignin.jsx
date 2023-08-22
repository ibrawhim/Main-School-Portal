import React from 'react';
import fully from '../Images/fully.jpg'

const Studentsignin = () => {

    let myDiv = {
        minWidth: '100vw',
        marginBottom: '10%' 
    }
  return (
    <>
    <div style={myDiv}>
        <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-6'>
            <div className='grid justify-center mt-20 '>
                <form action="" className='flex flex-col w-96'>
                <h1 className='text-cyan-400'>SIGN IN</h1>
                    <input type="text" placeholder='name@mail.com' className='border border-4 my-2 p-2 rounded border-cyan-400'/>
                    <input type="text" placeholder='Password' className='border border-4 my-2 p-2 rounded border-cyan-400'/>
                    <button className='bg-cyan-900 p-2 rounded text-white'>Sign In</button>
                </form>
            </div>
            <div className=''>
                <img src={fully} className='rounded' alt=""/>
            </div>
        </section>
    </div>
    </>
  )
}

export default Studentsignin