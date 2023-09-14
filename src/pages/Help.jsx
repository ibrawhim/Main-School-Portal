import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'





const Help = () => {
  const navigate = useNavigate()
  const [help, sethelp] = useState("")
  const [subject, setsubject] = useState("")

  useEffect(() => {
    if(!localStorage.mystatus){
      navigate('/student/signin')
    }
  }, [])
  let date = new Date()
  const helpDate = date.toLocaleDateString()
  const helpTime = date.toLocaleTimeString()
  const [myhelp, setmyhelp] = useState({})

  let helpStudent = {
    subject,
    help,
    helpTime,
    helpDate
  }
  
  let helpurl =  'https://main-school-portal.onrender.com/student/help'
  // let helpurl =  'http://localhost:4223/student/help'
  const sendHelp = () => {
  console.log(subject,help);
      axios.post(helpurl,helpStudent)
      .then((response)=>{
        console.log(response.data.result);
        setmyhelp(response.data.result)
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  return (
    <>
      <div>
        <section className='mx-auto'>
          <div className=' shadow-xl p-4'>
            <h4 className='font-semibold'>WHAT DO YOU NEED HELP WITH?</h4>
              <p className='text-xl text-justify'>This page is solely created to help students answer their questions and help with any issues they have.</p>
              <input type="text"  placeholder='Subject' className='w-full border border-black py-2 my-2 rounded' onChange={(e)=>setsubject(e.target.value)}/>
              <textarea   id="" cols="30" rows="10" placeholder='How can we help?' className='my-3 border w-full border-black rounded' onChange={(e)=>sethelp(e.target.value)}></textarea>
              <button onClick={sendHelp} className='w-full text-center bg-cyan-800 text-white py-2 rounded'>Send</button>
          </div>
        </section>
        <section>
          <div>
            <div>{myhelp.subject}</div>
            <div>{myhelp.help}</div>
            <div>{myhelp.helpTime}</div>
            <div>{myhelp.helpDate}</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Help