import React from 'react'

const Help = () => {
  return (
    <>
      <div className=''>
        <section className='mx-auto'>
          <div className=' shadow-xl p-4'>
            <h4 className='font-semibold'>WHAT DO YOU NEED HELP WITH?</h4>
              <p className='text-xl text-justify'>This page is solely created to help students answer their questions and help with any issues they have.</p>
              <textarea name="" id="" cols="30" rows="10" placeholder='Write subject here' className='my-3 border w-full border-black rounded'></textarea>
              <button className='w-full text-center bg-cyan-800 text-white py-2 rounded'>Send</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Help