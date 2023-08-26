import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'





const Congratulation = () => {
    // let endpoint = 'http://localhost:4223/student/signup'

    let myDiv = {
        position: 'relative',
        width: '100vw',
        height: '100vh'
    }
    let mySec = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    let myresult = JSON.parse(localStorage.getItem('myResult'))
    let matric = (myresult.result.matric);
    let name = (myresult.result.lastname)
    
    // useEffect(() => {
    //     axios.get(endpoint).then((response)=>{console.log(response);})
    //     .catch((err)=>{console.log(err);})
    // }, [])
    

   
  return (
    
    <>
       <div className='bg-cyan-800 border' style={myDiv}>
        <section style={mySec} className='w-full shadow-2xl'>
            <div className='border w-12/12'>
                <h1 className='text-3xl text-center text-white my-4'>Sign Up Successful</h1>
                <p className='text-white text-center text-xl my-4'>Welcome {name}</p>
                <p className='text-2xl text-white my-4 text-center'>Your matric number is <span className='text-red-700 font-bold'>{matric}</span></p>
                <Link className='my-4 font-bold flex justify-center underline text-2xl' to="/student/signin">Click here to Sign In</Link>
            </div>
        </section>
        </div>
    </>
  )
}

export default Congratulation