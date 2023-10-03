import React, { useEffect, useState } from 'react'
import nav from '../Images/nav.png'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { Navigate, useNavigate } from 'react-router-dom';





const Pay = () => {
  
  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.mystatus){
      navigate('/student/signin')
    }
  }, [])

  const hideSideBar = () => {
    console.log(sidebar);
    
    document.querySelector('.sidebar').style.width = '100%';
    document.querySelector('.content').style.display = 'none';
  }

  
  const [myemail, setmyemail] = useState('')
  const [myamount, setmyamount] = useState('')
  const [myfirstname, setmyfirstname] = useState('')
  const [myphone, setmyphone] = useState('')



  return (
    <>
            <main className="content grid border border-cyan-500 bg-slate-200 p-0">
            <h1 className='font-bold'>PAY</h1>
            <div className='shadow rounded-xl lg:w-1/2 md:w-1/2 sm:w-2/3   mb-72 mx-auto p-2'>
              <form action="" id='paymentForm'>
            <div className='my-2'>
                  <label htmlFor="firstname">Firstname:</label>
                  <input type="text" className='text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setmyfirstname(e.target.value)} value={myfirstname}/>
                </div>
                <div className='my-2'>
                  <label htmlFor="phone">Phone:</label>
                  <input type="text"  className=' text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setmyphone(e.target.value)} value={myphone}/>
                </div>
                <div className='my-2'>
                  <label htmlFor="email">Email:</label>
                  <input type="text"  className=' text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setmyemail(e.target.value)} value={myemail}/>
                </div>
                <div className='my-2'>
                  <label htmlFor="amount">Amount:</label>
                  <input type="text"  className=' text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setmyamount(e.target.value)} value={myamount}/>
                </div>
                
                <button className='bg-cyan-800 w-full rounded text-white my-2 py-2'>Pay</button>
                </form>
            </div>
        </main>
    </>
  )
}

export default Pay