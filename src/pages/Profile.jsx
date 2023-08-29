import React, { useEffect, useState } from 'react'



const Profile = () => {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [matric, setmatric] = useState("")
  useEffect(() => {
   let myProfile = JSON.parse(localStorage.getItem('myprofile'))
   console.log(myProfile.response.firstname);
   setfirstname(myProfile.response.firstname)
   setlastname(myProfile.response.lastname)
   setemail(myProfile.response.email)
   setmatric(myProfile.response.matric)
  }, [])
  
  return (
    <>
      <main className="content grid border border-cyan-500 bg-slate-200 p-10">
            <h1 className='font-bold'>PROFILE</h1>
            <div className='border p-0 m-0 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-40 gap-10'>
                <div>
                  <p className='font-bold text-cyan-800'>Firstname:</p>
                  <p className='my-5 border border-cyan-800 border-2 py-2 text-center font-semibold'>{firstname}</p>
                </div>
                <div>
                  <p className='font-bold text-cyan-800'>Lastname:</p>
                  <p className='my-5 border border-cyan-800 border-2 py-2 text-center font-semibold'>{lastname}</p>
                </div>
                <div>
                  <p className='font-bold text-cyan-800'>Email:</p>
                  <p className='my-5 border border-cyan-800 border-2 py-2 text-center font-semibold'>{email}</p>
                </div>
                <div>
                  <p className='font-bold text-cyan-800'>Matric no:</p>
                  <p className='my-5 border border-cyan-800 border-2 py-2 text-center font-semibold'>{matric}</p>
                </div>
                {/* <div className='border-b border-cyan-800'>Lorem ipsum dolor sit amet.</div>
                <div className='border-b border-cyan-800'>Lorem ipsum dolor sit amet.</div>
                <div className='border-b border-cyan-800'>Lorem ipsum dolor sit amet.</div>
                <div className='border-b border-cyan-800'>Lorem ipsum dolor sit amet.</div>
                <div className='border-b border-cyan-800'>Lorem ipsum dolor sit amet.</div> */}
            </div>
        </main>
        
    </>
  )
}



export default Profile