import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'





const Profile = () => {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [matric, setmatric] = useState("")
  const [image, setimage] = useState('')
  const [newImage, setnewImage] = useState('')

  let endpoint = 'https://school-portal-back.onrender.com/student/image'
  useEffect(() => {
    if(!localStorage.mystatus){
      navigate('/student/signin')
    }else {
   let myProfile = JSON.parse(localStorage.getItem('myprofile'))
   console.log(myProfile.response.firstname);
   setfirstname(myProfile.response.firstname)
   setlastname(myProfile.response.lastname)
   setemail(myProfile.response.email)
   setmatric(myProfile.response.matric)
    }
  }, [])

  const changeFile = (e) => {
      let myImage = e.target.files[0]
      let reader = new FileReader
      reader.readAsDataURL(myImage)
      reader.onload = () => {
        setimage(reader.result);
      }
  }
  const uploadFile = () => {
    axios.post(endpoint,{image})
    .then((response)=>{
        localStorage.setItem('myimage',JSON.stringify(response.data.firstImage))
        setnewImage(response.data.firstImage)
      
  })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  return (
    <>
      <main className="content grid border border-cyan-500 bg-slate-200 p-10">
          <div className='flex justify-between'>
            <h1 className='font-bold'>PROFILE</h1>
            <div className='h-full'>
             <img src={newImage} width={100} className='h-full rounded-full' alt="" />
            </div>
          </div>
            <div className='flex justify-between'>
              {/* <input type="hidden" /> */} <p></p>
              <div>
              <input type="file" onChange={(e)=>changeFile(e)}/>
              <button onClick={uploadFile}>upload</button>
            </div>
            </div>
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
            </div>
        </main>
        
    </>
  )
}



export default Profile