import React, { useEffect, useState } from 'react'
import '../Side.css'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import nav from '../Images/nav.png'
// import x from '../Images/x.png'
import close from '../Images/close.svg'
import Dashdiv from '../components/Dashdiv'
import axios from 'axios'





const Main = () => {
//   const hideSideBar = () => {
//     document.querySelector('.sidebar').style.display = 'block';
//     document.querySelector('.sidebar').style.width = '100%';
//     document.querySelector('.content').style.display = 'none';
// }
const [matricno, setmatricno] = useState("")
const [first, setfirst] = useState("")
const [last, setlast] = useState("")
let endpoint = 'http://localhost:4223/student/portal'
let token = localStorage.token
let navigate = useNavigate()

useEffect(() => {
 axios.get(endpoint,{
    headers: {
       "Authorization": `Bearer ${token}`,
       "Content-type": 'application/json',
       "Accept": 'application/json'
    }
 })
 .then((response)=>{
  if(!response.data.status){
    navigate('/student/signin')
  } else {
    setmatricno(response.data.response.matric);
    setfirst(response.data.response.firstname);
    setlast(response.data.response.lastname)
  }
  
 })
 .catch((error)=>{
  console.log(error);
 })
}, [])

  return (
    <>
        
        <main className="content border border-cyan-500 p-0">
          <h1 className='text-xl font-bold'>Welcome {first} {last}</h1>
          <section>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-6 my-3 gap-1'>
            <Dashdiv id='Matric No:' level='level 1' style='shadow p-2 font-semibold' mat={matricno}/>
            <Dashdiv id='Firstname:' level='level 2' style='shadow p-2' mat={first}/>
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
        </main>
    </>
  )
}

export default Main