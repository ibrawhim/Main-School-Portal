  import React, { useEffect } from 'react'
  import nav from '../Images/nav.png'
import { Navigate, useNavigate } from 'react-router-dom';
  


const Course = () => {
  const navigate = useNavigate()
  const hideSideBar = () => {
    console.log(sidebar);
    
    document.querySelector('.sidebar').style.width = '100%';
    document.querySelector('.content').style.display = 'none';
}
useEffect(() => {
  if(!localStorage.mystatus){
    navigate('/student/signin')
  }
}, [])

  return (
    <>
    <div>
      <main className="grid border border-cyan-500 bg-slate-200">
            <h1 className='font-bold text-cyan-800'>COURSE REGISTRATION</h1>
            <div className='border bg-cyan-800'>
                <select name="" id="" className='bg-cyan-800 text-white shadow-xl'>
                  <option value="">Select Courses</option>
                  <option value="">CHE 101</option>
                  <option value="">MTH 102</option>
                  <option value="">BIO 103</option>
                  <option value="">SOC 104</option>
                  <option value="">AGR 105</option>
                  <option value="">PHY 106</option>
                  <option value="">PSY 107</option>
                  <option value="">CVE 108</option>
                  <option value="">GE0 109</option>
                </select>
                <button className='my-3 text-white'>Add Course</button>
            </div>
        </main>
        </div>
    </>
  )
}

export default Course